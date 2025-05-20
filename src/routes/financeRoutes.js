const express = require('express');
const router = express.Router();
const { isAuthenticated, isFinanceStaff     } = require('../middlewares/authMiddleware');
const financeController = require('../controllers/financeController');




router.get('/appointments', isAuthenticated, isFinanceStaff, financeController.getAllAppointments);
router.post('/appointments/:id/approve', isAuthenticated, isFinanceStaff, financeController.approveAppointment);
router.get('/appointments/status/:status', isAuthenticated, isFinanceStaff, financeController.getAppointmentsByStatus);

module.exports = router;
