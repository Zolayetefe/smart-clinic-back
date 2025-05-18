const receptionistService = require('../services/receptionistServices');

exports.getPatients = async (req, res) => {
    const patients = await receptionistService.getPatients();
    res.status(200).json(patients);
};


exports.getAppointments = async (req, res) => {
    const appointments = await receptionistService.getAppointments();
    res.status(200).json(appointments);
};


exports.bookAppointment = async (req, res) => {
    const appointment = await receptionistService.bookAppointment(req.body);
    res.status(200).json(appointment);
};


