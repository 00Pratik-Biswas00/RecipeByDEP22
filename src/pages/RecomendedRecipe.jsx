import React from "react";
function RecomendedRecipe(){
    const dishes=[
    {
      id:1, name: "DISH1", category: "Category1", rating: 4.5, image: " ", chef: "cheftag1", time: "otherTag1" 
    },
    {id:2, name: "DISH2", category: "Category2", rating: 4.5, image: " ", chef: "cheftag2", time: "otherTag2" },
    {id:1, name: "DISH3", category: "Category3", rating: 3.5, image: " ", chef: "cheftag3", time: "otherTag3" },
    {id:1, name: "DISH4", category: "Category4", rating: 4.0, image: " ", chef: "cheftag4", time: "otherTag4" },
    {id:1, name: "DISH5", category: "Category5", rating: 3.9, image: " ", chef: "cheftag5", time: "otherTag5" }

  ];
    return(
        <>
        <div>
          <h2 className="text-2xl text-green-700 font-bold">RECOMMENDED RECIPES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 m-4">
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
                            opacity: 0.7
                          }}
                        >
                          <div className="w-full h-full opacity-100 flex items-center justify-center">
                            <span className="text-white font-semibold">Food Image</span>
                          </div>
                        </div>

                  {/* Heart Icon */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs">👨‍🍳</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      {dish.chef}
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {dish.time}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{dish.reviews}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
    )
}

export default RecomendedRecipe;