import {useTheme} from "../../context/ThemeContext";


const Filter = () => {
    const { darkMode } = useTheme();
  return (
    <div className={`overflow-x-auto py-4 px-2"
    ${darkMode ? "bg-gray-800" : "bg-gray-100" }`}>
      <div className="flex space-x-4 min-w-max">
        <select className="border border-gray-300 rounded px-3 py-2">
          <option value="option1">All Jobs</option>
          <option value="option2">5000+/month</option>
          <option value="option3">10000+/month</option>
        </select>

        <select className="border border-gray-300 rounded px-3 py-2">
          <option value="option1">Remote</option>
          <option value="option2">Onsite</option>
          <option value="option3">Hybrid</option>
        </select>

        <select className="border border-gray-300 rounded px-3 py-2">
          <option value="option1">Job Category</option>
          <option value="option2">Sales</option>
          <option value="option3">HR</option>
        </select>

        <select className="border border-gray-300 rounded px-3 py-2">
          <option value="option1">All</option>
          <option value="option2">Easy Apply</option>
          <option value="option3">Apply on website</option>
        </select>

        <select className="border border-gray-300 rounded px-3 py-2">
          <option value="option1">Skills</option>
          <option value="option2">Typing</option>
          <option value="option3">Customer service</option>
        </select>

        <select className="border border-gray-300 rounded px-3 py-2">
          <option value="option1">Language</option>
          <option value="option2">English</option>
          <option value="option3">Hindi</option>
        </select>

        <select className="border border-gray-300 rounded px-3 py-2">
          <option value="option1">Education level</option>
          <option value="option2">UG</option>
          <option value="option3">PG</option>
        </select>

        <select className="border border-gray-300 rounded px-3 py-2">
          <option value="option1">Date Posted</option>
          <option value="option2">Last 24 hours</option>
          <option value="option3">Last 7 days</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
