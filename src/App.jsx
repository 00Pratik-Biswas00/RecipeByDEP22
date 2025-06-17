import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import AddOrEditRecipe from "./pages/AddOrEditRecipe";
import MyRecipes from "./pages/MyRecipes";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import RecommendedRecipe from "./pages/RecommendedRecipe"
import FavRecipes from "./pages/FavRecipes";


import dishes from "./data/recipes";

function App() {
    return (
    <Router>
    <Navbar dishes={dishes}/>
    <div 
    style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 50
    }}
    >
        <Routes>
        <Route path="/" element={<Home dishes={dishes} />} />
        <Route path="/add" element={<AddOrEditRecipe />} />
        <Route path="/dish/:id" element={<RecipeDetails dishes={dishes}/>} />
        <Route path="/my-recipes" element={<MyRecipes dishes={dishes} />} />
        <Route path="/recommended" element={<RecommendedRecipe dishes={dishes} />} />
        <Route path="/profile" element={<Profile dishes={dishes}/>} />
        <Route path="/fav-recipes" element={<FavRecipes dishes={dishes} />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    </Router>
    );
}

export default App;
