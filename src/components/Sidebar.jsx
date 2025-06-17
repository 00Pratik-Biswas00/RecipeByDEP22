import React, {useState} from "react";
import { Link } from "react-router-dom";
import PreferencesModal from "../pages/PreferencesModal";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [showPreferences, setShowPreferences] = useState(false);

  if (!isSidebarOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className="relative w-70 bg-black h-full shadow-xl z-50 p-6 flex flex-col justify-center">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-xl text-white hover:text-grey absolute left-5 top-5"
          >
            ✕
          </button>
          {/* <span className="font-bold text-lg text-white text-right ml-4">LOGO</span> */}
        {/* <div className="flex justify-between items-center mb-6">
        </div> */}

        <ul className="space-y-4 font-normal text-white mt-3 p-6 ">
          <li className="border-b py-2 "><Link onClick={() => setIsSidebarOpen(false)} to="/add">SUBMIT YOUR RECIPE →</Link></li>
          <li className="border-b py-2"><Link onClick={() => setIsSidebarOpen(false)} to="/recipe">VIEW FAVORITES →</Link></li>
          <li className="border-b py-2"><Link onClick={() => setIsSidebarOpen(false)} to="/my-recipes">VIEW YOUR RECIPES →</Link></li>
          <li className="border-b py-2"><Link onClick={() => setIsSidebarOpen(false)} to="/recommended">RECOMMENDED RECIPES →</Link></li>
          <li className="border-b py-2">
            <button
              onClick={() => {
                setShowPreferences(true);
              }}
              // className="text-left w-full"
            >
              PREFERENCES →
            </button>
          </li>
        </ul>
      </div>

      {showPreferences && (
        <PreferencesModal
          onClose={() => {
            setShowPreferences(false);
            setIsSidebarOpen(false);
          }}
        />
      )}
    </div>
  );
}
