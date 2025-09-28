import React from 'react';
import { useTheme } from "./context/ThemeContext";
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Layout/Navbar';


function App() {
  const { darkMode } = useTheme();


  return (
    
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`} >

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App; // Export the App component for use in index.js