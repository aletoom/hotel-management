import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🏨 Hotel Management System
        </Link>
        <div className="navbar-content">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/users" className="navbar-link">
                User Management
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/my-reservations" className="navbar-link">
                Reservation Management
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/rooms" className="navbar-link">
                Room Management
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/workers" className="navbar-link">
                Worker Management
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/payments" className="navbar-link">
                Payment Management
              </Link>
            </li>
          </ul>
          <div className="navbar-auth">
            <Link to="/login" className="navbar-link auth-link">
              Sign In
            </Link>
            <Link to="/register" className="navbar-link-button">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
