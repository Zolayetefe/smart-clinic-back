const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');
const patientController = require('../controllers/patientController');
// patient routes

router.get('/doctors', isAuthenticated, patientController.getDoctors);
// router.get('/doctor/:id', isAuthenticated, authController.getDoctorById);
// router.post('/book-appointment', isAuthenticated, authController.bookAppointment);
// router.get('/appointments', isAuthenticated, authController.getAppointments);
// router.get('/appointment/:id', isAuthenticated, authController.getAppointmentById);
// router.post('/cancel-appointment', isAuthenticated, authController.cancelAppointment);
// router.get('/prescriptions', isAuthenticated, authController.getPrescriptions);

module.exports = router;
