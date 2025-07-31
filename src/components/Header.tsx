import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import type { Theme } from "../context/ThemeContext";
import logo from "../assets/theme.png";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  // Dynamic styling based on current theme
  const getHeaderClasses = () => {
    switch (theme) {
      case "light":
        return "bg-white text-gray-900 border-gray-200 shadow-sm";
      case "dark":
        return "bg-gray-900 text-white border-gray-700 shadow-md";
      case "colorful":
        return "bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white shadow-lg";
      default:
        return "bg-white text-gray-900 border-gray-200 shadow-sm";
    }
  };

  const getLogoStyle = () => {
    switch (theme) {
      case "light":
        return { fontFamily: "Roboto, sans-serif" };
      case "dark":
        return { fontFamily: "Merriweather, serif" };
      case "colorful":
        return { fontFamily: "Pacifico, cursive" };
      default:
        return { fontFamily: "Roboto, sans-serif" };
    }
  };

  const getSelectClasses = () => {
    switch (theme) {
      case "light":
        return "bg-white text-gray-900 border-gray-300 focus:border-blue-500";
      case "dark":
        return "bg-gray-800 text-white border-gray-600 focus:border-blue-400";
      case "colorful":
        return "bg-yellow-300 text-purple-900 border-purple-400 focus:border-pink-500";
      default:
        return "bg-white text-gray-900 border-gray-300 focus:border-blue-500";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${getHeaderClasses()}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* App Logo/Name */}
        <Link
          to="/"
          className="text-2xl font-bold hover:opacity-80 transition-opacity duration-300"
          style={getLogoStyle()}
        >
          <img src={logo} alt="ThemeSwitch Logo" className="w-12 h-12 inline-block mr-2" />
          ThemeSwitch
        </Link>

        {/* Navigation (visible only when not dark theme or on mobile) */}
        {theme !== "dark" && (
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              Contact
            </Link>
          </nav>
        )}

        {/* Theme Switcher */}
        <select
          value={theme}
          onChange={handleThemeChange}
          className={`px-3 py-2 pr-10 rounded-lg appearance-none border focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 ${getSelectClasses()}`}
        >
          <option value="light">Minimal Light</option>
          <option value="dark">Dark Mode</option>
          <option value="colorful">Bright Colorful</option>
        </select>
        <span
          className={`pointer-events-none absolute inset-y-0 right-6 flex items-center ${
            theme === "dark" ? "text-white" : "text-gray-950"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
