import React, { useState, useRef, useEffect } from "react";

const CuisineFilter = ({ filters, setFilters, sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="flex items-stretch z-30 bg-white rounded-3xl shadow-md shadow-gray-600" ref={dropdownRef}>

      <button onClick={() => setIsOpen(!isOpen)} className="py-2 px-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      </button>
      <div className="w-px bg-gray-300"></div>
      <button className="py-2 px-4" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="relative">
            <div className="absolute right-12 mt-12 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

        <div className="absolute right-0 mt-14 w-64 bg-white shadow-lg rounded-md p-4  border-gray-200">
          <h4 className="text-sm font-semibold text-gray-600 pb-2 mb-2">
            FILTERS --------------------------
          </h4>

          <div className="space-y-3 text-sm">
              <select 
                value={filters.cuisineType}
                onChange={(e) => setFilters({ ...filters, cuisineType: e.target.value })}
                className="w-full border px-3 py-2 rounded text-gray-600"
              >
                <option value="">Cuisine type</option>
                <option>Indian</option>
                <option>Mexican</option>
                <option>Italian</option>
                <option>Chinese</option>
                <option>Japanese</option>
                <option>Thai</option>
              </select>

            <select 
              value={filters.category}
              onChange={(e)=> setFilters({...filters, category: e.target.value})}
              className="w-full border px-3 py-2 rounded text-gray-600">
                <option value="">Category</option>
                <option>Main Course</option>
                <option>Appetizer</option>
                <option>Street Food</option>
            </select>

            <select
              value={filters.time}
              onChange={(e) => setFilters({ ...filters, time: e.target.value })}
              className="w-full border px-3 py-2 rounded text-gray-600"
            >
              <option value="">Cooking time in minutes</option>
              <option value="under30">Under 30 mins</option>
              <option value="30to60">30–60 mins</option>
              <option value="over60">60+ mins</option>
            </select>


              <select 
                value={filters.difficultyLevel}
                onChange={(e) => setFilters({ ...filters, difficultyLevel: e.target.value })}
                className="w-full border px-3 py-2 rounded text-gray-600"
              >
                <option value="">Difficulty level</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
          </div>

          <div className="mt-4  pt-2 text-sm">
            <p className="text-gray-600 font-semibold mb-1">SORT --------------------------</p>
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
        </div></div>
      )}
    </div>
  );
};

export default CuisineFilter;
