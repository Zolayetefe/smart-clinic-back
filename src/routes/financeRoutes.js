const express = require('express');
const router = express.Router();
const { isAuthenticated, isFinanceStaff, isNurseOrFinanceStaff } = require('../middlewares/authMiddleware');
const financeController = require('../controllers/financeController');

router.get('/appointments', isAuthenticated, isNurseOrFinanceStaff, financeController.getAllAppointments);
router.post('/appointments/:id/approve', isAuthenticated, isFinanceStaff, financeController.approveAppointment);
router.get('/appointments/status/:status', isAuthenticated, isFinanceStaff, financeController.getAppointmentsByStatus);


router.get('/prescriptions', isAuthenticated, isFinanceStaff, financeController.getPrescriptions);
router.post('/prescription/:id/approve', isAuthenticated, isFinanceStaff, financeController.approvePrescription);
// router.get('/medication/status/:status', isAuthenticated, isFinanceStaff, financeController.getMedicationBillsByStatus);


router.get('/labRequests', isAuthenticated, isFinanceStaff, financeController.getLabRequests);
router.post('/labRequests/:id/approve', isAuthenticated, isFinanceStaff, financeController.approveLabRequest);
// router.get('/lab-tests/status/:status', isAuthenticated, isFinanceStaff, financeController.getLabTestsByStatus);

module.exports = router;
