import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { data } from './Testimonialapi';

export function HorizontalCard() {
  const settings = {
    dots: false,
    arrows: false, // Disable the arrows here
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default to 3 slides on large screens
    slidesToScroll: 1,
    centerMode: true, // Enable center mode to center slides
    centerPadding: '0', // Remove padding to ensure centering
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds (3000 ms)
    pauseOnHover: true, // Pause the slider on hover
    responsive: [
      {
        breakpoint: 1024, // Medium screens and below
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          centerMode: true, // Center the single slide
          centerPadding: '0', // Remove padding to ensure centering
        }
      },
      {
        breakpoint: 768, // Small screens (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          centerMode: true, // Center the single slide
          centerPadding: '0', // Remove padding to ensure the image is centered
        }
      }
    ]
  };

  return (
    <div className="slider-container pb-12 pt-10">
      <Slider {...settings}>
        {/* Loop over the interiors array to render each image */}
        {data.map((item, index) => (
          <div className='container' key={index}>
            <div className="w-full mt-12 cursor-pointer ">
              <div className="card md:flex relative"> {/* Added relative positioning here */}
                <img
                  src={item.image}
                  alt="Not Available"
                  className="p-5 ml-10 md:w-52 md:h-52 w-44 h-44 object-cover object-center"
                />
                <div className="lg:ml-[60px] md:ml-[35px]">
                  <img
                    src={item.Group}
                    alt="Not Available"
                    className="absolute lg:left-[22%] left-[8%] md:left-[34%] md:top-[10%] top-[29%]" // Adjusted position
                  />
                  <p className="Work Sans md:text-3xl text-2xl font-bold py-5 md:pb-5 ml-5 pt-12">{item.title}</p>
                  <p className="Work Sans text-sm pb-3 ml-5">{item.description}</p>
                  <p className="Work Sans text-lg font-bold ml-5">{item.subheading1}</p>
                  <p className="Work Sans text-lg font-bold ml-5 pb-5">{item.subheading2}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
