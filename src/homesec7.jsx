// HomeSec7.js
import React, { useState } from "react";
import R13 from './images/Home/Rectangle 13.png';

export function HomeSec7({ showHeading = true }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    website: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`My Name is ${formData.fullName}. My Email Address is ${formData.email} My Website is ${formData.website} My Phone Number is ${formData.phone}. . and my Message is..... ${formData.message}`);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      message: '',
      website: ''
    });
  };

  return (
    <>
      <div>
        {showHeading && (
          <p className="sans lg:text-5xl md:text-4xl text-3xl text-center pb-8 font-bold lg:mt-20 mt-12 lg:text-start lg:ml-8">
            Our Contact Details
          </p>
        )}
      </div>
      {/* Flex Container to Adjust Widths Dynamically */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[90%]">
        {/* Left Column: Contact Details and Image */}
        <div>
          <img
            src={R13}
            alt="Not Available"
            className="w-full object-center object-cover"
          />
        </div>

        {/* Right Column: Form */}
        <div className="bg-[#161616] py-5 px-10">
          <div className="rounded-lg shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <p className="sans text-4xl text-white mb-6">Send a Message</p>

              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="fullName" className="block text-white mb-2">
                    Name
                    <span className="pl-1 text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="bg-[#585858] text-white w-full p-2 rounded"
                    required
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                    <span className="pl-1 text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#585858] text-white w-full p-2 rounded"
                    required
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="relative">
                <label htmlFor="website" className="block text-white mb-2">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your website"
                  className="bg-[#585858] text-white w-full p-2 rounded"
                />
              </div>

              {/* Third Row */}
              <div className="relative">
                <label htmlFor="phone" className="block text-white mb-2">
                  Phone
                  <span className="pl-1 text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your phone number"
                  className="bg-[#585858] text-white w-full p-2 rounded"
                  required
                />
              </div>

              {/* Message Dialog */}
              <div className="relative">
                <label htmlFor="message" className="block text-white mb-2">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="bg-[#585858] text-white w-full p-2 rounded"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#585858] text-white px-6 py-2 rounded hover:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
