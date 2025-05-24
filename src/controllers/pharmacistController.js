const pharmacistService = require('../services/pharmacistServices');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
exports.dispenseMedication = async (req, res) => {
    const { id } = req.user;
    // Find the doctor record associated with the user
    const userWithPharmacist = await prisma.user.findUnique({
        where: { id },
        select: {
            pharmacist: {
                select: {
                    id: true
                }
            }
        }
    });

    if (!userWithPharmacist || !userWithPharmacist.pharmacist) {
        return res.status(403).json({
            success: false,
            message: 'User is not authorized as a pharmacist'
        });
    }

    const pharmacistId = userWithPharmacist.pharmacist.id;
    
    const { prescriptionId, medications } = req.body;
    const dispense = await pharmacistService.dispenseMedication(pharmacistId, prescriptionId, medications);
    res.status(200).json(dispense);
};

exports.getPrescriptions = async (req, res) => {  
    const { id } = req.user;
    const userWithPharmacist = await prisma.user.findUnique({
        where: { id },
        select: {
            pharmacist: {
                select: {
                    id: true
                }
            }
        }
    });

    if (!userWithPharmacist || !userWithPharmacist.pharmacist) {
        return res.status(403).json({
            success: false,
            message: 'User is not authorized as a pharmacist'
        });
    }

    const pharmacistId = userWithPharmacist.pharmacist.id;
    
    const prescriptions = await pharmacistService.getPrescriptions(pharmacistId);
    res.status(200).json(prescriptions);
};

exports.createDispense = async (req, res) => {
    const { id } = req.user;
    const { prescriptionId, medications } = req.body;
    const dispense = await pharmacistService.createDispense(id, prescriptionId, medications);
    res.status(200).json(dispense);
};