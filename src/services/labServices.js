const { PrismaClient, ApprovalStatus } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getLabRequests = async () => {
    const labRequests = await prisma.labRequest.findMany({
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
            },
        }
    });

    return {
        labRequests: labRequests.map(labRequest => ({
            id: labRequest.id,
            patientId: labRequest.patientId,
            patient: labRequest.patient.user.name,
            patientEmail: labRequest.patient.user.email,
            doctorId: labRequest.doctorId,
            doctor: labRequest.doctor.user.name,
            doctorEmail: labRequest.doctor.user.email,
            priority: labRequest.priority,
            notes: labRequest.notes,
            tests: labRequest.tests,
            status: labRequest.status,
            apporovalStatus: labRequest.approvalStatus,
            createdAt: labRequest.requestedAt,
        }))
    };
};


exports.getLabResults = async (labTechnicianId) => {
    const labResults = await prisma.labResult.findMany({
        where: { labTechnicianId },
        include: {
            labRequest: {   
                include: {
                    patient: {
                        include: {
                            user: {
                                select: {
                                    name: true,
                                    email: true,
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
            }
        }
    });
    return {
        labResults: labResults.map(labResult => ({
            id: labResult.id,
            labRequestId: labResult.labRequestId,
            patientId: labResult.labRequest.patientId,
            patient: labResult.labRequest.patient.user.name,
            patientEmail: labResult.labRequest.patient.user.email,
            doctorId: labResult.labRequest.doctorId,
            doctor: labResult.labRequest.doctor.user.name,
            doctorEmail: labResult.labRequest.doctor.user.email,
            result: labResult.result,
            notes: labResult.notes,
            createdAt: labResult.createdAt,
            status: labResult.status,
            priority: labResult.labRequest.priority,
            tests: labResult.labRequest.tests,
            requestedAt: labResult.labRequest.requestedAt,
            completedAt: labResult.labRequest.completedAt,
        }))
    };
};


exports.createLabResult = async (labTechnicianId, labRequestId, result, notes) => {

    const newLabResult = await prisma.labResult.create({
        data: {
            labRequestId: labRequestId,
            labTechnicianId: labTechnicianId,
            result: result,
            notes: notes,
        }
    });

    await prisma.labRequest.update({
        where: { id: newLabResult.labRequestId },
        data: { status: 'completed', completedAt: new Date() }
    });

    return newLabResult;
};
