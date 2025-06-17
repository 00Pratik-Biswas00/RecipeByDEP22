import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import { useNavigate } from 'react-router-dom';
import Profile from '../pages/Profile';
import RegisterModel from "../components/RegisterModel";
import LoginModel from "../components/LoginModel";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate= useNavigate();


  const handleProfile=() => {
    // navigate("/profile");
    setIsDropdownOpen((prev) => !prev);  
  }  

   const handleLogin = () => {
    console.log('Login clicked');
    setIsDropdownOpen(false);
  };

  const handleRegister = () => {
    console.log('Register clicked');
    setIsDropdownOpen(false);
  };

  return (
    <>
    <nav className="bg-gray-800 px-4 py-3 flex items-center justify-between">
      {/* Left side - Hamburger menu and Logo */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300 transition-colors text-xl" onClick={() => setIsSidebarOpen(true)}>
          ☰
        </button>
        <a href='/' className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-lg">
          LOGO
        </a>
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
      <div className="relative flex items-center">
        <button className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold" onClick={handleProfile}>
          U
        </button>

        {isDropdownOpen && (
        <div className="absolute top-12 right-0 bg-white border shadow-md py-1 w-32">
          <button
            onClick={()=>{
              setShowLogin(true);
              setIsDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-1 hover:bg-gray-100"
          >
            Login
          </button>
          <button
            onClick={() => {
              setShowRegister(true);
              setIsDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-1 hover:bg-gray-100"
          >
            Register
          </button>
        </div>
        )}

        {showRegister && <RegisterModel onClose={() => setShowRegister(false)} />}
        {showLogin && <LoginModel onClose={()=> setShowLogin(false)}/>}
      </div>
    </nav>

    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
}