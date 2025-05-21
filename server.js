const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { createServer } = require('http');
const { initializeSocket } = require('./src/config/socket');
const authRoutes = require('./src/routes/authRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const doctorRoutes = require('./src/routes/doctorRoutes');
const patientRoutes = require('./src/routes/patientRoutes');
const receptionistRoutes = require('./src/routes/receptionistRoutes');
const financeRoutes = require('./src/routes/financeRoutes');
const nurseRoutes = require('./src/routes/nurseRoutes');

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Initialize Socket.IO
initializeSocket(httpServer);

// Middlewares
const allowedOrigins = [
  'http://localhost:5174', // Your default frontend port
  'http://localhost:5173', // Common alternative port (like Vite default)
  'https://your-production-domain.com' // Your production frontend
];

app.use(cors({
  origin: allowedOrigins, // Updated to match your current frontend port
  credentials: true,               
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],     
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/receptionist', receptionistRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/nurse', nurseRoutes);
// 404 Handler'
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;