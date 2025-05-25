const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');
const adminController = require('../controllers/adminController');

// Protected Admin Route (only accessible to admins)
// router.get('/dashboard', isAuthenticated, isAdmin, adminController.dashboard);
router.post('/staff/register', isAuthenticated, isAdmin, adminController.register);


router.get('/staff', isAuthenticated, isAdmin, adminController.getStaff);
router.delete('/staff/:id', isAuthenticated, isAdmin, adminController.deleteStaff);

// router.get('/users', isAuthenticated, isAdmin, adminController.getUsers);
router.get('/patients', isAuthenticated, isAdmin, adminController.getPatients);

router.get('/getTPatient', isAuthenticated, isAdmin, adminController.getTPatient);
router.get('/todayAppointment',isAuthenticated,isAdmin,adminController.todayAppointment)
router.get('/totalActiveStaff',isAuthenticated,isAdmin,adminController.getTotalActiveStaff)
router.get('/monthlyRevenue',isAuthenticated,isAdmin,adminController.getMonthlyRevenue)

router.put('/staff/:userId/status', adminController.toggleStaffStatusController);
module.exports = router;
