const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { createServer } = require('http');
const { initializeSocket } = require('./src/config/socket');
const cron = require('node-cron');
const expireDoctorSlots = require('./src/tasks/expireDoctorSlots'); // <-- Import your scheduler

const authRoutes = require('./src/routes/authRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const doctorRoutes = require('./src/routes/doctorRoutes');
const patientRoutes = require('./src/routes/patientRoutes');
const receptionistRoutes = require('./src/routes/receptionistRoutes');
const financeRoutes = require('./src/routes/financeRoutes');
const nurseRoutes = require('./src/routes/nurseRoutes');
const labRoutes = require('./src/routes/labRoutes');
const pharmacistRoutes = require('./src/routes/pharmacistRoutes');

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Initialize Socket.IO
initializeSocket(httpServer);

// Middlewares
const allowedOrigins = [
  'http://localhost:5174',
  'http://localhost:5173',
  'https://your-production-domain.com'
];

app.use(cors({
  origin: allowedOrigins,
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
app.use('/api/lab', labRoutes);
app.use('/api/pharmacist', pharmacistRoutes);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// ✅ Schedule the Cron Job
// Run every 15 minutes
cron.schedule('*/15 * * * *', async () => {
  console.log('⏳ Running scheduled cleanup task...');
  await expireDoctorSlots();
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

module.exports = app;
