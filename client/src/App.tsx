import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DoctorReviews from './pages/DoctorReviews';
import VideoCall from './pages/VideoCall';
import AIChat from './pages/AIChat';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reviews" element={<DoctorReviews />} />
          <Route path="/video-consult" element={<VideoCall />} />
          <Route path="/ai-chat" element={<AIChat />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
