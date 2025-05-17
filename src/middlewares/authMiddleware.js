const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Middleware to check if the user is authenticated
const isAuthenticated = async (req, res, next) => {
  console.log("from middleware",req.cookies)
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
console.log("from middleware",token)
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  console.log("from middleware",token)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  console.log("fUSER",req.user)
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

module.exports = { isAuthenticated, isAdmin, isReceptionist };
