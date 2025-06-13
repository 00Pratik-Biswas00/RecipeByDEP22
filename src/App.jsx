import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import RecipeDetails from "./pages/RecipeDetails";
import AddOrEditRecipe from "./pages/AddOrEditRecipe";
import MyRecipes from "./pages/MyRecipes";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import RecomendedRecipe from "./pages/RecomendedRecipe"

function App() {
    return (
    <Router>
    <Navbar />
    <div className="px-4 py-6">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddOrEditRecipe />} />
        <Route path="/edit" element={<RecipeDetails />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route path="/recommended" element={<RecomendedRecipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    </Router>
    );
}

export default App;
