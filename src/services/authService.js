const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient, Prisma } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ 
    where: { email },
    include: {
      patient: true,
      doctor: true,
      nurse: true,
      labTechnician: true,
      pharmacist: true,
      financeStaff: true,
      receptionist: true
    }
  });
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { id: user.id, role: user.role, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  // Return what controller needs
  return {

    user: {
      id: user.id,
      name: user.name,   
      email: user.email,
      phone: user.phone,
      role: user.role,
      patient: user.patient,
      doctor: user.doctor,
      nurse: user.nurse,
      labTechnician: user.labTechnician,
      pharmacist: user.pharmacist,
      financeStaff: user.financeStaff,
      receptionist: user.receptionist,
    },
    token: token,
    message: 'Login successful',
  };
};


exports.getme = async (id) => {
  const user = await prisma.user.findUnique({ 
    where: { id },
    include: {
      patient: true,
      doctor: true,
      nurse: true
    }
  });
  return {
    user: {
      id: user.id,
      name: user.name,   
      email: user.email,
      role: user.role,
      patient: user.patient,
      doctor: user.doctor,
      nurse: user.nurse
    }
  };
};


exports.registerPatient = async (data) => {
  try {
    // Validate required fields
    const { name, email, password, phone, department, dateOfBirth, gender, address, emergencyContact } = data;
    // console.log("from service", data)

    if (!name || !email || !password || !phone || !dateOfBirth || !gender || !address || !emergencyContact) {
      throw new Error('All fields are required: name, email, password, phone, dateOfBirth, gender, address, emergencyContact');
    }

    // Check if user with email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    }).catch(error => {
      console.error('Error checking existing user:', error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(`Database error: ${error.message}`);
      }
      throw new Error('Database error while checking existing user');
    });

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10).catch(error => {
      console.error('Error hashing password:', error);
      throw new Error('Error processing password');
    });
// console.log("before creating patient")
    const user = await prisma.user.create({
      data: { 
        name,
        email,
        password: hashedPassword,
        role: 'patient',
        phone,
        patient: {
          create: {
            dateOfBirth: new Date(dateOfBirth),
            gender,
            address,
            emergencyContact
          }
        }
      },
      include: {
        patient: true
      }
    }).catch(error => {
      console.error('Error creating user:', error);
      
      // Handle specific Prisma errors
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // P2002 is for unique constraint violations
        if (error.code === 'P2002') {
          throw new Error(`A user with this ${error.meta?.target} already exists`);
        }
        // P2000 is for invalid input data
        if (error.code === 'P2000') {
          throw new Error(`Invalid input data: ${error.message}`);
        }
      }
      
      if (error instanceof Prisma.PrismaClientValidationError) {
        throw new Error(`Validation error: ${error.message}`);
      }
      
      throw new Error(`Failed to create user: ${error.message}`);
    });

// set cookie
    // res.cookie('token', token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   maxAge: 1 * 24 * 60 * 60 * 1000 // 1 day
    // });
   

    return { 
      message: 'Patient registered successfully', 
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        patient: user.patient
      },
      // token 
    };
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};
