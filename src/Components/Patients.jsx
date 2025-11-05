import React from "react";

const Patients = () => {
  const patients = [
    { name: "Riya Sharma", age: 25, disease: "Fever" },
    { name: "Amit Verma", age: 32, disease: "Cold" },
    { name: "Neha Gupta", age: 40, disease: "Headache" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Patients</h2>
      <ul className="space-y-2">
        {patients.map((p, i) => (
          <li key={i} className="bg-gray-100 p-3 rounded-md">
            <p className="font-semibold">{p.name}</p>
            <p className="text-sm text-gray-600">
              Age: {p.age} | Issue: {p.disease}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
