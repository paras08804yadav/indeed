import { useTheme } from "../../context/ThemeContext";
import React from "react";

const SearchBar = () => {
    const { darkMode } = useTheme();
  return (
        <div className={`flex flex-col md:flex-row items-center gap-4 p-4 rounded-md transition-colors duration-300 ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}>
              
      <div className="flex flex-col">
        <input
          type="text"
          id="job"
          placeholder="Enter job title"
          className={`rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 border transition-colors duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-black placeholder-gray-300"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
          }`}
        />
      </div>

      {/* Location input */}
      <div className="flex flex-col">
        <input
          type="text"
          id="location"
          placeholder="Enter location"
          className={`rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 border transition-colors duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-black placeholder-gray-300"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
          }`}
        />
      </div>

      {/* Search Button */}
      <button className={`font-semibold px-4 py-2 rounded mt-2 md:mt-0 transition-colors duration-300 ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-700 text-black"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
