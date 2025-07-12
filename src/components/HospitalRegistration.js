import React, { useState } from "react";

export default function HospitalRegistration() {
  const [hospital, setHospital] = useState({
    name: "",
    location: "",
    departments: [""],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hospital Registered: ${hospital.name}\nDepartments: ${hospital.departments.join(", ")}`);
  };

  const addDepartment = () => {
    setHospital({ ...hospital, departments: [...hospital.departments, ""] });
  };

  const updateDepartment = (index, value) => {
    const newDeps = [...hospital.departments];
    newDeps[index] = value;
    setHospital({ ...hospital, departments: newDeps });
  };

  return (
    <div className="form-card">
      <h2>🏥 Register Hospital</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hospital Name"
          required
          value={hospital.name}
          onChange={(e) => setHospital({ ...hospital, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          required
          value={hospital.location}
          onChange={(e) => setHospital({ ...hospital, location: e.target.value })}
        />
        <h4>Departments:</h4>
        {hospital.departments.map((dep, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Department ${i + 1}`}
            value={dep}
            onChange={(e) => updateDepartment(i, e.target.value)}
          />
        ))}
        <button type="button" onClick={addDepartment}>+ Add Department</button>
        <br />
        <button type="submit">Register Hospital</button>
      </form>
    </div>
  );
}
