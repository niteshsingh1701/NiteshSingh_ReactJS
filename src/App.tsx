import React, { useState } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme}`}>
      <Header 
        showHamburger={theme === "dark"}
        onMenuClick={toggleSidebar}
      />
      {theme === "dark" && (
        <aside 
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 transform transition-transform duration-300 z-40 
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:translate-x-0`}
        >
          <Sidebar />
        </aside>
      )}
      <main
        className={`pt-16 transition-all duration-500 ${
          theme === "dark" ? "md:ml-64" : ""
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
