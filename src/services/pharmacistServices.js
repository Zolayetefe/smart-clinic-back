const { PrismaClient} = require('../generated/prisma');

const prisma = new PrismaClient();

exports.getPrescriptions = async () => {
    const prescriptions = await prisma.prescription.findMany({
       
        include: {
            patient: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                            phone: true,
                        }
                    },
                }
            },
            doctor: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                            phone: true,
                        }
                    },
                }
            },


}});
    return {
        prescriptions: prescriptions.map(prescription => ({
            id: prescription.id,
            patientId: prescription.patientId,
            labResultId: prescription.labResultId,
            medications: prescription.medications,
            doctorName: prescription.doctor.user.name,
            patientName: prescription.patient.user.name,
            doctorEmail: prescription.doctor.user.email,
            patientEmail: prescription.patient.user.email,
            doctorPhone: prescription.doctor.user.phone,
            patientPhone: prescription.patient.user.phone,
            notes: prescription.notes,
            prescribedAt: prescription.prescribedAt,
            status: prescription.status,
        }))
    };
};

exports.dispenseMedication = async (pharmacistId, prescriptionId, medications) => {
    const dispense = await prisma.dispense.create({
        data: {
            pharmacistId,
            prescriptionId,
            medications,
        }
    });
    return dispense;
};

exports.getDispenses = async (pharmacistId) => {
    const dispenses = await prisma.dispense.findMany({
        where: { pharmacistId },
        include: {
            prescription: {
                include: {
                    patient: {
                        include: {
                            user: {
                                select: {
                                    name: true,
                                    email: true,
                                    phone: true,
                                }
                            },
                        }
                    },
                }
            },
        }
    });
    return dispenses.map(dispense => ({
        id: dispense.id,
        prescriptionId: dispense.prescriptionId,
        medications: dispense.medications,
        patientName: dispense.prescription.patient.user.name,
        patientEmail: dispense.prescription.patient.user.email,
        patientPhone: dispense.prescription.patient.user.phone,
        doctorName: dispense.prescription.doctor.user.name,
        doctorEmail: dispense.prescription.doctor.user.email,
        doctorPhone: dispense.prescription.doctor.user.phone,
        notes: dispense.notes,
        dispensedAt: dispense.dispensedAt,
    }));
};
