import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { interiors, exteriors, city, urbanplaning } from './tabsapi';

export function TabsCards() {
  // State to manage the selected images set and active button
  const [currentImages, setCurrentImages] = useState(interiors); // Default to interiors
  const [activeButton, setActiveButton] = useState('Interiors'); // Default active button

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0',
        }
      }
    ]
  };

  // Function to handle button clicks and change the current images and active button
  const handleButtonClick = (images, buttonName) => {
    setCurrentImages(images);
    setActiveButton(buttonName); // Update active button
  };

  // Function to determine the button style based on whether it is active
  const getButtonStyle = (buttonName) => (
    buttonName === activeButton ? 'bg-[#585858]' : 'bg-[#434242]'
  );

  return (
    <>

      <div className="container">
        <div className="grid grid-cols-2 md:flex md:px-8 items-center justify-center gap-5 mt-16 lg:space-x-12 md:space-x-8">
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
      </div>
      <div className="slider-container relative pb-12 pt-16">
        <Slider {...settings}>
          {currentImages.map((item, index) => (
            <div key={index} className="flex justify-center cursor-pointer items-center w-full">
              <img src={item.I} alt={item.alt} className="object-cover lg:w-[350px] lg:h-[250px] w-[350px] h-[200px] md:w-[80%] md:h-[500px] mx-auto" />
            </div>
          ))}
        </Slider>
        <div className=" hidden lg:block absolute lg:left-[40%] lg:bottom-8 left-[100px] bottom-12 md:left-[33%] md:bottom-8 z-10 lg:py-[20px] lg:px-[35px] md:px-[17px] md:py-[30px] py-3 px-3 text-center text-[16px] md:text-[24px] lg:text-[20px] bg-[#585858] font-semibold">
          Broccolini-Leftbank</div>
      </div>
    </>
  );
}
