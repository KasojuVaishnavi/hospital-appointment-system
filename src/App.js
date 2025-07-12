import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // Include it here
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PatientRegistration from "./components/PatientRegistration";
import DoctorRegistration from "./components/DoctorRegistration";
import HospitalRegistration from "./components/HospitalRegistration";
import BookAppointment from "./components/BookAppointment";
import PatientHistory from "./components/PatientHistory";
import Reports from "./components/Reports";
import PatientDashboard from "./components/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar /> {/* 👈 Shows on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-patient" element={<PatientRegistration />} />
        <Route path="/register-doctor" element={<DoctorRegistration />} />
        <Route path="/register-hospital" element={<HospitalRegistration />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/patient-history" element={<PatientHistory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
