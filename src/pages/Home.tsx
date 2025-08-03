import React from "react";
import { useTheme } from "../context/ThemeContext";
import ProductList from "../components/ProductList";

const Home: React.FC = () => {
  const { theme } = useTheme();

  const getPageClasses = () => {
    switch (theme) {
      case "light":
        return "bg-gray-50 text-gray-900 min-h-screen";
      case "dark":
        return "bg-gray-900 text-white min-h-screen";
      case "colorful":
        return "bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 text-purple-900 min-h-screen";
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

  const getButtonClasses = () => {
    switch (theme) {
      case "light":
        return "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform  transition-all duration-300 cursor-pointer";
      case "dark":
        return "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform  transition-all duration-300 font-semibold cursor-pointer";
      case "colorful":
        return "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform  transition-all duration-300 cursor-pointer";
      default:
        return "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform  transition-all duration-300 cursor-pointer";
    }
  };

  return (
    <div className={`transition-all duration-500 ${getPageClasses()}`}>
      <div className="container px-4 py-8 pt-20 mx-auto">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === "dark"
                ? "text-white"
                : theme === "colorful"
                ? "text-purple-900"
                : "text-gray-900"
            }`}
            style={getTextStyle()}
          >
            Welcome to Theme Switcher App
          </h1>
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              theme === "dark"
                ? "text-gray-300"
                : theme === "colorful"
                ? "text-purple-700"
                : "text-gray-600"
            }`}
            style={getTextStyle()}
          >
            Experience the power of dynamic theming with our React application.
            Switch between minimal light, sophisticated dark, and vibrant
            colorful themes to see how the entire interface transforms
            seamlessly with smooth animations and responsive design.
          </p>
          <button
            className={getButtonClasses()}
            style={getTextStyle()}
            onClick={() =>
              alert(
                "Sample Button Clicked!"
              )
            }
          >
            Explore Themes
          </button>
        </section>

        {/* Products Section */}
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
