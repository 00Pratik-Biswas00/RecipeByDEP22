import React, { useState } from "react";

const RegisterModel = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    region: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    setFormData({ ...formData, image: reader.result });
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create user object to store
    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      country: formData.country,
      region: formData.region,
      password: formData.password,
      image: formData.image,
    };

    // Store in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userRole", "user");
    alert("User Registered Successfully!");

    onClose(); // close modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        <h2 className="text-green-700 text-xl font-bold mb-6 text-left font-sans">REGISTRATION</h2>
        
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="border border-gray-800 px-3 py-2 rounded col-span-1"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="border border-gray-800 px-3 py-2 rounded col-span-1"
            value={formData.lastName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border border-gray-800 px-3 py-2 rounded col-span-2 w-[48.5%]"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="country"
            className="border border-gray-800 px-3 py-2 rounded col-span-1"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Country</option>
            <option>India</option>
            <option>Russia</option>
            <option>USA</option>
          </select>

          <select
            name="region"
            className="border border-gray-800 px-3 py-2 rounded col-span-1"
            value={formData.region}
            onChange={handleChange}
          >
            <option value="">Region</option>
            <option>Northern</option>
            <option>Central</option>
            <option>Southern</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-800 px-3 py-2 rounded col-span-1"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="border border-gray-800 px-3 py-2 rounded col-span-1"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div className="col-span-2 flex items-center space-x-2">
            <label htmlFor="uploadImage" className="text-sm">Upload Image</label>
            <input
              type="file"
              id="uploadImage"
              name="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label htmlFor="uploadImage" className="cursor-pointer text-blue-700 text-lg">
              ⬆️
            </label>
            {formData.image && <span className="text-sm">{formData.image.name}</span>}
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
