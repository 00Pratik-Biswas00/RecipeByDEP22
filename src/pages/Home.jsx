import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import CuisineFilter from "../components/CuisineFilter";


 const cuisines=["American","Italian", "Spanish", "Indian", "Lebanese", "Chinese", "Thai", "French", "Irish", "Mexican", "Meditreanian"];


function Home({dishes}) {

  const [selectedCuisine, setSelectedCuisine]=useState("American");
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [filters, setFilters] = useState({
      cuisineType: "",
      category: "",
      difficultyLevel: "",
      time:"",
  });
  const [sortBy, setSortBy] = useState("popularity");
  const [likedDishes, setLikedDishes] = useState([]);

  useEffect(() => {
      // Load liked dishes from localStorage on page load
      const storedLikes = JSON.parse(localStorage.getItem("likedDishes")) || [];
      setLikedDishes(storedLikes);
    }, []);

  const handleLike = (dishId) => {
    let updatedLikes = [];
    if (likedDishes.includes(dishId)) {
      // Unliking - remove from likes
      updatedLikes = likedDishes.filter(id => id !== dishId);
    } else {
      // Liking - add to likes
      updatedLikes = [...likedDishes, dishId];
    }
    setLikedDishes(updatedLikes);
    localStorage.setItem("likedDishes", JSON.stringify(updatedLikes));
  };

  const filteredDishes = dishes
  .filter(dish =>{ 
     const timeInMins = parseInt(dish.time);

    return (
      (!filters.cuisineType || dish.cuisineType === filters.cuisineType) &&
      (!filters.category || dish.category === filters.category) &&
      (!filters.difficultyLevel || dish.difficultyLevel === filters.difficultyLevel) &&
      (
        !filters.time || 
        (filters.time === "under30" && timeInMins < 30) ||
        (filters.time === "30to60" && timeInMins >= 30 && timeInMins <= 60) ||
        (filters.time === "over60" && timeInMins > 60)
      )
    );
  })
  .sort((a, b) => {
    if (sortBy === "popularity") {
      return b.rating - a.rating;
    } else if (sortBy === "latest") {
      return b.id - a.id; // latest by id
    }
    return 0;
  });

  return (
    <div className="min-h-screen p-7"
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
            selectedCuisine === cuisine ? 'ring-2 ring-blue-400 transform scale-105' : 'hover:transform hover:scale-105'
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
          <CuisineFilter
            filters={filters} 
            setFilters={setFilters} 
            sortBy={sortBy} 
            setSortBy={setSortBy}
           
          />
        </div>
      </div>

      {/* Dish Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-14">
        {filteredDishes.map((dish) => (
          <Link to={`/dish/${dish.id}`} key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault(); // Stop Link navigation
                  e.stopPropagation(); // Stop bubbling up to Link
                  handleLike(dish.id); // Run your like handler
                }}
                className=" absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
              >
                <svg
                  className={`w-5 h-5 ${likedDishes.includes(dish.id) ? "text-red-500" : "text-gray-400"}`}
                  fill={likedDishes.includes(dish.id) ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
          </Link>
        ))}
      </div>

      
    </div>
      </div>
  );
}

export default Home;
