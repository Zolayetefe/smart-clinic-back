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
                requestedAt: new Date()
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


