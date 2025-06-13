import React from "react";

const RegisterModel = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        <h2 className="text-green-700 text-xl font-bold mb-6 text-left font-sans">REGISTRATION</h2>
        
        <form className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First name" className="border px-3 py-2 rounded col-span-1" />
          <input type="text" placeholder="Last name" className="border px-3 py-2 rounded col-span-1" />

          <input type="email" placeholder="Email id" className="border px-3 py-2 rounded col-span-2" />

          <select className="border px-3 py-2 rounded col-span-1">
            <option>Country</option>
          </select>
          <select className="border px-3 py-2 rounded col-span-1">
            <option>Region</option>
          </select>

          <input type="password" placeholder="Password" className="border px-3 py-2 rounded col-span-1" />
          <input type="password" placeholder="Confirm Password" className="border px-3 py-2 rounded col-span-1" />

          <div className="col-span-2 flex items-center space-x-2">
            <label htmlFor="uploadImage" className="text-sm">Upload Image</label>
            <input type="file" id="uploadImage" className="hidden" />
            <label htmlFor="uploadImage" className="cursor-pointer text-blue-700 text-lg">
              ⬆️
            </label>
          </div>

          <div className="col-span-2 flex justify-center space-x-6 mt-4">
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
              REGISTER
            </button>
            <button onClick={onClose} type="button" className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModel;
