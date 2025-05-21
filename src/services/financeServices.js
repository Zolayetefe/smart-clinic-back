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