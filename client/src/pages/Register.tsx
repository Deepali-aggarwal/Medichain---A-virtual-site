import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFC0CB, #0072ff, white)',
      fontFamily: 'Arial, Helvetica, sans-serif',
      padding: '20px',
    }}>
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        width: '350px',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: '15px' }}>
          <img src="/images/aaa.jpg" alt="Avatar" style={{
            width: '100px',
            borderRadius: '50%',
          }} />
        </div>
        <h3 style={{ color: '#3f396d', marginBottom: '15px' }}>Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px', textAlign: 'left' }}>
            <label htmlFor="name" style={{ fontWeight: 'bold' }}>Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
            <input
              id="email"
              type="email"
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
            <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
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
            <label htmlFor="confirmPassword" style={{ fontWeight: 'bold' }}>Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
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
          }}>Sign Up</button>
          <Link to="/login">
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
            Already have an account? <Link to="/login" style={{ color: '#0072ff' }}>Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
}
