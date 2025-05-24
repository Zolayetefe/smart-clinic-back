const express = require('express');
const router = express.Router();
const { isAuthenticated, isFinanceStaff, isNurseOrFinanceStaff } = require('../middlewares/authMiddleware');
const financeController = require('../controllers/financeController');

router.get('/appointments', isAuthenticated, isNurseOrFinanceStaff, financeController.getAllAppointments);
router.post('/appointments/:id/approve', isAuthenticated, isFinanceStaff, financeController.approveAppointment);
router.get('/appointments/status/:status', isAuthenticated, isFinanceStaff, financeController.getAppointmentsByStatus);


router.get('/medications', isAuthenticated, isFinanceStaff, financeController.getMedications);
router.post('/medication/:id/approve', isAuthenticated, isFinanceStaff, financeController.approveMedication);
// router.get('/medication/status/:status', isAuthenticated, isFinanceStaff, financeController.getMedicationBillsByStatus);


router.get('/lab-tests', isAuthenticated, isFinanceStaff, financeController.getLabTests);
router.post('/lab-tests/:id/approve', isAuthenticated, isFinanceStaff, financeController.approveLabTest);
// router.get('/lab-tests/status/:status', isAuthenticated, isFinanceStaff, financeController.getLabTestsByStatus);

module.exports = router;
