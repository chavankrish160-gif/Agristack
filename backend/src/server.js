import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cropRoutes from './routes/cropRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import deliveryRoutes from './routes/deliveryRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { registerChatHandlers } from './socket/chat.js';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: { origin: process.env.FRONTEND_URL || '*' }
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'emandi-backend' }));
app.use('/api/auth', authRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/admin', adminRoutes);

registerChatHandlers(io);

const port = process.env.PORT || 5000;
connectDB()
  .then(() => {
    server.listen(port, () => console.log(`Backend running on :${port}`));
  })
  .catch((error) => {
    console.error('Failed to start backend', error);
    process.exit(1);
  });
