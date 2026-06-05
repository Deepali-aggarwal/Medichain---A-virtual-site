import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import chatRoutes from './routes/chat';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*', methods: ['GET', 'POST'] } });
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Medichain API is running' });
});

// WebRTC signaling
const waitingUsers: string[] = [];

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('find-doc', () => {
    if (waitingUsers.length > 0) {
      const partnerId = waitingUsers.shift()!;
      socket.emit('doc-found', { partnerId: socket.id });
      io.to(partnerId).emit('doc-found', { partnerId: socket.id });
    } else {
      waitingUsers.push(socket.id);
    }
  });

  socket.on('offer', ({ to, offer }) => {
    io.to(to).emit('offer', { from: socket.id, offer });
  });

  socket.on('answer', ({ to, answer }) => {
    io.to(to).emit('answer', { from: socket.id, answer });
  });

  socket.on('ice-candidate', ({ to, candidate }) => {
    io.to(to).emit('ice-candidate', { from: socket.id, candidate });
  });

  socket.on('disconnect', () => {
    const idx = waitingUsers.indexOf(socket.id);
    if (idx !== -1) waitingUsers.splice(idx, 1);
    io.emit('peer-disconnected', { id: socket.id });
  });
});

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/medichain')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err.message));

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
