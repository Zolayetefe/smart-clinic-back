const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Middleware to check if the user is authenticated
const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};



// Middleware to check if the user is an admin
const isAdmin = async (req, res, next) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });

  if (user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }

  next();
};



// Middleware to check if the user is a receptionist
const isReceptionist = async (req, res, next) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  if (user.role !== 'receptionist') {
    return res.status(403).json({ message: 'Access denied. Receptionists only.' });
  }
  next();
};



// Middleware to check if user is finance staff
const isFinanceStaff = (req, res, next) => {
  if (req.user && req.user.role === 'finance') {
      next();
  } else {
      res.status(403).json({
          success: false,
          message: 'Access denied. Finance staff only.'
      });
  }
};


// Middleware to check if user is nurse or finance staff
const isNurseOrFinanceStaff = async (req, res, next) => {
  if (req.user && (req.user.role === 'nurse' || req.user.role === 'finance')) {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: 'Access denied. Nurse or finance staff only.'
    });
  }
}
const isNurse = async (req, res, next) => {
  if (req.user && req.user.role === 'nurse') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Nurses only.' });
  }
}

const isPharmacist = async (req, res, next) => {    
  if (req.user && req.user.role === 'pharmacist') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Pharmacists only.' });
  }
}
module.exports = { isAuthenticated, isAdmin, isReceptionist, isFinanceStaff, isNurseOrFinanceStaff, isNurse, isPharmacist };
