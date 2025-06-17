import React, { useState, useEffect } from 'react';

const dishes=[
  {
    id:1, name: "DISH1", category: "Category1", rating: 4.5, image: " ", chef: "cheftag1", time: "otherTag1" 
  },
  {id:2, name: "DISH2", category: "Category2", rating: 4.5, image: " ", chef: "cheftag2", time: "otherTag2" },
  {id:1, name: "DISH3", category: "Category3", rating: 3.5, image: " ", chef: "cheftag3", time: "otherTag3" },
  {id:1, name: "DISH4", category: "Category4", rating: 4.0, image: " ", chef: "cheftag4", time: "otherTag4" },
  {id:1, name: "DISH5", category: "Category5", rating: 3.9, image: " ", chef: "cheftag5", time: "otherTag5" }

];


function Profile(){
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  

    return(
    <div className="bg-gray-100 min-h-screen px-6 py-8">

      <div className="flex items-center gap-6 mt-6 px-3 h-620">
        <img
          src={user?.image}
          alt="User"
          className="rounded-full w-40 h-40 object-cover"
        />
        <div>
          <h2 className="text-2xl text-green-700 font-bold">{user?.firstName}{" "}{user?.lastName}</h2>
          <p className="text-gray-600 flex items-center gap-1">
            <span>📍</span> {user?.region}
          </p>
        </div>
      </div>

      {/* Dish Cards Grid */}

      <div className="flex items-center gap-6 pt-10 px-3">
        <h2 className="text-2xl font-bold text-green-600 mb-6">RECIPES PUBLISHED BY YOU</h2>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-14 px-4">
        {dishes.map((dish) => (
          <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Image Container */}
            <div className="relative">
              <div
                className="w-full h-40 bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${
                    dish.imageUrl ||
                    'https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg'
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  
                }}
              >
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
                {user && user.image ? (
                <img src={user?.image} className='rounded-full w-10 h-10' alt="User" />
                  ) : (
                    <div className="bg-cyan-500 text-white w-10 h-10 flex items-center justify-center font-semibold">
                      U
                    </div>
                  )}
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
        ))}
      </div>
    </div>
    );
}

export default Profile