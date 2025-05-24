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

