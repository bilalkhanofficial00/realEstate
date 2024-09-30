import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { HomeSec6 } from './homesec6';
import BG from './images/PortFolio/Group 39.png';
import {BreadcrumbPD}  from './breadcrumb'// Import the Breadcrumb component
import V1 from './images/Home/HomeV1.mp4';

export function PortfolioDetails () {
 

  return (
    <>
      <Navbar />
      <div className="relative w-full h-auto">
        {/* Background Image */}
        <img src={BG} alt="Not Available" className="object-cover object-center w-full h-[200px]" />
        
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col pt-16 items-center justify-center">
          <p className="font-sans lg:text-[50px] text-[35px] text-center font-bold text-white">SUNRISE GATE HOMES</p>
          <BreadcrumbPD /> {/* Insert Breadcrumb component */}
        </div>
      </div>
      <div>
        <div className="container">
            <div className="text-center pt-16">
              
                <p className="sans text-3xl font-bold pb-10 ">SUNRISE GATE HOMES - TERRASSE AT THE HUNT CLUB</p>
            </div>
             {/* Video Embed Section */}
             <div className="w-full flex flex-wrap justify-center items-center ">
                    <div className="relative w-full aspect-w-16 aspect-h-9">
                        <video
                            className="absolute inset-0 w-full h-full"
                            autoPlay
                            muted
                            loop
                            preload="auto"
                            poster="your-video-poster.jpg">
                            <source src={V1} type="video/mp4" />
                           
                        </video>
                    </div>
                    </div>
                    <div className='pt-12 pb-20 text-center'>
                      <p className='font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
        </div>
        </div>
     
      <HomeSec6 />
      <Footer />
    </>
  );
}
