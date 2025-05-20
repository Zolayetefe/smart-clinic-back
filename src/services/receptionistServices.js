const { PrismaClient, Prisma } = require('../generated/prisma');
// const { emitAppointmentUpdate } = require('../config/socket');
const prisma = new PrismaClient();

exports.getPatients = async () => {
    const patients = await prisma.patient.findMany({
        include: {
            user: true
        }
    });
    console.log("patients", patients);
    return {patients: patients.map(patient => ({
        id: patient.id,
        userId: patient.userId,
        dateOfBirth: patient.dateOfBirth,
        gender: patient.gender,
        address: patient.address,
        gender: patient.gender,
        name: patient.user.name,
        email: patient.user.email,
        phone: patient.user.phone
        }))}
};

exports.getAppointments = async () => {
    const appointments = await prisma.appointment.findMany();
    return appointments;
};

exports.bookAppointment = async (appointmentData) => {
    const { 
        receptionistId,
        patientId, 
        doctorId, 
        slotId, 
        reason, 
        symptoms = [],
    } = appointmentData;

    // Validate required fields
    if (!patientId || !doctorId || !slotId ) {
        throw new Error('Missing required fields');
    }

    try {
        // Start a transaction to ensure data consistency
        const result = await prisma.$transaction(async (prisma) => {
            // 1. First verify the doctor exists
            const doctor = await prisma.doctor.findUnique({
                where: { id: doctorId }
            });

            if (!doctor) {
                throw new Error('Doctor not found');
            }

            // 2. Verify the patient exists
            const patient = await prisma.patient.findUnique({
                where: { id: patientId }
            });
       
            if (!patient) {
                throw new Error('Patient not found');
            }

            // 3. Get the slot details
            const slot = await prisma.doctorSlot.findUnique({
                where: { id: slotId },
                include: { doctor: true }
            });

            if (!slot) {
                throw new Error('Selected time slot does not exist');
            }

            if (slot.isBooked) {
                throw new Error('This time slot is already booked');
            }

            if (slot.doctorId !== doctorId) {
                throw new Error('Slot does not belong to the selected doctor');
            }

            // 4. Calculate the actual appointment date and time
            const appointmentDate = getDateForWeekday(slot.day);
            const [hours, minutes] = slot.slotTime.split(':');
            appointmentDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

            // Verify the appointment is not in the past
            if (appointmentDate < new Date()) {
                throw new Error('Cannot book appointments in the past');
            }

            // 5. Create the appointment
            const appointment = await prisma.appointment.create({
                data: {
                    patientId:patientId,
                    doctorId,
                    dateTime: appointmentDate,
                    reason,
                    status: 'pending',
                    triage: {
                        create: {
                            patientId: patientId,
                            symptoms: symptoms
                        }
                    }
                },
                include: {
                    patient: {
                        include: {
                            user: true
                        }
                    },
                    doctor: {
                        include: {
                            user: true
                        }
                    }
                }
            });
    //create triage record
    const triage = await prisma.triage.create({
        data: {
            patientId: patientId,
            symptoms: symptoms,
            timestamp: appointmentDate
        }
    });

            // 7. Update the doctor slot
            const updatedSlot = await prisma.doctorSlot.update({
                where: {
                    id: slotId
                },
                data: {
                    isBooked: true
                }
            });

            return { 
                appointment, 
                updatedSlot,
                message: 'Appointment booked successfully'
            };
        });

        // Emit real-time update after successful transaction
        emitAppointmentUpdate(
            result.appointment,
            result.triage,
            result.updatedSlot
        );

        return result;

    } catch (error) {
        console.error('Error booking appointment:', error);
        
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            switch (error.code) {
                case 'P2002':
                    throw new Error('This time slot is already booked');
                case 'P2003':
                    throw new Error('Invalid doctor or patient ID');
                case 'P2025':
                    throw new Error('Record not found');
                default:
                    throw new Error(`Database error: ${error.message}`);
            }
        }

        // If it's our custom error, throw it directly
        if (error.message.includes('slot') || 
            error.message.includes('doctor') || 
            error.message.includes('patient') ||
            error.message.includes('Missing') ||
            error.message.includes('Cannot book') ||
            error.message.includes('Invalid appointment')) {
            throw error;
        }

        // For any other errors
        throw new Error('Failed to book appointment. Please try again later.');
    }
};

// Helper function to get the date for a given weekday in the current week
const getDateForWeekday = (weekday) => {
    const today = new Date();
    const currentDay = today.getDay();
    const targetDay = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'].indexOf(weekday);
    
    // Calculate days to add to get to target day
    let daysToAdd = targetDay - currentDay;
    if (daysToAdd < 0) { // If target day is earlier in the week
        daysToAdd += 7;
    }
    
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysToAdd);
    return targetDate;
};

exports.getAppointments = async (user) => {
    const { id: userId, role } = user;
    
    try {
        // Get all appointments with patient and doctor details
        const appointments = await prisma.appointment.findMany({
            where: {
                patient: {
                    userId: userId  // Filter by user ID in the patient relation
                }
            },
            include: {
                doctor: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                                phone: true,
                                department: true
                            }
                        }
                    }
                },
                patient: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                                phone: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                dateTime: 'asc'
            }
        });

        if (!appointments.length && role === 'patient') {
            // Verify if the patient exists
            const patient = await prisma.patient.findUnique({
                where: { userId }
            });
            
            if (!patient) {
                throw new Error('Patient record not found');
            }
        }

        return {
            appointments: appointments.map(apt => ({
                id: apt.id,
                dateTime: apt.dateTime,
                status: apt.status,
                reason: apt.reason,
                doctor: {
                    id: apt.doctor.id,
                    name: apt.doctor.user.name,
                    email: apt.doctor.user.email,
                    phone: apt.doctor.user.phone,
                    department: apt.doctor.user.department,
                    specialization: apt.doctor.specialization
                },
                patient: {
                    id: apt.patient.id,
                    name: apt.patient.user.name,
                    email: apt.patient.user.email,
                    phone: apt.patient.user.phone
                }
            }))
        };
    } catch (error) {
        console.error('Error fetching appointments:', error);
        if (error.message === 'Patient record not found') {
            throw error;
        }
        throw new Error('Failed to fetch appointments');
    }
};

exports.getPatientById = async (id) => {
    try {
        const patient = await prisma.patient.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                        phone: true
                    }
                }
            }
        });

        if (!patient) {
            throw new Error('Patient not found');
        }

        return {
            id: patient.id,
            userId: patient.userId,
            name: patient.user.name,
            email: patient.user.email,
            phone: patient.user.phone,
            address: patient.address,
            dateOfBirth: patient.dateOfBirth,
            gender: patient.gender
        };
    } catch (error) {
        console.error('Error fetching patient:', error);
        if (error.message === 'Patient not found') {
            throw error;
        }
        throw new Error('Failed to fetch patient');
    }
};
