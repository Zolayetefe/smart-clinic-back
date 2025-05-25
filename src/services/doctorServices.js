const { PrismaClient, Prisma } = require('../generated/prisma');
// const { emitAppointmentUpdate } = require('../config/socket');
const prisma = new PrismaClient();

exports.getAppointments = async (id) => {
    const appointments = await prisma.appointment.findMany({
        where: {doctorId: id},
        include: {
            patient: {
                include: {
                    user: true
                }
            },
            triage: true
           
        }
    });
    return {
        appointments: appointments.map(appointment => ({
            id: appointment.id,
            patientId: appointment.patientId,
            doctorId: appointment.doctorId,
            appointmentDate: appointment.dateTime,
            status: appointment.status,
            reason: appointment.reason,
            patientName: appointment.patient.user.name,
            patientEmail: appointment.patient.user.email,
            patientPhone: appointment.patient.user.phone,
            symptoms: appointment.triage?.symptoms,
            vitals: appointment.triage?.vitals,
        }))
    };
};

exports.createLabRequest = async ({ patientId, priority, notes, tests, status }, doctorId) => {
    try {
        // Validate required fields
        if (!doctorId || !patientId || !tests || !Array.isArray(tests)) {
            throw new Error('Missing or invalid required fields');
        }

        // Validate tests array structure
        if (!tests.every(test => test.testName && test.reason)) {
            throw new Error('Each test must have a testName and reason');
        }

        // Create the lab request
        const labRequest = await prisma.labRequest.create({
            data: {
                doctorId,
                patientId,
                status: status || 'requested', // Using the correct enum value from schema
                notes,
                priority,
                tests: tests,
                requestedAt: new Date(),
                approvalStatus: 'pending'
            },
            include: {
                doctor: {
                    include: {
                        user: true
                    }
                },
                patient: {
                    include: {
                        user: true
                    }
                },
                labResult: true
            }
        });

        return {
            id: labRequest.id,
            doctorName: labRequest.doctor.user.name,
            patientName: labRequest.patient.user.name,
            status: labRequest.status,
            notes: labRequest.notes,
            tests: labRequest.tests,
            requestedAt: labRequest.requestedAt
        };

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // Handle Prisma specific errors
            if (error.code === 'P2002') {
                throw new Error('A lab request with these details already exists');
            }
            if (error.code === 'P2003') {
                throw new Error('Invalid doctor or patient ID');
            }
        }
        console.error('Error details:', error);
        throw error;
    }
};

exports.getLabRequests = async (doctorId) => {
    console.log(doctorId);
    const labRequests = await prisma.labRequest.findMany({
        where: { doctorId: doctorId },
        include: {
            doctor: {
                include: {
                    user: true
                }
            },
            patient: {
                include: {
                    user: true
                }
            },
            labResult: true
        }
    });

    return labRequests.map(request => ({
        id: request.id,
        doctorId: request.doctorId,
        patientId: request.patientId,
        patientPhone: request.patient.user.phone,
        patientName: request.patient.user.name,
        patientEmail: request.patient.user.email,
        status: request.status,
        notes: request.notes,
        priority: request.priority,
        tests: request.tests,
        requestedAt: request.requestedAt,
        completedAt: request.completedAt,
        result: request.labResult
    }));
};


exports.getLabResults = async (doctorId) => {
    const labResults = await prisma.labResult.findMany({
        where: {
            labRequest: {
                doctorId: doctorId
            }
        },
        include: {
            labRequest: {
                include: {
                    patient: {
                        include: {
                            user: {
                                select: {
                                    name: true,
                                    email: true
                                }
                            }
                        }
                    },
                    doctor: {
                        include: {
                            user: {
                                select: {
                                    name: true,
                                    email: true
                                }
                            }
                        }
                    }
                }
            },
            labTechnician: {
                include: {
                    user: {
                        select: { 
                            name: true, 
                            email: true 
                        }
                    }
                }
            }
        }
    });

    return labResults.map(result => ({
        id: result.id,
        labRequestId: result.labRequestId,
        labTechnicianId: result.labTechnicianId,
        patientId: result.labRequest.patientId,
        doctorId: result.labRequest.doctorId,
        patientName: result.labRequest.patient.user.name,
        patientEmail: result.labRequest.patient.user.email,
        doctorName: result.labRequest.doctor.user.name,
        doctorEmail: result.labRequest.doctor.user.email,
        labTechnicianName: result.labTechnician.user.name,
        labTechnicianEmail: result.labTechnician.user.email,
        result: result.result,
        notes: result.notes,
        createdAt: result.createdAt,
        status: result.status
    }));
};

exports.getLabResultById = async (labResultId) => {
    try {
        const labResult = await prisma.labResult.findUnique({
            where: { id: labResultId },
            include: {
                labRequest: {
                    include: {
                        patient: true,
                        doctor: true
                    }
                },
                labTechnician: {
                    include: {
                        user: true
                    }
                }
            }
        });
        return labResult;
    } catch (error) {
        console.error('Error fetching lab result:', error);
        throw error;
    }
};

exports.createPrescription = async (doctorId, prescriptionData) => {
    try {
        const { patientId, labResultId, notes, medications } = prescriptionData;

        // Validate required fields
        if (!doctorId || !patientId || !labResultId || !medications || !Array.isArray(medications)) {
            throw new Error('Missing or invalid required fields');
        }

        // Validate medications array structure
        if (!medications.every(med => med.name && med.dosage && med.frequency && med.duration)) {
            throw new Error('Each medication must have name, dosage, frequency, and duration');
        }

        // First verify that the lab result exists and is not already prescribed
        const existingLabResult = await prisma.labResult.findUnique({
            where: { id: labResultId },
            include: { 
                prescription: true,
                labRequest: true
            }
        });

        if (!existingLabResult) {
            throw new Error(`Lab result with ID ${labResultId} not found. Please verify the lab result ID.`);
        }

        // Verify that the lab result belongs to the correct patient
        if (existingLabResult.labRequest.patientId !== patientId) {
            throw new Error('Lab result does not belong to the specified patient');
        }

        if (existingLabResult.prescription) {
            throw new Error('This lab result already has a prescription');
        }

        const prescription = await prisma.prescription.create({
            data: {
                doctorId,
                patientId,
                labResultId,
                notes,
                medications,
            },
            include: {
                doctor: {
                    include: {
                        user: true
                    }
                },
                patient: {
                    include: {
                        user: true
                    }
                },
                labResult: true,
                medicationBill: true,
            }
        });

        return {
            id: prescription.id,
            doctorId: prescription.doctorId,
            doctorName: prescription.doctor.user.name,
            patientId: prescription.patientId,
            patientName: prescription.patient.user.name,
            labResultId: prescription.labResultId,
            medications: prescription.medications,
            notes: prescription.notes,
            prescribedAt: prescription.prescribedAt

        };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2003') {
                throw new Error('Invalid doctor, patient, or lab result ID');
            }
            if (error.code === 'P2002') {
                throw new Error('A prescription for this lab result already exists');
            }
        }
        console.error('Error details:', error);
        throw error;
    }
};