const financeService = require('../services/financeServices');

exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await financeService.getAllAppointments();
        res.status(200).json({
            data: appointments
        });
    } catch (error) {
        console.error('Error getting appointments:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching appointments'
        });
    }
};

exports.approveAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, approvalStatus } = req.body;
        console.log(req.body);
        console.log(id);
        
        // Get finance staff ID from authenticated user
        if (!req.user || !req.user.id) {
            throw new Error('Unauthorized: Finance staff ID not found');
        }

        // First get the finance staff record
        const financeStaff = await financeService.getFinanceStaffByUserId(req.user.id);
        if (!financeStaff) {
            throw new Error('Unauthorized: Not a finance staff member');
        }

        const result = await financeService.approveAppointment(id, {
            amount,
            financeStaffId: financeStaff.id,
            approvalStatus
        });

        res.status(200).json({
            success: true,
            message: `Appointment ${approvalStatus} successfully`
        });
    } catch (error) {
        console.error('Error approving appointment:', error);
        const statusCode = error.message.includes('Unauthorized') ? 401 
            : error.message.includes('not found') ? 404 
            : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error approving appointment'
        });
    }
};

exports.getAppointmentsByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const appointments = await financeService.getAppointmentsByStatus(status);
        res.status(200).json({
            success: true,
            data: appointments
        });
    } catch (error) {
        console.error('Error getting appointments by status:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching appointments'
        });
    }
};