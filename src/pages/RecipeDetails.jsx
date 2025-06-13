import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [recipeData, setRecipeData] = useState({
    image: "https://via.placeholder.com/150",
    name: "Recipe name",
    cuisine: "Cuisine type",
    category: "Category",
    difficulty: "Difficulty level",
    time: "Time taken",
    description: "Some description and below description show the steps\nStep 1..........\nStep 2..........\nStep 3..........",
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
    ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4", "ingredient5", "ingredient6"],
    dietary: "Dietary restrictions",
  });

  const handleInputChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const handleTagDelete = (index, type) => {
    const updated = [...recipeData[type]];
    updated.splice(index, 1);
    setRecipeData({ ...recipeData, [type]: updated });
  };

  const handleSave = () => {
    console.log("Updated Recipe:", recipeData);
    setIsEditing(false);
    navigate("/");
  };

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this recipe?");
    if (confirm) navigate("/");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={recipeData.image}
            alt="Dish"
            className="w-40 h-40 object-cover rounded-md"
          />
          <input
            type="file"
            className="absolute bottom-2 right-2 cursor-pointer"
            title="Change Image"
          />
        </div>
        <div className="space-y-2 text-gray-800">
          <EditableText label="Recipe name" field="name" value={recipeData.name} editing={isEditing} onChange={handleInputChange} />
          <EditableText label="Cuisine type" field="cuisine" value={recipeData.cuisine} editing={isEditing} onChange={handleInputChange} />
          <EditableText label="Category" field="category" value={recipeData.category} editing={isEditing} onChange={handleInputChange} />
          <EditableText label="Difficulty level" field="difficulty" value={recipeData.difficulty} editing={isEditing} onChange={handleInputChange} />
          <EditableText label="Time taken" field="time" value={recipeData.time} editing={isEditing} onChange={handleInputChange} />
        </div>
      </div>

      <div className="mt-6">
        {isEditing ? (
          <textarea
            name="description"
            className="w-full p-2 border rounded"
            value={recipeData.description}
            onChange={handleInputChange}
          />
        ) : (
          <p className="whitespace-pre-line text-gray-700">{recipeData.description}</p>
        )}
      </div>

      {/* Tags */}
      <TagBox type="tags" title="Tags" data={recipeData.tags} editable={isEditing} onDelete={handleTagDelete} />
      <TagBox type="ingredients" title="Ingredients" data={recipeData.ingredients} editable={isEditing} onDelete={handleTagDelete} />

      <EditableText
        label="Dietary restrictions"
        field="dietary"
        value={recipeData.dietary}
        editing={isEditing}
        onChange={handleInputChange}
      />

      <div className="flex space-x-4 mt-4">
        {isEditing ? (
          <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSave}>
            SAVE
          </button>
        ) : (
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setIsEditing(true)}>
            UPDATE
          </button>
        )}
        <button className="border border-red-600 text-red-600 px-4 py-2 rounded" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

const EditableText = ({ label, value, field, editing, onChange }) => (
  <div className="flex items-center space-x-2">
    <label className="text-sm font-semibold text-gray-600">{label}:</label>
    {editing ? (
      <input
        type="text"
        name={field}
        value={value}
        onChange={onChange}
        className="border px-2 py-1 rounded text-sm"
      />
    ) : (
      <span>{value}</span>
    )}
  </div>
);

const TagBox = ({ title, data, editable, onDelete, type }) => (
  <div className="mt-4">
    <p className="font-semibold text-gray-700 mb-1">{title}</p>
    <div className="flex flex-wrap gap-2 border p-2 rounded">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
        >
          <span>{item}</span>
          {editable && (
            <button onClick={() => onDelete(index, type)} className="text-red-600">×</button>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default RecipeDetails;