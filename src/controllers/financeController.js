const financeService = require('../services/financeServices');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

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

exports.checkInAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const { symptoms } = req.body;

        const result = await financeService.checkInAppointment(id, symptoms);

        res.status(200).json({
            data: result,
            message: 'Appointment checked in successfully'
        });
    } catch (error) {
        console.error('Error checking in appointment:', error);
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error checking in appointment'
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





// lab tests controller

exports.getLabRequests = async (req, res) => { 
    try {
        const { id } = req.params;

        const labTests = await financeService.getLabRequests();
        res.status(200).json({
            data: labTests
        });
    } catch (error) {
        console.error('Error getting lab tests:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching lab tests'
        });
    }
};

exports.approveLabRequest = async (req, res) => {
    try {
        
        const { id: userId } = req.user;
        
        // Find the Finance record associated with the user
        const userWithFinanceStaff= await prisma.user.findUnique({
            where: { id: userId },
            include: {
                financeStaff: true
            }
        });

        if (!userWithFinanceStaff || !userWithFinanceStaff.financeStaff) {
            return res.status(403).json({
                success: false,
                message: 'User is not authorized as a finance staff'
            });
        }

        const financeStaffId = userWithFinanceStaff.financeStaff.id;

        const { id: requestLabId } = req.params;
        console.log('requestLabId from controller',requestLabId);
        const { tests, totalAmount, patientId } = req.body;
        const result = await financeService.approveLabRequest(requestLabId, financeStaffId, tests, totalAmount, patientId);
        res.status(200).json({
            message: 'Lab request approved successfully',
            data: result
        });
    } catch (error) {
        console.error('Error approving lab test:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error approving lab test'
        });
    }
};




// prescription controller

exports.getPrescriptions = async (req, res) => {
    try {
    
       const prescriptions = await financeService.getPrescriptions();
        res.status(200).json({
            data: prescriptions
        });
    } catch (error) {
        console.error('Error getting prescriptions:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching prescriptions'
        });
    }
};

exports.approvePrescription = async (req, res) => {
    const { id:userId } = req.user;
    try {
              const userWithFinanceStaff = await prisma.user.findUnique({
        where: { id:userId },
        select: {
        financeStaff: {
            select: {
                id: true
            }
        }
    }
}); 
const financeStaffId = userWithFinanceStaff.financeStaff.id;
        const { id:prescriptionId } = req.params;
        const {medications,totalAmount,patientId} = req.body;
        const result = await financeService.approvePrescription(prescriptionId,financeStaffId,patientId,medications,totalAmount);
        res.status(200).json({
            message: 'Prescription approved successfully',
            data: result
        });
    } catch (error) {
        console.error('Error approving prescription:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error approving prescription'
        });
    }
};