import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Hello! I am MediBot, your AI health assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await api.post('/chat/ai', { message: input });
      const aiMsg: Message = { role: 'ai', text: res.data.reply };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [...prev, { role: 'ai', text: 'Sorry, AI service is unavailable. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#f0f2f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="container py-4 flex-grow-1 d-flex flex-column" style={{ maxWidth: 800 }}>
        <h2 className="text-center mb-4" style={{ color: '#3f396d' }}>AI Health Consultation Chat</h2>
        <div className="card flex-grow-1 d-flex flex-column shadow-sm" style={{ borderRadius: 16, overflow: 'hidden' }}>
          <div className="card-body flex-grow-1 overflow-auto p-4" style={{ maxHeight: '60vh', minHeight: 400 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`d-flex mb-3 ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div
                  className="p-3 rounded-4"
                  style={{
                    maxWidth: '75%',
                    background: msg.role === 'user' ? '#6f34fe' : '#fff',
                    color: msg.role === 'user' ? '#fff' : '#333',
                    border: msg.role === 'ai' ? '1px solid #ddd' : 'none',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="d-flex justify-content-start mb-3">
                <div className="p-3 rounded-4" style={{ background: '#fff', border: '1px solid #ddd', color: '#999' }}>Typing...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="card-footer bg-white p-3 border-0">
            <div className="input-group">
              <input
                className="form-control rounded-pill py-2 px-4"
                style={{ border: '1px solid #ccc' }}
                placeholder="Type your health concern..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button className="c-btn rounded-pill py-2 px-4 ms-2" onClick={sendMessage} disabled={loading}>
                Send
              </button>
            </div>
            <small className="text-muted d-block mt-2">
              * AI responses are for informational purposes only. Always consult a real doctor for medical advice.
            </small>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
