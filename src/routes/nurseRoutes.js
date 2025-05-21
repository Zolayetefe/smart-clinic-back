const express = require('express');
const router = express.Router();
const { isAuthenticated, isNurse } = require('../middlewares/authMiddleware');
const nurseController = require('../controllers/nurseController');

router.post('/appointments/:id/check-in', isAuthenticated, isNurse, nurseController.checkInAppointment);
router.get('/appointments', isAuthenticated, isNurse, nurseController.getAppointments);

module.exports = router;
