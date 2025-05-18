const bcrypt = require('bcryptjs');
const { PrismaClient, Prisma } = require('../generated/prisma');
const prisma = new PrismaClient();

// Valid weekdays from the enum
const VALID_WEEKDAYS = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

// Function to generate time slots
function generateTimeSlots(day, startTime, endTime) {
  const slots = [];
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  let currentHour = startHour;
  let currentMinute = startMinute;

  while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
    // Format the time as HH:mm
    const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
    
    slots.push({
      day,
      slotTime: timeString,
      isBooked: false
    });

    // Increment by 10 minutes
    currentMinute += 10;
    if (currentMinute >= 60) {
      currentHour += 1;
      currentMinute = currentMinute - 60;
    }
  }

  return slots;
}

exports.register = async (data) => {
  try {
    // Validate required fields
    const { 
      name, 
      email, 
      password, 
      role, 
      phone, 
      department, 
      specialization, 
      availabilities 
    } = data;
    
    console.log("Registration data:", data);

    if (!name || !email || !password || !role || !phone || !department) {
      throw new Error('All fields are required: name, email, password, role, phone, department');
    }

    // Role-specific validation
    switch (role) {
      case 'doctor':
        if (!specialization) {
          throw new Error('Specialization is required for doctors');
        }
        if (!availabilities || !Array.isArray(availabilities) || availabilities.length === 0) {
          throw new Error('At least one availability slot is required for doctors');
        }
        
        // Validate each availability slot
        availabilities.forEach((slot, index) => {
          if (!slot.day || !slot.startTime || !slot.endTime) {
            throw new Error(`Invalid availability slot at index ${index}. Each slot must have day, startTime, and endTime`);
          }
          
          // Validate day is a valid weekday
          const normalizedDay = slot.day.toUpperCase();
          if (!VALID_WEEKDAYS.includes(normalizedDay)) {
            throw new Error(`Invalid day "${slot.day}" at index ${index}. Day must be one of: ${VALID_WEEKDAYS.join(', ')}`);
          }
          
          slot.day = normalizedDay;

          // Validate time format (HH:mm)
          const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
          if (!timeRegex.test(slot.startTime)) {
            throw new Error(`Invalid startTime "${slot.startTime}" at index ${index}. Time must be in 24-hour format (HH:mm)`);
          }
          if (!timeRegex.test(slot.endTime)) {
            throw new Error(`Invalid endTime "${slot.endTime}" at index ${index}. Time must be in 24-hour format (HH:mm)`);
          }

          // Validate endTime is after startTime
          const [startHour, startMinute] = slot.startTime.split(':').map(Number);
          const [endHour, endMinute] = slot.endTime.split(':').map(Number);
          const startMinutes = startHour * 60 + startMinute;
          const endMinutes = endHour * 60 + endMinute;
          
          if (endMinutes <= startMinutes) {
            throw new Error(`Invalid time range at index ${index}. endTime must be after startTime`);
          }
        });
        break;

      case 'patient':
        throw new Error('Please use the patient registration endpoint for registering patients');
        break;

      case 'nurse':
      case 'lab_technician':
      case 'pharmacist':
      case 'finance':
      case 'receptionist':
        // These roles only need the basic fields which are already validated
        break;

      default:
        throw new Error(`Invalid role: ${role}`);
    }

    // Check if user with email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with role-specific data
    const userData = {
      name,
      email,
      password: hashedPassword,
      role,
      phone,
      department
    };

    // Add role-specific relations
    switch (role) {
      case 'doctor':
        userData.doctor = {
          create: {
            specialization,
            availabilities: {
              create: availabilities
            },
            slots: {
              create: availabilities.flatMap(availability => 
                generateTimeSlots(
                  availability.day,
                  availability.startTime,
                  availability.endTime
                )
              )
            }
          }
        };
        break;

      case 'nurse':
        userData.nurse = {
          create: {}
        };
        break;

      case 'lab_technician':
        userData.labTechnician = {
          create: {}
        };
        break;

      case 'pharmacist':
        userData.pharmacist = {
          create: {}
        };
        break;

      case 'finance':
        userData.financeStaff = {
          create: {}
        };
        break;

      case 'receptionist':
        userData.receptionist = {
          create: {}
        };
        break;
    }

    // Create the user with all related data
    const user = await prisma.user.create({
      data: userData,
      include: {
        doctor: {
          include: {
            availabilities: true,
            slots: true
          }
        },
        nurse: true,
        labTechnician: true,
        pharmacist: true,
        financeStaff: true,
        receptionist: true
      }
    });

    console.log(`Successfully registered ${role}:`, user.id);

    // Return appropriate response based on role
    return {
      message: `${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully`,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        department: user.department,
        // Include role-specific data
        ...(user.doctor && { 
          doctor: {
            id: user.doctor.id,
            specialization: user.doctor.specialization,
            availabilities: user.doctor.availabilities,
            slots: user.doctor.slots
          }
        }),
        ...(user.nurse && {
          nurse: {
            id: user.nurse.id
          }
        }),
        ...(user.labTechnician && {
          labTechnician: {
            id: user.labTechnician.id
          }
        }),
        ...(user.pharmacist && {
          pharmacist: {
            id: user.pharmacist.id
          }
        }),
        ...(user.financeStaff && {
          financeStaff: {
            id: user.financeStaff.id
          }
        }),
        ...(user.receptionist && {
          receptionist: {
            id: user.receptionist.id
          }
        })
      }
    };

  } catch (error) {
    console.error('Registration error:', error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error(`A user with this ${error.meta?.target} already exists`);
      }
      throw new Error(`Database error: ${error.message}`);
    }
    throw error;
  }
};

exports.getStaff = async () => {
  const staff = await prisma.user.findMany({
    where: {
      role: {
        in: ['doctor', 'nurse', 'lab_technician', 'finance', 'pharmacist', 'receptionist']
      }
    },
    include: {
      doctor: {
        include: {
          availabilities: {
            orderBy: [
              { day: 'asc' }
            ]
          }
        }
      },
      nurse: true
    }
  });

  return {
    staff: staff.map(staff => ({
      id: staff.id,
      name: staff.name,
      email: staff.email,
      role: staff.role,
      phone: staff.phone,
      department: staff.department,
      doctor: staff.doctor ? {
        ...staff.doctor,
        availabilities: staff.doctor.availabilities.map(availability => ({
          id: availability.id,
          day: availability.day,
          startTime: availability.startTime,
          endTime: availability.endTime
        }))
      } : null,
      nurse: staff.nurse
    }))
  };
};

exports.deleteStaff = async (id) => {
  console.log("from service", id)
  try {
    const staff = await prisma.user.delete({ where: { id } });
    return { message: 'Staff deleted successfully' };
  } catch (error) {
    console.error('Error deleting staff:', error);
    throw new Error('Error deleting staff');
  }
};

exports.getDoctorSlots = async (doctorId) => {
  try {
    const slots = await prisma.doctorSlot.findMany({
      where: {
        doctorId
      },
      orderBy: [
        { day: 'asc' },
        { slotTime: 'asc' }
      ]
    });

    // Group slots by day
    const groupedSlots = slots.reduce((acc, slot) => {
      if (!acc[slot.day]) {
        acc[slot.day] = [];
      }
      acc[slot.day].push({
        id: slot.id,
        time: slot.slotTime,
        isBooked: slot.isBooked
      });
      return acc;
    }, {});

    return {
      doctorId,
      schedule: Object.entries(groupedSlots).map(([day, slots]) => ({
        day,
        slots
      }))
    };
  } catch (error) {
    console.error('Error fetching doctor slots:', error);
    throw new Error('Failed to fetch doctor slots');
  }
};

exports.getPatients = async () => {
  const patients = await prisma.user.findMany({
    where: { role: 'patient' }
  });
  return patients;
};