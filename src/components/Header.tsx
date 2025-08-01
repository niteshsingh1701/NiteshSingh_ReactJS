import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import type { Theme } from "../context/ThemeContext";
import logo from "../assets/theme.png";

interface HeaderProps {
  showHamburger?: boolean;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  showHamburger = false,
  onMenuClick,
}) => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        {/* App Logo/Name */}
        <Link
          to="/"
          className="text-2xl font-bold transition-opacity duration-300 hover:opacity-80"
          style={getLogoStyle()}
        >
          <img
            src={logo}
            alt="ThemeSwitch Logo"
            className="inline-block w-10 h-10 mr-2 md:w-12 md:h-12"
          />
          <span className="hidden sm:inline">ThemeSwitch</span>
        </Link>

        {/* Mobile Menu Button - Only show for non-dark themes or when explicitly requested */}
        {(!theme || theme !== "dark" || showHamburger) && (
          <button
            onClick={theme === "dark" ? onMenuClick : toggleMobileMenu}
            className="p-2 transition-colors rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col justify-between w-6 h-5">
              <span
                className={`block w-full h-0.5 transition-transform duration-300 ${
                  theme === "dark" ? "bg-white" : "bg-gray-800"
                } ${
                  isMobileMenuOpen && theme !== "dark"
                    ? "rotate-45 translate-y-2"
                    : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 transition-opacity duration-300 ${
                  theme === "dark" ? "bg-white" : "bg-gray-800"
                } ${isMobileMenuOpen && theme !== "dark" ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-full h-0.5 transition-transform duration-300 ${
                  theme === "dark" ? "bg-white" : "bg-gray-800"
                } ${
                  isMobileMenuOpen && theme !== "dark"
                    ? "-rotate-45 -translate-y-2"
                    : ""
                }`}
              ></span>
            </div>
          </button>
        )}

        {/* Desktop Navigation - Only show for non-dark themes */}
        {theme !== "dark" && (
          <nav className="items-center hidden space-x-6 md:flex">
            <Link
              to="/"
              className="transition-opacity duration-300 hover:opacity-70"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="transition-opacity duration-300 hover:opacity-70"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="transition-opacity duration-300 hover:opacity-70"
            >
              Contact
            </Link>
          </nav>
        )}

        {/* Mobile Navigation Menu - Only show for non-dark themes */}
        {theme !== "dark" && isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full md:hidden">
            <nav className={`py-2 px-4 shadow-lg ${getHeaderClasses()}`}>
              <Link
                to="/"
                className="block py-2 transition-opacity duration-300 hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 transition-opacity duration-300 hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 transition-opacity duration-300 hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* Theme Switcher */}
        <div className="relative ml-4">
          <select
            value={theme}
            onChange={handleThemeChange}
            className={`w-full px-3 py-2 pr-10 rounded-lg appearance-none border focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 ${getSelectClasses()}`}
          >
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
            <option value="colorful">Colorful</option>
          </select>
          <span
            className={`pointer-events-none absolute inset-y-0 right-3 flex items-center ${
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
      </div>
    </header>
  );
};

export default Header;
