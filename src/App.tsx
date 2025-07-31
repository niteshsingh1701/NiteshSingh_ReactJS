import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Inner App Layout Component that uses theme context
const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme}`}>
      <Header />
      {theme === "dark" && <Sidebar />}
      <main
        className={`pt-16 transition-all duration-500 ${
          theme === "dark" ? "ml-64" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

// App Layout Component that provides theme context
const AppLayout: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
