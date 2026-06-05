import { Request, Response } from 'express';
import OpenAI from 'openai';
import { AuthRequest } from '../middleware/auth';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || 'sk-placeholder' });

export const chatWithAI = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { message } = req.body;
    if (!message) {
      res.status(400).json({ message: 'Message is required' });
      return;
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful medical consultation AI assistant. Provide general health information and guidance. Always remind users to consult a real doctor for serious concerns. Keep responses concise and empathetic.',
        },
        { role: 'user', content: message },
      ],
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not process that.';

    res.json({ reply });
  } catch (error: any) {
    console.error('AI Chat error:', error.message);
    res.status(500).json({ message: 'AI service error', reply: 'AI service is currently unavailable. Please try again later.' });
  }
};
