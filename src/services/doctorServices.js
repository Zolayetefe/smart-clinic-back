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