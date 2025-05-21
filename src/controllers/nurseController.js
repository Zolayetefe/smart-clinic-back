const nurseService = require('../services/nurseServices');

exports.checkInAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const { vitals, nurseId } = req.body;

        // Get nurse ID from authenticated user
        // if (!req.user || !req.user.nurse || !req.user.nurse.id) {
        //     throw new Error('Unauthorized: Nurse ID not found');
        // }



        const result = await nurseService.checkInAppointment(id,nurseId, vitals);

        res.status(200).json({
            data: result,
            message: 'Appointment checked in successfully'
        });
    } catch (error) {
        console.error('Error checking in appointment:', error);
        const statusCode = error.message.includes('Unauthorized') ? 401 
            : error.message.includes('not found') ? 404 
            : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error checking in appointment'
        });
    }
};

exports.getAppointments = async (req, res) => {
    const appointments = await nurseService.getAppointments();
    res.status(200).json({
        data: appointments,
        message: 'Appointments fetched successfully'
    });
};