const labService = require('../services/labServices');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getLabRequests = async (req, res) => {
    const labRequests = await labService.getLabRequests();
    res.status(200).json(labRequests);
};

exports.createLabResult = async (req, res) => {
    const { id } = req.user;
    const { labRequestId, result, notes } = req.body;
    console.log(labRequestId, result, notes);
    const userWithLabTech = await prisma.user.findUnique({
        where: { id },
        select: {
            labTechnician: {
                select: {
                    id: true
                }
            }
        }
    });

    if (!userWithLabTech || !userWithLabTech.labTechnician) {
        return res.status(403).json({
            success: false,
            message: 'User is not authorized as a lab technician'
        });
    }

    const labTechnicianId = userWithLabTech.labTechnician.id;
    try {
        const labResult = await labService.createLabResult(labTechnicianId, labRequestId, result, notes);
        res.status(201).json(labResult);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create lab result'
        });
    }
};

exports.getLabResults = async (req, res) => {
    const { id } = req.user;
    const userWithLabTech = await prisma.user.findUnique({
        where: { id },
        select: {
            labTechnician: {
                select: {
                    id: true
                }
            }
        }
    });

    if (!userWithLabTech || !userWithLabTech.labTechnician) {
        return res.status(403).json({
            success: false,
            message: 'User is not authorized as a lab technician'
        });
    }

    const labTechnicianId = userWithLabTech.labTechnician.id;
    const labResults = await labService.getLabResults(labTechnicianId);
    res.status(200).json(labResults);
};