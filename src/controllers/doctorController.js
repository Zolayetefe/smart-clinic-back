const doctorService = require('../services/doctorServices');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();



exports.getAppointments = async (req, res) => {
    const appointments = await doctorService.getAppointments(req.params.id);
    res.status(200).json(appointments);
};



exports.createLabRequest = async (req, res) => {
    try {
        
        const { id } = req.user;
        
        // Find the doctor record associated with the user
        const userWithDoctor = await prisma.user.findUnique({
            where: { id },
            include: {
                doctor: true
            }
        });

        if (!userWithDoctor || !userWithDoctor.doctor) {
            return res.status(403).json({
                success: false,
                message: 'User is not authorized as a doctor'
            });
        }

        const doctorId = userWithDoctor.doctor.id;
        
        // Validate required fields
        const { patientId, priority, notes, tests, status } = req.body;
        
        if (!patientId) {
            return res.status(400).json({
                success: false,
                message: 'patientId is required'
            });
        }

        if (!tests || !Array.isArray(tests) || tests.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'tests array is required and must not be empty'
            });
        }

        // Create the lab request using the found doctorId
        const labRequest = await doctorService.createLabRequest(
            { patientId, priority, notes, tests, status },
            doctorId
        );
        
        return res.status(201).json({
            success: true,
            data: labRequest
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'Error creating lab request',
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};



exports.getLabRequests = async (req, res) => {
    const { id } = req.user;
    const userWithDoctor = await prisma.user.findUnique({
        where: { id },
        select: {
            doctor: {
                select: {
                    id: true
                }
            }
        }
    });
    const doctorId = userWithDoctor.doctor.id;
    const labRequests = await doctorService.getLabRequests(doctorId);
    res.status(200).json(labRequests);
};


exports.getLabResults = async (req, res) => {
    const { id } = req.user;
    try {       
        const userWithDoctor = await prisma.user.findUnique({
            where: { id },
            select: {
            doctor: {
                select: {
                    id: true
                }
            }
        }
    }); 
    const doctorId = userWithDoctor.doctor.id;
    const labResults = await doctorService.getLabResults(doctorId);
    res.status(200).json(labResults);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'Error getting lab results',
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};


