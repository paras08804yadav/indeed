import {useTheme} from '../../context/ThemeContext'
import React from "react";
const Card = ({
  cardData = {
    jobRole: "Software Engineer",
    companyName: "ABC Corp",
    city: "New York",
    state: "NY",
    budget: "$5000/month",
    jobType: "Full Time",
    applyType: "Easy Apply",
  },  //default prop
}) => {
    const { darkMode } = useTheme();
  return (
    <div className={`p-4 m-2 border rounded-xl flex flex-col gap-2  transition-colors duration-200" ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900" 
    }`}>
      {/* Job Role */}
      <h3 className="text-lg font-bold ">{cardData.jobRole}</h3>

      {/* Company Name */}
      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}> {cardData.companyName}</p>

      {/* Location */}
      <p className="text-gray-500 text-sm">
        {cardData.city}, {cardData.state}
      </p>

      {/* Budget & Job Type */}
      <p className="text-blue-600 font-medium">
        {cardData.budget} · {cardData.jobType}
      </p>

      {/* Apply Type */}
      <p className={`text-sm font-bold ${darkMode? "text-gray-200" :"text-gray-700" }`}>{cardData.applyType}</p>
    </div>
  );
};

export default Card;
