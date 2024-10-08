import React, { useState } from 'react';
import { interiors, exteriors, city, urbanplaning } from './tabsapi';
import { Navbar } from './navbar';
import { HomeSec6 } from './homesec6';
import { Footer } from './footer';
import BG from './images/PortFolio/Group 39.png';
import { Breadcrumb } from './breadcrumb'; // Import the Breadcrumb component

export function PortFolio() {
  const [currentImages, setCurrentImages] = useState([...interiors, ...exteriors, ...city, ...urbanplaning]); // Default to interiors
  const [activeButton, setActiveButton] = useState('Show All'); // Default active button
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  // Function to handle button clicks and change the current images and active button
  const handleButtonClick = (images, buttonName) => {
    setCurrentImages(images);
    setActiveButton(buttonName); // Update active button
  };

  // Function to determine the button style based on whether it is active
  const getButtonStyle = (buttonName) => (
    buttonName === activeButton ? 'bg-[#585858]' : 'bg-[#434242]'
  );

  // Handle view button click
  const handleViewClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full h-auto">
        {/* Background Image */}
        <img src={BG} alt="Not Available" className="object-cover object-center w-full h-[200px]" />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-sans text-[40px] md:text-[text-50px] text-center font-bold text-white">Portfolio</p>
          <Breadcrumb /> {/* Insert Breadcrumb component */}
        </div>
      </div>

      <div className="container md:mt-16 mt-4">
        <div className="grid grid-cols-2 md:flex items-center justify-center gap-5 lg:space-x-12 md:space-x-8 mb-12">
          <button
            onClick={() => handleButtonClick([...interiors, ...exteriors, ...city, ...urbanplaning], 'Show All')}
            className={`font-sans text-xl font-semibold cursor-pointer ${getButtonStyle('Show All')} py-[5px] px-[10px] shadow-xl rounded-md`}
          >
            Show All
          </button>
          <button
            onClick={() => handleButtonClick(city, 'City')}
            className={`font-sans text-xl font-semibold cursor-pointer ${getButtonStyle('City')} py-[5px] px-[10px] shadow-xl rounded-md`}
          >
            City
          </button>
          <button
            onClick={() => handleButtonClick(exteriors, 'Exteriors')}
            className={`font-sans text-xl font-semibold cursor-pointer ${getButtonStyle('Exteriors')} py-[5px] px-[10px] shadow-xl rounded-md`}
          >
            Exteriors
          </button>
          <button
            onClick={() => handleButtonClick(interiors, 'Interiors')}
            className={`font-sans text-xl font-semibold cursor-pointer ${getButtonStyle('Interiors')} py-[5px] px-[10px] shadow-xl rounded-md`}
          >
            Interiors
          </button>
          <button
            onClick={() => handleButtonClick(urbanplaning, 'Urban Planning')}
            className={`font-sans text-xl font-semibold cursor-pointer ${getButtonStyle('Urban Planning')} py-[5px] px-[10px] shadow-xl rounded-md`}
          >
            Urban Planning
          </button>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentImages.map((item, index) => (
            <div key={index} className="relative group p-4">
              <img
                src={item.I}
                alt={item.alt}
                className="w-full h-[200px] object-cover rounded-md border-none"

              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-md font-bold mb-2">ROCKPORT – THE DAVISVILLE</p>
                <p className="text-white text-sm mb-4">In City, Exteriors, Interiors</p>
                <button
                  onClick={() => handleViewClick(item.I)}
                  className="bg-[#1F2023] text-white px-4 py-2 rounded-md"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen View Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img src={selectedImage} alt="Fullscreen" className="max-w-full max-h-full object-cover object-center" />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}

      <div className="flex justify-center items-center mt-16 md:mb-24 mb-20">
        <button className="uppercase py-3 px-6 font-sans lg:py-4 lg:px-8 bg-[#0C0C0C] text-[#FFFFFF] border-2 border-white hover:bg-blue-400 transition-colors duration-300">
          SCHEDULE A DEMO
        </button>
      </div>
      <HomeSec6 />
      <Footer />
    </>
  );
}
