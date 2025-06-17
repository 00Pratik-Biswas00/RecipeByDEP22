import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import dishes from "../data/recipes";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RecommendedRecipe() {
  const query = useQuery();

  const [filters, setFilters] = useState({
    cuisineType: query.get("cuisineType") || "",
    category: query.get("category") || "",
    time: query.get("time") || "",
    difficultyLevel: query.get("difficultyLevel") || ""
  });

  const filteredDishes = dishes.filter((dish) => {
    const matchCuisine = !filters.cuisineType || dish.cuisineType === filters.cuisineType;
    const matchCategory = !filters.category || dish.category === filters.category;
    const matchTime = !filters.time || (
      (filters.time === "under30" && parseInt(dish.time) <= 30) ||
      (filters.time === "30to60" && parseInt(dish.time) > 30 && parseInt(dish.time) <= 60) ||
      (filters.time === "over60" && parseInt(dish.time) > 60)
    );
    const matchDifficulty = !filters.difficultyLevel || dish.difficultyLevel === filters.difficultyLevel;

    return matchCuisine && matchCategory && matchTime && matchDifficulty;
  });

  return (
    <div className="p-7">
      <div className="flex items-center gap-6 px-3">
        <h2 className="text-4xl font-bold text-green-600 mb-5">RECOMMENDED RECIPES</h2>
      </div>

      <div className="space-x-3 text-sm flex px-3 py-5">
        <select
          value={filters.cuisineType}
          onChange={(e) => setFilters({ ...filters, cuisineType: e.target.value })}
          className="w-full border border-gray-900 px-3 py-2 rounded text-gray-600"
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
          className="w-full border border-gray-900 px-3 py-2 rounded text-gray-600"
        >
          <option value="">Category</option>
          <option>Main Course</option>
          <option>Appetizer</option>
          <option>Street Food</option>
        </select>

        <select
          value={filters.time}
          onChange={(e) => setFilters({ ...filters, time: e.target.value })}
          className="w-full border border-gray-900 px-3 py-2 rounded text-gray-600"
        >
          <option value="">Cooking time in minutes</option>
          <option value="under30">Under 30 mins</option>
          <option value="30to60">30–60 mins</option>
          <option value="over60">60+ mins</option>
        </select>

        <select
          value={filters.difficultyLevel}
          onChange={(e) => setFilters({ ...filters, difficultyLevel: e.target.value })}
          className="w-full border border-gray-900 px-3 py-2 rounded text-gray-600"
        >
          <option value="">Difficulty level</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-4">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image Container */}
                <div className="relative">
                  <div
                    className="w-full h-40 bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 flex items-center justify-center"
                    
                  >
                                    <img src={dish.image} className="bg-cover bg-center"/>

                    <div className="w-full h-full opacity-100 flex items-center justify-center">
                    </div>
                  </div>

                  {/* Heart Icon */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{dish.name}</h4>
                      <p className="text-sm text-gray-600">{dish.category}</p>
                    </div>
                    
                        <div className="bg-cyan-500 text-white w-10 h-10 flex items-center justify-center font-semibold rounded-full">
                          U
                        </div>
                      
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      {dish.chef}
                    </span>
                    <span className="text-xs text-gray-600 bg-blue-50 px-2 py-1 rounded">
                      {dish.cuisineType}
                    </span>
                    <span className="text-xs text-gray-600 bg-blue-50 px-2 py-1 rounded">
                      {dish.time}
                    </span>
                    <span className="text-xs text-gray-600 bg-blue-50 px-2 py-1 rounded">
                      {dish.difficultyLevel}
                    </span>
                  
                  </div>

                  {/* Rating */}
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {/* Full stars */}
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-xl">★</span>
                      ))}

                      {/* Half star */}
                      <span className="text-xl relative inline-block w-5">
                        <span className="absolute left-0 top-0 w-[42%] overflow-hidden">★</span>
                        <span className="text-gray-300">★</span>
                      </span>
                    </div>

                    <span className="text-base text-gray-600">{dish.rating} (5K)</span>
                  </div>
                </div>
              </div>
          ))
        ) : (
          <p className="text-gray-600 text-center mt-10">No recipes found for selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default RecommendedRecipe;
