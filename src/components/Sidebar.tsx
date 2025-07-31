import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Mail } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <nav className="fixed top-16 left-0 h-full w-64 bg-gray-800 text-white p-6 transform transition-transform duration-300 z-40">
      <div className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-l-lg transition-colors duration-300 ${
              isActive
                ? "bg-blue-900/50 text-white font-semibold border-l-4 border-blue-400"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          <Home className="w-5 h-5 mr-2" />
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-l-lg transition-colors duration-300 ${
              isActive
                ? "bg-blue-900/50 text-white font-semibold border-l-4 border-blue-400"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          <User className="w-5 h-5 mr-2" />
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-l-lg transition-colors duration-300 ${
              isActive
                ? "bg-blue-900/50 text-white font-semibold border-l-4 border-blue-400"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          <Mail className="w-5 h-5 mr-2" />
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
