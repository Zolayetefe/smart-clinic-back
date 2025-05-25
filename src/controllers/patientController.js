const patientService = require('../services/patientServices');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();



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
  
    const { id } = req.user;

    // Find the doctor record associated with the user
    const userWithPatient = await prisma.user.findUnique({
        where: { id},
        include: {
            patient: true
        }
    });

    if (!userWithPatient || !userWithPatient.patient) {
        return res.status(403).json({
            success: false,
            message: 'User is not authorized as a doctor'
        });
    }
    const patientId = userWithPatient.patient.id;
    const medicalHistory = await patientService.getMedicalHistory(patientId);
    res.status(200).json(medicalHistory);
};