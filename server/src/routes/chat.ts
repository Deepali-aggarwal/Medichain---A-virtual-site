import { Router } from 'express';
import { authMiddleware } from '../middleware/auth';
import { chatWithAI } from '../controllers/aiChatController';

const router = Router();

router.post('/ai', authMiddleware, chatWithAI);

export default router;
