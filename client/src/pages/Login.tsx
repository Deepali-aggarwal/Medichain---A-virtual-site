import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #FFC0CB, #0072ff, white)',
      fontFamily: 'Arial, Helvetica, sans-serif',
    }}>
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        width: '350px',
        minHeight: '460px',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: '15px' }}>
          <img src="/images/aaa.jpg" alt="Avatar" style={{
            width: '100px',
            borderRadius: '50%',
          }} />
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px', textAlign: 'left' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
            <input
              id="email"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                margin: '10px 0',
                border: '1px solid #ccc',
                borderRadius: '5px',
                display: 'block',
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px', textAlign: 'left' }}>
            <label htmlFor="psw" style={{ fontWeight: 'bold' }}>Password</label>
            <input
              id="psw"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                margin: '10px 0',
                border: '1px solid #ccc',
                borderRadius: '5px',
                display: 'block',
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            />
          </div>
          {error && <p style={{ color: '#f44336', fontSize: '0.9rem' }}>{error}</p>}
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            border: 'none',
            borderRadius: '5px',
            background: '#04AA6D',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
          }}>Login</button>
          <Link to="/">
            <button type="button" style={{
              width: '100%',
              padding: '12px',
              border: 'none',
              borderRadius: '5px',
              background: '#f44336',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '10px',
            }}>Cancel</button>
          </Link>
          <span style={{ display: 'block', marginTop: '15px' }}>
            Don't have an account? <Link to="/register" style={{ color: '#0072ff' }}>Sign up</Link>
          </span>
          <span style={{ display: 'block', marginTop: '10px' }}>
            Forgot <a href="#" style={{ color: '#0072ff', textDecoration: 'none' }}>password?</a>
          </span>
        </form>
      </div>
    </div>
  );
}
