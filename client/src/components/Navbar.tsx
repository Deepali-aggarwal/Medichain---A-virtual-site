import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  darkMode?: boolean;
  setDarkMode?: (v: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" id="navbar-top">
      <div className="container-fluid px-3 px-md-5">
        <Link className="navbar-brand" to="/" style={{ color: 'var(--accent2)', fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.5px' }}>
          Medi<span style={{ color: 'var(--accent)' }}>Chain</span>
        </Link>
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-sm rounded-pill"
            onClick={() => setDarkMode?.(!darkMode)}
            style={{ background: 'var(--accent)', color: '#fff', border: 'none', fontSize: '1.2rem' }}
          >
            <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
          </button>
          <button className="nav-menu d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <i className="bi bi-menu-button-fill"></i>
          </button>
        </div>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-2 gap-md-4" style={{ fontSize: '1.1rem' }}>
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><a className="nav-link" href="/#service">Service</a></li>
            <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/#portfolio">Doctors</a></li>
            <li className="nav-item"><Link className="nav-link" to="/video-consult">Video Consult</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ai-chat">AI Chat</Link></li>
            <li className="nav-item"><a className="nav-link" href="/#testimonial">Reviews</a></li>
            <li className="nav-item"><a className="nav-link" href="/#blog">Blog</a></li>
          </ul>
        </div>
        {user ? (
          <div className="d-flex align-items-center gap-3 d-none d-md-flex">
            <span style={{ color: 'var(--heading)', fontWeight: 600 }}>{user.name}</span>
            <button onClick={handleLogout} className="c-btn py-2 px-4 rounded-pill">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="d-none d-md-block">
            <button className="c-btn py-2 px-4 rounded-pill">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
