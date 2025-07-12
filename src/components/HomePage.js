import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  background: "#28a745",
  color: "white",
  padding: "10px 15px",
  borderRadius: "6px",
  textDecoration: "none",
  display: "inline-block",
  margin: "10px",
  width: "220px",
  textAlign: "center",
  fontWeight: "bold"
};

export default function HomePage() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>🏥 Hospital & Appointment Management System</h1>
      <p>Welcome! Choose an option below:</p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/register-patient" style={linkStyle}>👤 Register as Patient</Link>
        <Link to="/register-doctor" style={linkStyle}>👨‍⚕️ Register as Doctor</Link>
        <Link to="/register-hospital" style={linkStyle}>🏥 Register Hospital</Link>
        <Link to="/login" style={linkStyle}>🔐 Login</Link>
        <Link to="/book-appointment" style={linkStyle}>🗓️ Book Appointment</Link>
        <Link to="/patient-history" style={linkStyle}>📋 View Patient History</Link>
        <Link to="/reports" style={linkStyle}>📊 Reports</Link>
        <Link to="/patient-dashboard" style={linkStyle}>🧑 Patient Dashboard</Link>
        <Link to="/doctor-dashboard" style={linkStyle}>👨‍⚕️ Doctor Dashboard</Link>
        <Link to="/admin-dashboard" style={linkStyle}>🏥 Admin Dashboard</Link>
      </div>
    </div>
  );
}
