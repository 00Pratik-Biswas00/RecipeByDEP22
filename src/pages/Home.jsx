import React from "react";
import {useState} from "react";
import CuisineFilter from "../components/CuisineFilter";


function Home() {

  const [selectedCuisine, setSelectedCuisine]=useState("American");
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);



  const cuisines=["American","Italian", "Spanish", "Indian", "Lebanese", "Chinese", "Thai", "French", "Irish", "Mexican", "Meditreanian"];
const dishes = [
  { id: 1, name: "DISH1", category: "Category1", rating: 4.5, image: " ", chef: "cheftag1", time: "otherTag1", reviews:"5K" },
  { id: 2, name: "DISH2", category: "Category2", rating: 4.2, image: " ", chef: "cheftag2", time: "otherTag2", reviews:"5K" },
  { id: 3, name: "DISH3", category: "Category3", rating: 3.5, image: " ", chef: "cheftag3", time: "otherTag3", reviews:"5K" },
  { id: 4, name: "DISH4", category: "Category4", rating: 4.0, image: " ", chef: "cheftag4", time: "otherTag4", reviews:"5K" },
  { id: 5, name: "DISH5", category: "Category5", rating: 3.9, image: " ", chef: "cheftag5", time: "otherTag5", reviews:"5K" },
  { id: 6, name: "DISH6", category: "Category6", rating: 4.7, image: " ", chef: "cheftag6", time: "otherTag6", reviews:"5K" },
  { id: 7, name: "DISH7", category: "Category7", rating: 4.1, image: " ", chef: "cheftag7", time: "otherTag7", reviews:"5K" },
  { id: 8, name: "DISH8", category: "Category8", rating: 3.8, image: " ", chef: "cheftag8", time: "otherTag8", reviews:"5K" },
  { id: 9, name: "DISH9", category: "Category9", rating: 4.6, image: " ", chef: "cheftag9", time: "otherTag9", reviews:"5K" },
  { id: 10, name: "DISH10", category: "Category10", rating: 4.3, image: " ", chef: "cheftag10", time: "otherTag10", reviews:"5K" }
];


  return (
    <div className="min-h-screen p-5"
    style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 50
    }}
    >
    {/*The text part*/}
    <div className="p-4">
      <h3 className="text-xl font-semibold text-center tracking-tighter">What are your favorite cuisines?</h3>
      {/* <p className="text-center text-gray-600">Browse, share, and manage your favorite recipes.</p> */}
    </div>

    {/*The circle options*/}
    <div className="flex justify-center space-x-4 overflow-x-auto pb-4 pt-2">
      {cuisines.map((cuisine) => (
        <button key={cuisine} onClick={() => setSelectedCuisine(cuisine)}
          className={`relative flex-shrink-0 w-20 h-20 rounded-full  text-white text-sm font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 ${
            selectedCuisine === cuisine ? 'ring-4 ring-blue-400 transform scale-105' : 'hover:transform hover:scale-105'
                }`}
                style={{
                  backgroundImage: `url('https://wallpaperaccess.com/full/1312776.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-full"></div>

            {/* Cuisine name */}
            <span className="relative z-10 text-xs">{cuisine}</span>
        </button>
        ))}
    </div>


    {/* Most Popular Dishes Section */}
    <div className="px-4 py-8 pt-16">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-black tracking-tighter">Most Popular Dishes</h3>
        <div className="flex space-x-2">
          <CuisineFilter/>
        </div>
      </div>

      {/* Dish Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-14">
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
                <div className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                  U
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

                <span className="text-base text-gray-600">{dish.reviews}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
      </div>
  );
}

export default Home;
