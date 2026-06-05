import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav id="navbar-top" className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container-fluid px-5">
        <Link className="navbar-brand fw-bold fs-2" to="/" style={{ color: '#3f396d' }}>
          Medichain
        </Link>
        <button className="nav-menu d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <i className="bi bi-menu-button-fill"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4" style={{ fontSize: '1.1rem' }}>
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><a className="nav-link" href="/#service">Service</a></li>
            <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/#portfolio">Doctors</a></li>
            <li className="nav-item"><Link className="nav-link" to="/video-consult">Video Consult</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ai-chat">AI Chat</Link></li>
            <li className="nav-item"><a className="nav-link" href="/#testimonial">Clients Reviews</a></li>
            <li className="nav-item"><a className="nav-link" href="/#blog">Blog</a></li>
          </ul>
        </div>
        {user ? (
          <div className="d-flex align-items-center gap-3">
            <span style={{ color: '#3f396d', fontWeight: 600 }}>{user.name}</span>
            <button onClick={handleLogout} className="c-btn py-2 px-4 rounded-pill">Logout</button>
          </div>
        ) : (
          <Link to="/login">
            <button className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
