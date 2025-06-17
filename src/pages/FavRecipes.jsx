import React, { useState, useEffect } from 'react';
import dishes from '../data/recipes';

function FavRecipes() {
  const [likedDishes, setLikedDishes] = useState([]);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likedDishes")) || [];
    setLikedDishes(storedLikes);
  }, []);

  const handleRemoveLike = (dishId) => {
    const updatedLikes = likedDishes.filter(id => id !== dishId);
    setLikedDishes(updatedLikes);
    localStorage.setItem("likedDishes", JSON.stringify(updatedLikes));
  };

  const favDishes = dishes.filter(dish => likedDishes.includes(dish.id));

  return (
    <div className='p-7 min-h-screen'>
      <div className="flex items-center gap-6 px-3">
        <h2 className="text-3xl font-bold text-green-600 mb-6">FAVOURITE RECIPES</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-4">
        {favDishes.length > 0 ? (
          favDishes.map((dish) => (
            <div key={dish.id} className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="w-full h-40 flex items-center justify-center"
              >
                <img
                  src={dish.image || 'https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg'}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Delete Icon */}
              <button
                onClick={() => handleRemoveLike(dish.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200"
              >

            <svg className="w-5 h-5 text-red-500" fill="#000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 461.363 461.363" xml:space="preserve" stroke="#8c8c8c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="95.088,461.363 366.276,461.363 389.653,105.984 71.71,105.984 "></polygon> <path d="M279.192,0h-97.02L71.71,23.557v50.83h317.943v-50.83L279.192,0z M301.683,47.871h-142V26.516h142V47.871z"></path> </g> </g> </g></svg>
 
              </button>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{dish.name}</h4>
                    <p className="text-sm text-gray-600">{dish.category}</p>
                  </div>
                  <div className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
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
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
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
          <p className="text-gray-600 ">You haven't liked any recipes yet.</p>
        )}
      </div>
    </div>
  );
}

export default FavRecipes;
