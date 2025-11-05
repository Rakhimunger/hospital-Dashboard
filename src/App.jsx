import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Appointments from "./Components/Appointments";
import Doctors from "./Components/Doctors";
import Patients from "./Components/Patients";
import Messages from "./Components/Messages";
import Settings from "./Components/Settings";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-50 min-h-screen p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
