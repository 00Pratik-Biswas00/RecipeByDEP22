import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PreferencesModal = ({ onClose }) => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    cuisineType: "",
    category: "",
    time: "",
    difficultyLevel: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build URL query string
    const query = new URLSearchParams(filters).toString();

    // Navigate to /recommended with filters
    navigate(`/recommended?${query}`);

    // Close modal (optional, since you go to another page)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-green-700 text-xl font-bold mb-6 text-left font-serif">SET PREFERENCES</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full border px-3 py-2 rounded text-gray-600"
            >
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

          <div className="flex justify-center space-x-6 mt-4">
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
              SUBMIT
            </button>
            <button onClick={onClose} type="button" className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreferencesModal;
