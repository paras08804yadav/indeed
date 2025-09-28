import logo from '../../assets/Indeed-logo.png'
import { useTheme } from "../../context/ThemeContext";
import profile from '../../assets/profile.jpg'
import { useState } from "react";

const Navbar=()=> {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { darkMode, toggleTheme } = useTheme();

  return (
    <>
    <nav className={`flex items-center justify-between p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}>
      <img src={logo} alt="LOGO" className="h-13 w-20"></img>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded" onClick={toggleTheme}>Change Theme</button>
      <div className="flex items-center space-x-2">
        <img src={profile} alt="ProfileIcon" className="h-10 w-10 rounded-full" ></img>
        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311531.png"
            alt="Menu"
            className="h-8 w-8 cursor-pointer"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />      
        </div>
    </nav>
    
      <div
       className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>X</button>
        </div>
        <ul className="p-4 space-y-4">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
