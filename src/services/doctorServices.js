const { PrismaClient, Prisma } = require('../generated/prisma');
// const { emitAppointmentUpdate } = require('../config/socket');
const prisma = new PrismaClient();

exports.getAppointments = async (id) => {
    const appointments = await prisma.appointment.findMany({
        where: {doctorId: id}
    });
    return appointments;
};