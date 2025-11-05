import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    { path: "/", label: "Dashboard" },
    { path: "/appointments", label: "Appointments" },
    { path: "/doctors", label: "Doctors" },
    { path: "/patients", label: "Patients" },
    { path: "/messages", label: "Messages" },
    { path: "/settings", label: "Settings" },
  ];

  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">ZeeCare</h1>

      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg transition ${
                  isActive ? "bg-blue-600 font-semibold" : "hover:bg-blue-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
