import React from "react";
import { useTheme } from "../context/ThemeContext";

const About: React.FC = () => {
  const { theme } = useTheme();

  const getPageClasses = () => {
    switch (theme) {
      case "light":
        return "bg-gray-50 text-gray-900 min-h-screen";
      case "dark":
        return "bg-gray-900 text-white min-h-screen";
      case "colorful":
        return "bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 text-purple-900 min-h-screen";
      default:
        return "bg-gray-50 text-gray-900 min-h-screen";
    }
  };

  const getTextStyle = () => {
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

  const getCardClasses = () => {
    switch (theme) {
      case "light":
        return "bg-white border border-gray-200 shadow-sm";
      case "dark":
        return "bg-gray-800 border border-gray-700 shadow-md";
      case "colorful":
        return "bg-gradient-to-br from-yellow-200 to-pink-200 border border-purple-300 shadow-lg";
      default:
        return "bg-white border border-gray-200 shadow-sm";
    }
  };

  return (
    <div className={`transition-all duration-500 ${getPageClasses()}`}>
      <div className="container mx-auto px-4 py-8">
        <div className={`rounded-lg p-8 ${getCardClasses()}`}>
          <h1
            className={`text-4xl font-bold mb-6 ${
              theme === "dark"
                ? "text-white"
                : theme === "colorful"
                ? "text-purple-900"
                : "text-gray-900"
            }`}
            style={getTextStyle()}
          >
            About Theme Switcher
          </h1>

          <div className="space-y-6" style={getTextStyle()}>
            <p
              className={`text-lg ${
                theme === "dark"
                  ? "text-gray-300"
                  : theme === "colorful"
                  ? "text-purple-700"
                  : "text-gray-600"
              }`}
            >
              This application demonstrates advanced React development skills
              including dynamic theming, state management, API integration, and
              responsive design.
            </p>

            <h2
              className={`text-2xl font-semibold ${
                theme === "dark"
                  ? "text-white"
                  : theme === "colorful"
                  ? "text-purple-900"
                  : "text-gray-900"
              }`}
            >
              Key Features
            </h2>

            <ul
              className={`space-y-3 ${
                theme === "dark"
                  ? "text-gray-300"
                  : theme === "colorful"
                  ? "text-purple-700"
                  : "text-gray-600"
              }`}
            >
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>
                  Three distinct themes with different layouts, fonts, and color
                  schemes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Persistent theme selection using localStorage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>React Context API for global state management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Integration with external API (FakeStore API)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Fully responsive design for all screen sizes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Smooth animations and transitions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>
                  TypeScript for type safety and better development experience
                </span>
              </li>
            </ul>

            <h2
              className={`text-2xl font-semibold ${
                theme === "dark"
                  ? "text-white"
                  : theme === "colorful"
                  ? "text-purple-900"
                  : "text-gray-900"
              }`}
            >
              Technology Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "React 18",
                "TypeScript",
                "Tailwind CSS",
                "React Router",
                "Context API",
                "Vite",
              ].map((tech) => (
                <div
                  key={tech}
                  className={`p-3 rounded-lg text-center ${getCardClasses()}`}
                >
                  <span className="font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
