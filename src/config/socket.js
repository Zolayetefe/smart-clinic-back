const { Server } = require('socket.io');

let io;

const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: [
        // 'http://localhost:5174',
        // 'http://localhost:5173',
        // 'https://your-production-domain.com'
      ],
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  // Middleware to handle authentication
  // io.use((socket, next) => {
  //   const token = socket.handshake.auth.token;
  //   if (!token) {
  //     return next(new Error('Authentication error'));
  //   }
  //   // You can verify the token here if needed
  //   socket.token = token;
  //   next();
  // });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Join role-specific rooms
    socket.on('join-role-room', (role) => {
      socket.join(`role-${role}`);
      console.log(`User joined ${role} room`);
    });

    // Join doctor-specific room
    socket.on('join-doctor-room', (doctorId) => {
      socket.join(`doctor-${doctorId}`);
      console.log(`User joined doctor ${doctorId} room`);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
};

// Function to emit appointment updates
const emitAppointmentUpdate = (appointment, triage, slot) => {
  const io = getIO();
  
  // Emit to specific doctor's room
  io.to(`doctor-${appointment.doctorId}`).emit('appointment-update', {
    type: 'new-appointment',
    appointment,
    triage,
    slot
  });

  // Emit to all nurses
  io.to('role-nurse').emit('appointment-update', {
    type: 'new-appointment',
    appointment,
    triage,
    slot
  });

  // Emit to finance department
  io.to('role-finance').emit('appointment-update', {
    type: 'new-appointment',
    appointment,
    triage,
    slot
  });
};

module.exports = {
  initializeSocket,
  getIO,
  emitAppointmentUpdate
}; 