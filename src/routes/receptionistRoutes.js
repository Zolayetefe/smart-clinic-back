const express = require('express');
const router = express.Router();
const receptionistController = require('../controllers/receptionistController');

router.get('/patients', receptionistController.getPatients);
router.get('/appointments', receptionistController.getAppointments);
router.post('/book-appointment', receptionistController.bookAppointment);
router.get('/patient/:id', receptionistController.getPatientById);

module.exports = router;