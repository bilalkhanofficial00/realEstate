import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import I1 from './images/OurVision/1.png';
import I2 from './images/OurVision/2.png';
import I3 from './images/OurVision/3.png';
import I4 from './images/OurVision/4.png';

export function OurVisionCards() {
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
    arrows: false,
    pauseOnHover: true,
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

  return (
    <div className="container">
      <div className="slider-container  pt-12">
        <Slider {...settings}>
          {OurVisionApi.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-full flex justify-center items-center px-4 cursor-pointer"
            >
              <div className="group relative w-full h-full">
                <img
                  src={item.I}
                  alt={item.alt}
                  className="object-cover w-full h-full"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex lg:pt-48 md:pt-[450px] pt-40 flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-in-out text-center px-4 md:px-8">
                    <p className="text-white font-bold text-lg md:text-2xl lg:text-xl">{item.title}</p>
                    <p className="text-white text-md md:text-xl lg:text-lg">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export const OurVisionApi = [
  { id: 1, I: I1, alt: 'Picture 1', title: 'Secretary 1', subtitle: 'Denny' },
  { id: 2, I: I2, alt: 'Picture 2', title: 'President & CEO', subtitle: 'Devon Lane' },
  { id: 3, I: I3, alt: 'Picture 3', title: 'Secretary 2', subtitle: 'Sara' },
  { id: 4, I: I4, alt: 'Picture 4', title: 'Secretary 3', subtitle: 'Jackson' },
];
