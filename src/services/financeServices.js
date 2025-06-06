const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getFinanceStaffByUserId = async (userId) => {
    try {
        const financeStaff = await prisma.financeStaff.findUnique({
            where: { userId }
        });
        return financeStaff;
    } catch (error) {
        console.error('Error fetching finance staff:', error);
        throw new Error('Failed to fetch finance staff details');
    }
};

exports.getAllAppointments = async () => {
    const appointments = await prisma.appointment.findMany({
        include: {
            patient: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                            phone: true
                        }
                    }
                }
            },
            doctor: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                            phone: true
                        }
                    }
                }
            },
            finance: true
        }
    });


    return appointments.map(appointment => ({
        id: appointment.id,
        patient: appointment.patient.user.name,
        patientId: appointment.patientId,
        patientEmail: appointment.patient.user.email,
        patientPhone: appointment.patient.user.phone,
        doctor: appointment.doctor.user.name,
        doctorId: appointment.doctorId,
        doctorEmail: appointment.doctor.user.email,
        doctorPhone: appointment.doctor.user.phone,
        status: appointment.status,
        reason: appointment.reason,
        appointmentDate: appointment.dateTime,
        financeStatus: appointment.finance?.approvalStatus || null,
        amount: appointment.finance?.amount || null
    }));
};

exports.approveAppointment = async (appointmentId, { amount, financeStaffId, approvalStatus }) => {
    try {
        // Start a transaction
        const result = await prisma.$transaction(async (prisma) => {
            // Check if appointment exists
            const appointment = await prisma.appointment.findUnique({
                where: { id: appointmentId },
                include: { finance: true }
            });

            if (!appointment) {
                throw new Error('Appointment not found');
            }

            if (appointment.finance) {
                throw new Error('Finance record already exists for this appointment');
            }

            // Create finance record
            const finance = await prisma.appointmentFinance.create({
                data: {
                    appointmentId,
                    amount,
                    financeStaffId,
                    approvalStatus,
                    approvedAt: approvalStatus === 'approved' ? new Date() : null
                }
            });

            // Update appointment status if finance is approved
            if (approvalStatus === 'approved') {
                await prisma.appointment.update({
                    where: { id: appointmentId },
                    data: { status: 'confirmed' }
                });
            }

            return { finance };
        });

        return result;
    } catch (error) {
        console.error('Error in approveAppointment:', error);
        throw error;
    }
};

exports.getAppointmentsByStatus = async (status) => {
    const appointments = await prisma.appointment.findMany({
        where: { status },
        include: {
            patient: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                            phone: true
                        }
                    }
                }
            },
            doctor: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                            phone: true
                        }
                    }
                }
            },
            finance: true
        }
    });

    return appointments.map(appointment => ({
        id: appointment.id,
        patient: appointment.patient.user.name,
        patientId: appointment.patientId,
        patientEmail: appointment.patient.user.email,
        patientPhone: appointment.patient.user.phone,
        doctor: appointment.doctor.user.name,
        doctorId: appointment.doctorId,
        doctorEmail: appointment.doctor.user.email,
        doctorPhone: appointment.doctor.user.phone,
        status: appointment.status,
        reason: appointment.reason,
        appointmentDate: appointment.dateTime,
        financeStatus: appointment.finance?.approvalStatus || null
    }));
};

// lab requests service

exports.getLabRequests = async () => {
    const labRequests = await prisma.labRequest.findMany({
        include: {
            patient: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,    
                            phone: true
                        }
                    }
                }
            },
            doctor: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                            phone: true
                        }
                    }
                }
            },
            labTestBill: true
         
        }
    });

    return labRequests.map(labRequest => ({
        id: labRequest.id,
        patient: labRequest.patient.user.name,
        patientId :labRequest.patient.id,
        doctor: labRequest.doctor.user.name,
        doctorId: labRequest.doctorId,
        doctorEmail: labRequest.doctor.user.email,
        patientId: labRequest.patientId,
        patientEmail: labRequest.patient.user.email,
        patientPhone: labRequest.patient.user.phone,
        labTestBillId: labRequest.labTestBill?.id,
        tests: labRequest.tests,
        apporovalStatus:labRequest.approvalStatus,
        totalAmount: labRequest.labTestBill?.totalAmount,
        paidAt: labRequest.labTestBill?.paidAt,
        requestedAt: labRequest.dateTime,
    }));
};

exports.approveLabRequest = async (requestLabId,financeStaffId, tests, totalAmount, patientId) => { 
console.log('patientId',patientId);
console.log('requestLabId from service',requestLabId);
    const labTest = await prisma.labTestBill.create({
        data: {
            patientId,
            labRequestId: requestLabId,
            financeStaffId,
            tests,
            totalAmount,
            financeStaffId
        }
    });
    if (!labTest) {
        throw new Error('Lab test not found');
    }
    const updatedLabRequest = await prisma.labRequest.update({
        where: { id: requestLabId },
        data: { approvalStatus: 'approved',
            tests:tests
         }
    }); 
    return updatedLabRequest;
};



// prescription service

exports.getPrescriptions = async () => {
    const prescriptions = await prisma.prescription.findMany({
        include: {
            patient: {
                include: {
                    user: true
                }
            },
            doctor: {
                include: {
                    user: true
                }
            },
            labResult: true,    
            medicationBill: true
            
        }
    });
    console.log("prescriptions from finance service",prescriptions.medicationBill);
    return prescriptions.map(prescription => ({
        id: prescription.id,
        patientId: prescription.patientId,
        patientName: prescription.patient.user.name,
        patientEmail: prescription.patient.user.email,
        patientPhone: prescription.patient.user.phone,
        prescribedBy: prescription.doctor.user.name,
        prescribedById: prescription.doctorId,
        prescribedAt: prescription.prescribedAt,
        approvalStatus: prescription.approvalStatus,
        medications: prescription.medications,
        totalAmount: prescription.medicationBill?.totalAmount,
        paidAt: prescription.medicationBill?.paidAt,
        requestedAt: prescription.prescribedAt,
    }));
};

exports.approvePrescription = async (prescriptionId,financeStaffId,patientId,medications,totalAmount) => {
    const prescription = await prisma.prescription.findUnique({
        where: { id: prescriptionId }
    });
    if (!prescription) {
        throw new Error('Prescription not found');
    }
    // create medication bill
    const medicationBill = await prisma.medicationBill.create({
        data: {
            patientId,
            prescriptionId,
            medications,
            totalAmount,
            financeStaffId
        }
    });

    // update prescription
    const updatedPrescription = await prisma.prescription.update({
        where: { id: prescriptionId },
        data: { approvalStatus: 'approved',
            medications: medications,
        }
    });
    return updatedPrescription;
};  