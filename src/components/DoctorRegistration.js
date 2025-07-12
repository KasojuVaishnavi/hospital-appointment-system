import React, { useState } from "react";

export default function DoctorRegistration() {
  const [doctor, setDoctor] = useState({
    name: "",
    qualification: "",
    specializations: [""],
    experience: "",
    hospital: "",
    consultationFee: "",
    timeSlots: [""],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Doctor ${doctor.name} registered at ${doctor.hospital}`);
  };

  const addSpecialization = () => {
    setDoctor({ ...doctor, specializations: [...doctor.specializations, ""] });
  };

  const addTimeSlot = () => {
    setDoctor({ ...doctor, timeSlots: [...doctor.timeSlots, ""] });
  };

  const updateField = (field, index, value) => {
    const updated = [...doctor[field]];
    updated[index] = value;
    setDoctor({ ...doctor, [field]: updated });
  };

  return (
    <div className="form-card">
      <h2>👨‍⚕️ Doctor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required
          value={doctor.name} onChange={(e) => setDoctor({ ...doctor, name: e.target.value })} />
        <input type="text" placeholder="Qualification" required
          value={doctor.qualification} onChange={(e) => setDoctor({ ...doctor, qualification: e.target.value })} />
        <input type="number" placeholder="Years of Experience" required
          value={doctor.experience} onChange={(e) => setDoctor({ ...doctor, experience: e.target.value })} />
        
        <input type="text" placeholder="Associated Hospital Name" required
          value={doctor.hospital} onChange={(e) => setDoctor({ ...doctor, hospital: e.target.value })} />

        <h4>Specializations</h4>
        {doctor.specializations.map((spec, i) => (
          <input key={i} type="text" placeholder={`Specialization ${i + 1}`}
            value={spec} onChange={(e) => updateField("specializations", i, e.target.value)} />
        ))}
        <button type="button" onClick={addSpecialization}>+ Add Specialization</button>

        <h4>Available Time Slots</h4>
        {doctor.timeSlots.map((slot, i) => (
          <input key={i} type="text" placeholder={`Time Slot ${i + 1}`}
            value={slot} onChange={(e) => updateField("timeSlots", i, e.target.value)} />
        ))}
        <button type="button" onClick={addTimeSlot}>+ Add Time Slot</button>

        <input type="number" placeholder="Consultation Fee" required
          value={doctor.consultationFee} onChange={(e) => setDoctor({ ...doctor, consultationFee: e.target.value })} />

        <br />
        <button type="submit">Register Doctor</button>
      </form>
    </div>
  );
}
