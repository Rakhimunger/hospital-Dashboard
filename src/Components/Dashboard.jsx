import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-xl shadow">
          Total Patients: 120
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow">Doctors: 15</div>
        <div className="bg-yellow-100 p-4 rounded-xl shadow">
          Appointments Today: 20
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
