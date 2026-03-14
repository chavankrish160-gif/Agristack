export const registerChatHandlers = (io) => {
  io.on('connection', (socket) => {
    socket.on('join_room', (room) => socket.join(room));

    socket.on('send_message', (payload) => {
      io.to(payload.room).emit('receive_message', {
        ...payload,
        timestamp: new Date().toISOString()
      });
    });
  });
};
