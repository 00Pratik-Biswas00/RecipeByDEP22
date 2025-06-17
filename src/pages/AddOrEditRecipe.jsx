import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeDetails from "../pages/RecipeDetails";

function AddOrEditRecipe() {
      const navigate = useNavigate(); 
      const handleCancel = () => {
        navigate("/");
    };
    const handleSubmit= () =>{
        // navigate("/edit");
        alert("Will be submitted successfully!");
    };

  return (
    <div className="bg-white">
    <div className="max-w-3xl px-10 bg-white rounded-md py-8">
      <h2 className="text-2xl font-bold text-green-600 mb-6">SUBMIT YOUR RECIPE</h2>

      <form className="space-y-4">
        {/* Recipe Name + Upload */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Recipe name"
            className="flex-1  px-4 py-2 rounded text-gray-800 border border-gray-900"
          />
          <div className="flex items-center border rounded overflow-hidden">
            <label className="bg-gray-100 px-4 py-2 text-sm font-medium cursor-pointer">
              Upload Image
              <input type="file" className="hidden" />
            </label>
            <span className="px-3 text-gray-600 text-xl">📤</span>
          </div>
        </div>

        {/* Recipe Description */}
        <textarea
          rows="4"
          placeholder="Recipe description and steps"
          className="w-full border border-gray-900 px-4 py-2 rounded text-gray-800"
        ></textarea>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="w-full border border-gray-900 px-4 py-2 rounded text-gray-800">
            <option>Cuisine type</option>
            <option>Indian</option>
            <option>Mexican</option>
          </select>

          <select className="w-full border border-gray-900 px-4 py-2 rounded text-gray-800">
            <option>Category</option>
            <option>Starter</option>
            <option>Main Course</option>
          </select>
        </div>

        {/* Tags & Ingredients */}
        <input
          type="text"
          placeholder="Mention tags separated by comma"
          className="w-full border border-gray-900 px-4 py-2 rounded text-gray-800"
        />
        <input
          type="text"
          placeholder="Mention ingredients separated by comma"
          className="w-full border border-gray-900 px-4 py-2 rounded text-gray-800"
        />

        {/* Time + Difficulty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <select className="w-full border border-gray-900 px-4 py-2 rounded text-gray-800 appearance-none">
              <option>Cooking time in minutes</option>
              <option>Under 30 mins</option>
              <option>30–60 mins</option>
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg">⏰</span>
          </div>

          <select className="w-full border border-gray-900 px-4 py-2 rounded text-gray-800">
            <option>Difficulty level</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        {/* Dietary Restrictions */}
        <input
          type="text"
          placeholder="Mention dietary restrictions"
          className="w-full border border-gray-900 px-4 py-2 rounded text-gray-800"
        />

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <button type="button" className="bg-green-500 text-white px-6 py-2 rounded-3xl hover:bg-green-600" onClick={handleSubmit}>
            SUBMIT
          </button>
          <button type="button" className="border border-green-500 text-green-500 px-6 py-2 rounded-3xl hover:bg-green-50" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddOrEditRecipe;
