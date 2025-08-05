import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow h-full">
      <div className="p-6 text-xl font-bold border-b">Admin Panel</div>
      <ul className="p-4 space-y-4 text-gray-700">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
