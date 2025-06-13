import React, { useState, useRef, useEffect } from "react";

const CuisineFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");
  const dropdownRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left z-30" ref={dropdownRef}>

      <button onClick={() => setIsOpen(!isOpen)} className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
              <button className="p-2 m-2 border border-gray-300 rounded-md hover:bg-gray-50" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 border border-gray-200">
          <h4 className="text-sm font-semibold text-gray-700 border-b pb-2 mb-2">
            FILTERS
          </h4>

          <div className="space-y-3 text-sm">
            <select className="w-full border px-3 py-2 rounded text-gray-700">
              <option>Cuisine type</option>
              <option>Indian</option>
              <option>Mexican</option>
              <option>French</option>
            </select>

            <select className="w-full border px-3 py-2 rounded text-gray-700">
              <option>Category</option>
              <option>Starter</option>
              <option>Main Course</option>
              <option>Dessert</option>
            </select>

            <select className="w-full border px-3 py-2 rounded text-gray-700">
              <option>Cooking time in minutes</option>
              <option>Under 30 mins</option>
              <option>30–60 mins</option>
              <option>60+ mins</option>
            </select>

            <select className="w-full border px-3 py-2 rounded text-gray-700">
              <option>Difficulty level</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="mt-4 border-t pt-2 text-sm">
            <p className="text-gray-700 font-medium mb-1">SORT</p>
            <div className="flex flex-col space-y-1">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="popularity"
                  checked={sortBy === "popularity"}
                  onChange={() => setSortBy("popularity")}
                />
                <span>Popularity</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="latest"
                  checked={sortBy === "latest"}
                  onChange={() => setSortBy("latest")}
                />
                <span>Latest</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CuisineFilter;
