import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = ({ dishes }) => {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));
  const [likedDishes, setLikedDishes] = useState([]);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likedDishes")) || [];
    setLikedDishes(storedLikes);
  }, []);

  const handleLike = (dishId) => {
    let updatedLikes = [];
    if (likedDishes.includes(dishId)) {
      // Remove from favorites
      updatedLikes = likedDishes.filter(id => id !== dishId);
      alert("Removed from favorites");
    } else {
      // Add to favorites
      updatedLikes = [...likedDishes, dishId];
      alert("Added to favorites");
    }
    setLikedDishes(updatedLikes);
    localStorage.setItem("likedDishes", JSON.stringify(updatedLikes));
  };


  if (!dish) {
    return <p className="text-center mt-10 text-xl">Dish not found!</p>;
  }

  const isLiked = likedDishes.includes(dish.id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-start gap-10">
        {/* Dish Image */}
        <img
          src={dish.image}
          alt={dish.name}
          className="border-2 border-black rounded-md w-72 h-56"
        />

        {/* Dish Details */}
        <div className="space-y-4 text-gray-800 text-lg">
          <p><strong>Recipe name:</strong> {dish.name}</p>
          <p><strong>Cuisine type:</strong> {dish.cuisineType}</p>
          <p><strong>Category:</strong> {dish.category}</p>
          <p><strong>Difficulty level:</strong> {dish.difficultyLevel}</p>
          <p><strong>Time taken:</strong> {dish.time}</p>
        </div>
      </div>

      {/* Description & Steps */}
      <div className="mt-6 space-y-2">
        <h2 className="text-xl font-semibold">Some description and below description show the steps</h2>
        <p>{dish.description || "This is a delicious dish packed with flavors."}</p>

      </div>

      {/* Tags */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {dish.tags?.map((tag, index) => (
            <span
              key={index}
              className="border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-600 bg-blue-50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Ingredients */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <div className="flex flex-wrap gap-2">
          {dish.ingredients?.map((ingredient, index) => (
            <span
              key={index}
              className="border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-600 bg-orange-50"
            >
              {ingredient}
            </span>
          ))}
        </div>
      </div>

      {/* Dietary Restrictions */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Dietary restrictions</h2>
        <p>{dish.dietaryRestrictions || "None specified."}</p>
      </div>

      {/* Add to Favorites Button */}
      <div className="flex mt-6">
        <button
          onClick={() => handleLike(dish.id)}
          className={`${
            isLiked ? "bg-red-600" : "bg-green-600"
          } text-white px-6 py-2 rounded-lg`}
        >
          {isLiked ? "REMOVE FROM FAVORITES" : "ADD TO FAVORITES"}
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
