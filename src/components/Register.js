import React, { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    dob: "",
    id: "",
    role: "patient",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered ${user.role}: ${user.name}`);
  };

  return (
    <div className="form-card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })} />

        <select required value={user.gender}
          onChange={(e) => setUser({ ...user, gender: e.target.value })}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input type="date" required value={user.dob}
          onChange={(e) => setUser({ ...user, dob: e.target.value })} />

        <input type="text" placeholder="Unique ID (Aadhar/Passport)" required value={user.id}
          onChange={(e) => setUser({ ...user, id: e.target.value })} />

        <select required value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Hospital Admin</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
