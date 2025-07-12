import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("patient");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${role} - ${email}`);
  };

  return (
    <div className="form-card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required
          value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <select required value={role}
          onChange={(e) => setRole(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Hospital Admin</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
