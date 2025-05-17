const patientService = require('../services/patientServices');

exports.getDoctors = async (req, res) => {
    const doctors = await patientService.getDoctors();
    console.log("doctors", doctors);
    res.status(200).json(doctors);
};
