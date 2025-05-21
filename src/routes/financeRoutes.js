const express = require('express');
const router = express.Router();
const { isAuthenticated, isFinanceStaff, isNurseOrFinanceStaff } = require('../middlewares/authMiddleware');
const financeController = require('../controllers/financeController');

router.get('/appointments', isAuthenticated, isNurseOrFinanceStaff, financeController.getAllAppointments);
router.post('/appointments/:id/approve', isAuthenticated, isFinanceStaff, financeController.approveAppointment);
router.post('/appointments/:id/check-in', isAuthenticated, isNurseOrFinanceStaff, financeController.checkInAppointment);
router.get('/appointments/status/:status', isAuthenticated, isFinanceStaff, financeController.getAppointmentsByStatus);

module.exports = router;
