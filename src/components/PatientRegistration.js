import React, { useState } from "react";

export default function PatientRegistration() {
  const [patient, setPatient] = useState({
    name: "",
    gender: "",
    dob: "",
    idNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Patient Registered: ${patient.name}`);
  };

  return (
    <div className="form-card">
      <h2>🧑 Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required
          value={patient.name} onChange={(e) => setPatient({ ...patient, name: e.target.value })} />
        
        <select required value={patient.gender}
          onChange={(e) => setPatient({ ...patient, gender: e.target.value })}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input type="date" required
          value={patient.dob} onChange={(e) => setPatient({ ...patient, dob: e.target.value })} />

        <input type="text" placeholder="Aadhar / Passport ID" required
          value={patient.idNumber} onChange={(e) => setPatient({ ...patient, idNumber: e.target.value })} />

        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
}
