const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// doctor routes

router.get("/appointments/:id", isAuthenticated, doctorController.getAppointments);

module.exports = router;