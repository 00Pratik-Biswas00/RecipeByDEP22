import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import { useNavigate } from 'react-router-dom';
import Profile from '../pages/Profile';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate= useNavigate();
  const handleProfile=() => {
    navigate("/profile");
  }  
  return (
    <>
    <nav className="bg-gray-800 px-4 py-3 flex items-center justify-between">
      {/* Left side - Hamburger menu and Logo */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300 transition-colors text-xl" onClick={() => setIsSidebarOpen(true)}>
          ☰
        </button>
        <div className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-lg">
          LOGO
        </div>
      </div>

      {/* Center - Search bar */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by recipes, cuisine, category, tags..."
            className="w-full bg-white rounded-full px-4 py-2 pr-10 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </div>
        </div>
      </div>

      {/* Right side - Profile */}
      <div className="flex items-center">
        <button className="bg-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold" onClick={handleProfile}>
          U
        </button>
      </div>
    </nav>

    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
}