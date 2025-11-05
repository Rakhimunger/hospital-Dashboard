import React from "react";

const Doctors = () => {
  const doctors = [
    { name: "Dr. Mehta", specialization: "Cardiologist" },
    { name: "Dr. Kapoor", specialization: "Dentist" },
    { name: "Dr. Singh", specialization: "Neurologist" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow rounded-lg border border-gray-100"
          >
            <h3 className="font-semibold">{doc.name}</h3>
            <p className="text-sm text-gray-600">{doc.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
