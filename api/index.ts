import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from '../server/src/routes/auth';
import chatRoutes from '../server/src/routes/chat';

const app = express();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Medichain API is running on Vercel' });
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/medichain')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err.message));

export default app;
