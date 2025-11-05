import React from "react";

const Appointments = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <table className="w-full text-left border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Patient</th>
            <th className="p-2">Doctor</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">Riya Sharma</td>
            <td className="p-2">Dr. Mehta</td>
            <td className="p-2">2025-11-05</td>
            <td className="p-2 text-green-600">Confirmed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
