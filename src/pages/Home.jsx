import React from "react";
import {useState} from "react";
import RegisterModel from "../components/RegisterModel";
import LoginModel from "../components/LoginModel";
import CuisineFilter from "../components/CuisineFilter";


function Home() {

  const [selectedCuisine, setSelectedCuisine]=useState("American");
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);



  const cuisines=["American","Italian", "Spanish", "Indian", "Lebanese", "Chinese", "Thai", "French", "Irish", "Mexican"];
  const dishes=[
    {
      id:1, name: "DISH1", category: "Category1", rating: 4.5, image: " ", chef: "cheftag1", time: "otherTag1" 
    },
    {id:2, name: "DISH2", category: "Category2", rating: 4.5, image: " ", chef: "cheftag2", time: "otherTag2" },
    {id:1, name: "DISH3", category: "Category3", rating: 3.5, image: " ", chef: "cheftag3", time: "otherTag3" },
    {id:1, name: "DISH4", category: "Category4", rating: 4.0, image: " ", chef: "cheftag4", time: "otherTag4" },
    {id:1, name: "DISH5", category: "Category5", rating: 3.9, image: " ", chef: "cheftag5", time: "otherTag5" }

  ];

  return (
    <div className="min-h-screen">
      {showRegister && <RegisterModel onClose={() => setShowRegister(false)} />}
      {showLogin && <LoginModel onClose={()=> setShowLogin(false)}/>}
      {/* Header with Login/Register */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-end space-x-4">
          <button className="text-gray-600 hover:bg-gray-200 border-2 p-2 m-2 rounded-md " onClick={()=>setShowLogin(true)}>Login</button>
          <button className="text-gray-600 hover:bg-gray-200 border-2 p-2 m-2 rounded-md" onClick={() => setShowRegister(true)}>Register</button>
        </div>
      </div>
    {/*The text part*/}
    <div className="p-4">
      <h3 className="text-2xl font-bold text-center">What are your favorite cuisines?</h3>
      <p className="text-center text-gray-600">Browse, share, and manage your favorite recipes.</p>
    </div>

    {/*The circle options*/}
    <div className="flex justify-center space-x-4 overflow-x-auto pb-4 pt-5">
      {cuisines.map((cuisine) => (
        <button key={cuisine} onClick={() => setSelectedCuisine(cuisine)}
          className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-white text-sm font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 ${
            selectedCuisine === cuisine ? 'ring-4 ring-blue-400 transform scale-105' : 'hover:transform hover:scale-105'
                }`}
                style={{
                  backgroundImage: `url('https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg')`
                }}
              >
            {cuisine}
        </button>
        ))}
      </div>

      {/* the grid part of the popular part */}

        {/* Most Popular Dishes Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Most Popular Dishes</h3>
            <div className="flex space-x-2">
              <CuisineFilter/>
              {/* <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Dish Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-6">
            {dishes.map((dish) => (
              <div key={dish.id + 5} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image Container */}
                <div className="relative">
                  <div className="w-full h-40 bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 flex items-center justify-center">
                    <div className="w-full h-full bg-amber-600 url('https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg') opacity-80 flex items-center justify-center">
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
        </div>
      </div>
  );
}

export default Home;
