import React from "react";

const LoginModel=({ onClose })=>{
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        <h2 className="text-green-700 text-xl font-bold mb-6 text-left font-sans">LOGIN</h2>
        
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Username" className="border px-3 py-2 rounded col-span-1" />
          <input type="email" placeholder="Email id" className="border px-3 py-2 rounded col-span-1" />
          <div className="flex flex-col gap-4">
          <input type="password" placeholder="Password" className="border px-3 py-2 rounded col-span-1" />
            <div className="text-right mt-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
            </a>
            </div>
            </div>


          <div className="col-span-2 flex justify-center space-x-6 mt-4">
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
              LOGIN
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

export default LoginModel;