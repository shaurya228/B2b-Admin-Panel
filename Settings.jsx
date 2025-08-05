
import React from 'react';

function Settings() {
  return (
    <div className="max-w-xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <form>
        <label className="block mb-2">Username</label>
        <input className="w-full border p-2 mb-4" type="text" placeholder="Enter your username" />
        <label className="block mb-2">Email</label>
        <input className="w-full border p-2 mb-4" type="email" placeholder="Enter your email" />
        <label className="block mb-2">Password</label>
        <input className="w-full border p-2 mb-4" type="password" placeholder="Enter new password" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;
