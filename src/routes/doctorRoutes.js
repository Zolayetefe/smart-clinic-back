const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// doctor routes

router.get("/appointments/:id", isAuthenticated, doctorController.getAppointments);
router.post("/lab-requests", isAuthenticated, doctorController.createLabRequest);
router.get("/lab-requests", isAuthenticated, doctorController.getLabRequests);
router.get("/lab-results", isAuthenticated, doctorController.getLabResults);

module.exports = router;