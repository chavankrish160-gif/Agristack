import { useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';

export const useSocket = () => {
  const socket = useMemo(() => io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000'), []);

  useEffect(() => () => socket.close(), [socket]);
  return socket;
};
