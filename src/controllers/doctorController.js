const doctorService = require('../services/doctorServices');

exports.getAppointments = async (req, res) => {
    const appointments = await doctorService.getAppointments(req.params.id);
    res.status(200).json(appointments);
};
