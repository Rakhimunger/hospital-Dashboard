import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Admin Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 w-full rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
