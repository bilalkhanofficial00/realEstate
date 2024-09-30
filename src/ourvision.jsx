import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { HomeSec3 } from './homesec3';
import { OurVisionCards } from './ourvisioncards';
import BG from './images/PortFolio/Group 39.png';
import { BreadcrumbOV } from './breadcrumb'; // Import the Breadcrumb component
import I6 from './images/Home/image 6.png';
import I5 from './images/Home/image 5.png';

export function OurVision() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-auto">
        {/* Background Image */}
        <img
          src={BG}
          alt="Not Available"
          className="object-cover object-center w-full h-[200px]"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col pt-16 items-center justify-center">
          <p className="font-sans lg:text-[50px] text-[35px] text-center font-bold text-white">
            Our Vision
          </p>
          <BreadcrumbOV /> {/* Insert Breadcrumb component */}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16 lg:pb-5 px-4 md:px-8">
  {/* Text Section */}
  <div className='relative w-full p-4 md:p-8 lg:p-10'>
    <p className='py-5 font-sans text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#FFFFFF]'>Our Vision</p>
    <p className='font-sans text-base md:text-lg lg:text-xl leading-relaxed'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
      <br /><br />
      Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <br /><br />
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
    </p>
  </div>

  {/* Images Section */}
  <div className="relative w-full flex items-center justify-center">
    {/* I5 Image */}
    <img
      src={I5}
      alt="I5"
      className="relative w-full h-auto md:w-[80%] lg:w-[90%] object-cover object-center"
    />
    {/* I6 Image */}
    <img
      src={I6}
      alt="I6"
      className="absolute lg:top-[70%] lg:left-[60%] top-[65%] right-0 transform -translate-y-1/2 w-[60%] md:w-[50%] lg:w-[45%] object-cover object-center"
    />
  </div>
</div>

      <div className='pb-10'> {/* Reduced bottom padding */}
        <HomeSec3 />
      </div>
      <div>
        <p className='pb-5 pt-5 font-sans lg:text-[40px] text-[25px] text-center font-bold text-[#FFFFFF]'>Our Story</p> {/* Reduced bottom padding */}
        <p className='font-sans text-lg text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>

      <OurVisionCards />
      
      <Footer />
    
    </>
  );
}
