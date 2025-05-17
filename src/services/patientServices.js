const { PrismaClient, Prisma } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getDoctors = async () => {
    try {
        const doctors = await prisma.doctor.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        department: true
                    }
                },
                availabilities: {
                    select: {
                        id: true,
                        day: true,
                        startTime: true,
                        endTime: true
                    },
                    orderBy: [
                        { day: 'asc' },
                        { startTime: 'asc' }
                    ]
                }
            }
        });

        // Transform the response to a more friendly format
        return {
            doctors: doctors.map(doctor => ({
                userId: doctor.user.id,
                name: doctor.user.name,
                email: doctor.user.email,
                phone: doctor.user.phone,
                department: doctor.user.department,
                doctorId: doctor.id,
                specialization: doctor.specialization,
                availabilities: doctor.availabilities
            }))
        };
    } catch (error) {
        console.error('Error fetching doctors:', error);
        throw new Error('Failed to fetch doctors');
    }
};

exports.getDoctorById = async (userId) => {
    try {
        const doctor = await prisma.doctor.findFirst({
            where: {
                user: {
                    id: userId
                }
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        department: true
                    }
                },
                availabilities: {
                    select: {
                        id: true,
                        day: true,
                        startTime: true,
                        endTime: true
                    },
                    orderBy: [
                        { day: 'asc' },
                        { startTime: 'asc' }
                    ]
                },
                appointments: {
                    include: {
                        patient: {
                            include: {
                                user: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    },
                    orderBy: {
                        dateTime: 'asc'
                    }
                }
            }
        });

        if (!doctor) {
            throw new Error('Doctor not found');
        }

        // Transform the response to a more friendly format
        return {
            userId: doctor.user.id,
            name: doctor.user.name,
            email: doctor.user.email,
            phone: doctor.user.phone,
            department: doctor.user.department,
            doctorId: doctor.id,
            specialization: doctor.specialization,
            availabilities: doctor.availabilities,
            appointments: doctor.appointments.map(apt => ({
                id: apt.id,
                dateTime: apt.dateTime,
                status: apt.status,
                reason: apt.reason,
                patient: {
                    id: apt.patient.id,
                    name: apt.patient.user.name,
                    phone: apt.patient.phoneNumber
                }
            }))
        };
    } catch (error) {
        console.error('Error fetching doctor:', error);
        if (error.message === 'Doctor not found') {
            throw error;
        }
        throw new Error('Failed to fetch doctor details');
    }
};

exports.getDoctorAvailabilities = async (doctorId) => {
    try {
        const doctor = await prisma.doctor.findUnique({
            where: {
                id: doctorId
            },
            include: {
                user: {
                    select: {
                        name: true
                    }
                },
                availabilities: {
                    select: {
                        id: true,
                        day: true,
                        startTime: true,
                        endTime: true
                    },
                    orderBy: [
                        { day: 'asc' },
                        { startTime: 'asc' }
                    ]
                }
            }
        });

        if (!doctor) {
            throw new Error('Doctor not found');
        }

        return {
            doctorId: doctor.id,
            doctorName: doctor.user.name,
            availabilities: doctor.availabilities
        };
    } catch (error) {
        console.error('Error fetching doctor availabilities:', error);
        if (error.message === 'Doctor not found') {
            throw error;
        }
        throw new Error('Failed to fetch doctor availabilities');
    }
};
