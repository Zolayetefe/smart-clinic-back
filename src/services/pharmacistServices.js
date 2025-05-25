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
            patientName: prescription.patient.user.name,
            patientPhone: prescription.patient.user.phone,
            patientEmail: prescription.patient.user.email,
            patientBirthDate: prescription.patient.user.birthDate,
            patientGender: prescription.patient.user.gender,
            labResultId: prescription.labResultId,
            medications: prescription.medications,
            doctorName: prescription.doctor.user.name,
            doctorEmail: prescription.doctor.user.email,
            doctorSpeciality: prescription.doctor.specialization,
            doctorPhone: prescription.doctor.user.phone,
            notes: prescription.notes,
            prescribedAt: prescription.prescribedAt,
            approvalStatus: prescription.approvalStatus,
            dispenseStatus: prescription.dispenseStatus,
        }))
    };
};


exports.dispenseMedication = async (pharmacistId, {prescriptionId, medications, notes}) => {
    // check if prescription is already dispensed
    const prescription = await prisma.prescription.findUnique({
        where: { id: prescriptionId },
        include: {
            patient: true
        }
    });
    
    if (!prescription) {
        throw new Error("Prescription not found");
    }
    
    if (prescription.dispenseStatus === "dispensed") {
        throw new Error("Prescription already dispensed");
    }

    const dispense = await prisma.dispense.create({
        data: {
            pharmacistId,
            prescriptionId,
            medications,
            patientId: prescription.patientId, // Use the patient ID from the prescription
            notes,
            status: "dispensed"
        }
    });

    // update prescription dispenseStatus to completed
    await prisma.prescription.update({
        where: { id: prescriptionId },
        data: { dispenseStatus: "dispensed" }
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
