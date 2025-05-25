const patientService = require('../services/patientServices');

exports.getDoctors = async (req, res) => {
    const doctors = await patientService.getDoctors();
    res.status(200).json(doctors);
};

exports.getDoctorsBySpeciality = async (req, res) => {
    const speciality = req.params.speciality;
    const doctors = await patientService.getDoctorsBySpeciality(speciality);
    res.status(200).json(doctors);
};

exports.bookAppointment = async (req, res) => {
    const appointment = await patientService.bookAppointment(req.body,req.user);
    res.status(200).json(appointment);
};  

exports.getAppointments = async (req, res) => {
    const appointments = await patientService.getAppointments(req.user);
    res.status(200).json(appointments);
};


exports.getMedicalHistory = async (req, res) => {
    const medicalHistory = await patientService.getMedicalHistory(req.user);
    res.status(200).json(medicalHistory);
};