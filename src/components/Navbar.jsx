import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import RegisterModel from "../components/RegisterModel";
import LoginModel from "../components/LoginModel";

export default function Navbar({ dishes }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleProfile = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMyProfile = () => {
    navigate("/profile");
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsDropdownOpen(false);
    navigate("/");
  };

  // Debouncing logic:
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() === '') {
        setSuggestions([]);
        return;
      }

      // Filter logic
      const filtered = dishes.filter((dish) =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.cuisineType.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSuggestions(filtered);
    }, 400); // 400ms debounce

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, dishes]);

  return (
    <>
      <nav className="bg-gray-700 px-4 py-3 flex items-center justify-between">
        {/* Left - Sidebar & Logo */}
        <div className="flex items-center space-x-4">
          <button
            className="text-white hover:text-gray-300 transition-colors text-xl"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰
          </button>
          <a href="/" className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-lg">
            LOGO
          </a>
        </div>

        {/* Center - Search bar (only on / route) */}
        {location.pathname === "/" && (
          <div className="flex-1 max-w-md mx-4 relative">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by recipes, cuisine, category, tags..."
                className="w-full bg-white rounded-full px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-9 font-sans font-normal italic"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg fill="#000000" className='w-4 h-4' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.4 488.4"><path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path></svg>
              </div>
            </div>

            {/* Suggestions dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow max-h-60 overflow-y-auto">
                {suggestions.map((dish, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                    onClick={() => {
                      // For now, just put selected text into search box
                      setSearchTerm(dish.name);
                      setSuggestions([]);
                      // Optionally: navigate to dish page if you want
                      // navigate(`/dish/${dish.id}`)
                    }}
                  >
                    {dish.name} - {dish.category} - {dish.cuisineType}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Right - Profile */}
        <div className="relative flex items-center">
          <button
            className="w-10 h-10 rounded-full overflow-hidden border-cyan-500"
            onClick={handleProfile}
          >
            {user && user.image ? (
              <img src={user?.image} className='rounded-full' alt="User" />
            ) : (
              <div className="bg-cyan-500 text-white w-full h-full flex items-center justify-center font-semibold">
                U
              </div>
            )}
          </button>

          {isDropdownOpen && (
            <div className="absolute top-12 right-0 bg-white border shadow-md py-1 w-32">
              {user ? (
                <>
                  <button
                    onClick={handleMyProfile}
                    className="block w-full text-left px-4 py-1 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-1 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
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
                </>
              )}
            </div>
          )}

          {showRegister && (
            <RegisterModel
              onClose={() => {
                setShowRegister(false);
                const newUser = JSON.parse(localStorage.getItem("user"));
                if (newUser) setUser(newUser);
              }}
            />
          )}

          {showLogin && (
            <LoginModel
              onClose={() => {
                setShowLogin(false);
                const newUser = JSON.parse(localStorage.getItem("user"));
                if (newUser) setUser(newUser);
              }}
            />
          )}
        </div>
      </nav>

      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
}
