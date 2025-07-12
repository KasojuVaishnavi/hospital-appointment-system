import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">🏠 Home</Link>
      <Link to="/register-patient">👤 Patient</Link>
      <Link to="/register-doctor">👨‍⚕️ Doctor</Link>
      <Link to="/register-hospital">🏥 Hospital</Link>
      <Link to="/login">🔐 Login</Link>
      <Link to="/book-appointment">📅 Book</Link>
      <Link to="/patient-history">📋 History</Link>
      <Link to="/reports">📊 Reports</Link>
      <Link to="/patient-dashboard">🧑 Patient Dashboard</Link>
      <Link to="/doctor-dashboard">👨‍⚕️ Doctor Dashboard</Link>
      <Link to="/admin-dashboard">🏥 Admin Dashboard</Link>
    </nav>
  );
}
