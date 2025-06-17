import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_CREDENTIALS = {
  email: "superadmin@gmail.com",
  password: "admin123",
};

const LoginModel = ({ onClose, setUserRole  }) => {
    const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // First: check for admin credentials
  if (formData.email === ADMIN_CREDENTIALS.email && formData.password === ADMIN_CREDENTIALS.password) {
    setUserRole("admin");
    localStorage.setItem("userRole", "admin");
    navigate("/admin");
    onClose();  // optional
    return;     // important: stop further checks
  }
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      alert("No registered user found!");
      return;
    }
    if (formData.email === storedUser.email && formData.password === storedUser.password) {
      alert("Login successful!");
      setUserRole("user");
      localStorage.setItem("userRole", "user");
      navigate("/");
      onClose();
    } else {
      alert("Invalid email or password!");
    }
  };

  
    

    

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-green-700 text-xl font-bold mb-6 text-left font-sans">LOGIN</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" className="border border-gray-800 px-3 py-2 rounded" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" className="border border-gray-800 px-3 py-2 rounded" onChange={handleChange} />

          <div className="text-right mt-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <div className="flex justify-center space-x-6 mt-4">
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">LOGIN</button>
            <button onClick={onClose} type="button" className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50">CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModel;
