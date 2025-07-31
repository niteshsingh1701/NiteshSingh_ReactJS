import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const getPageClasses = () => {
    switch (theme) {
      case "light":
        return "bg-gray-50 text-gray-900 min-h-screen";
      case "dark":
        return "bg-gray-900 text-white min-h-screen";
      case "colorful":
        return "bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 text-purple-900 min-h-screen";
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

  const getInputClasses = () => {
    switch (theme) {
      case "light":
        return "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-200";
      case "dark":
        return "bg-gray-700 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-900";
      case "colorful":
        return "bg-yellow-100 border-purple-300 text-purple-900 focus:border-pink-500 focus:ring-pink-200";
      default:
        return "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-200";
    }
  };

  const getButtonClasses = () => {
    switch (theme) {
      case "light":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "dark":
        return "bg-blue-600 hover:bg-blue-700 text-white font-semibold";
      case "colorful":
        return "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white";
      default:
        return "bg-blue-500 hover:bg-blue-600 text-white";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={`transition-all duration-500 ${getPageClasses()}`}>
      <div className="container mx-auto px-4 py-8">
        <div className={`rounded-lg p-8 max-w-2xl mx-auto ${getCardClasses()}`}>
          <h1
            className={`text-4xl font-bold mb-6 text-center ${
              theme === "dark"
                ? "text-white"
                : theme === "colorful"
                ? "text-purple-900"
                : "text-gray-900"
            }`}
            style={getTextStyle()}
          >
            Contact Us
          </h1>

          <p
            className={`text-lg mb-8 text-center ${
              theme === "dark"
                ? "text-gray-300"
                : theme === "colorful"
                ? "text-purple-700"
                : "text-gray-600"
            }`}
            style={getTextStyle()}
          >
            Get in touch with us. We'd love to hear from you!
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            style={getTextStyle()}
          >
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark"
                    ? "text-gray-300"
                    : theme === "colorful"
                    ? "text-purple-700"
                    : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${getInputClasses()}`}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark"
                    ? "text-gray-300"
                    : theme === "colorful"
                    ? "text-purple-700"
                    : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${getInputClasses()}`}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark"
                    ? "text-gray-300"
                    : theme === "colorful"
                    ? "text-purple-700"
                    : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-vertical ${getInputClasses()}`}
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-lg font-medium transform transition-all duration-300 cursor-pointer ${getButtonClasses()}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
