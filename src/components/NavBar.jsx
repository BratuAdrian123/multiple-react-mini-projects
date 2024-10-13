import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact-form">Contact Form</Link>
        </li>
        <li>
          <Link to="/reservation-form">Reservation Form</Link>
        </li>
        <li>
          <Link to="/monitor">Monitor</Link>
        </li>
        <li>
          <Link to="/session-tracker">Session Tracker</Link>
        </li>
        <li>
          <Link to="/movies-database">Movies database</Link>
        </li>
        <li>
          <Link to="/weather-app">Weather App</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
