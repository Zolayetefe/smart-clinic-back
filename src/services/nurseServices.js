const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.checkInAppointment = async (appointmentId, nurseId, vitals = []) => {
    try {
        // Start a transaction
        const result = await prisma.$transaction(async (prisma) => {
            // 1. Get the appointment with patient details
            const appointment = await prisma.appointment.findUnique({
                where: { id: appointmentId },
                include: {
                    patient: true,
                    triage: true
                }
            });

            if (!appointment) {
                throw new Error('Appointment not found');
            }

            // Verify nurse exists
            const nurse = await prisma.nurse.findUnique({
                where: { id: nurseId }
            });

            if (!nurse) {
                throw new Error('Nurse not found');
            }

            // 2. Create or update triage record
            const triage = await prisma.triage.upsert({
                where: {
                    appointmentId: appointmentId
                },
                update: {
                    nurseId: nurseId,
                    vitals: vitals,
                    timestamp: new Date()
                },
                create: {
                    patientId: appointment.patientId,
                    appointmentId: appointmentId,
                    nurseId: nurseId,
                    vitals: vitals,
                    timestamp: new Date(),
                    symptoms: []
                },
                include: {
                    nurse: {
                        include: {
                            user: true
                        }
                    }
                }
            });

            // 3. Update appointment status to indicate check-in
            const updatedAppointment = await prisma.appointment.update({
                where: { id: appointmentId },
                data: { status: 'confirmed' },
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
                    triage: {
                        include: {
                            nurse: {
                                include: {
                                    user: true
                                }
                            }
                        }
                    }
                }
            });

            return {
                appointment: updatedAppointment,
                triage: triage
            };
        });

        return result;
    } catch (error) {
        console.error('Error in checkInAppointment:', error);
        throw error;
    }
};

exports.getAppointments = async () => {
    const appointments = await prisma.appointment.findMany({
       
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
            triage: true,
            finance: {
                select: {
                    approvalStatus: true
                }
            }
           
        }
    });
    return {
        appointments: appointments.map(appointment => ({
            id: appointment.id,
            patientId: appointment.patientId,
            doctorId: appointment.doctorId,
            appointmentDate: appointment.dateTime,
            appointmentTime: appointment.dateTime,
            status: appointment.status,
            reason: appointment.reason,
            patientName: appointment.patient.user.name,
            patientEmail: appointment.patient.user.email,
            patientPhone: appointment.patient.user.phone,
            doctorName: appointment.doctor.user.name,
            doctorEmail: appointment.doctor.user.email,
            doctorPhone: appointment.doctor.user.phone,
            symptoms: appointment.triage?.symptoms,
            vitals: appointment.triage?.vitals,
            financeStatus: appointment.finance?.approvalStatus,
           


        }))
    };
};