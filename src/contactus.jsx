// ContactUs.js
import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { HomeSec7 } from './homesec7';
import { HomeSec3 } from './homesec3';
import { HomeSec4 } from './homesec4';

import BG from './images/PortFolio/Group 39.png';
import { BreadcrumbCU } from './breadcrumb';
import C from './images/Contact Us/C.png'
import P from './images/Contact Us/P.png' 
import L from './images/Contact Us/L.png'

export function ContactUs() {
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
            Contact Us
          </p>
          <BreadcrumbCU />
        </div>
      </div>

      <p className='font-sans lg:text-4xl md:text-3xl text-2xl font-semibold text-center px-4 py-12'>
        Our digital experience specialists will answer your <br></br> questions and show you what we do.
      </p>
      
      {/* Pass showHeading={false} to hide the heading */}
      <HomeSec7 showHeading={false} />
      <div className="container">
        <div className=' lg:flex lg:justify-around grid gap-y-16 pt-28 pb-16 '>
            <div className=' flex flex-col justify-center items-center gap-y-2 text-center'>
            <img src={C} alt="Not Available" className='object-cover object-center' />
            <p className='font-sans text-2xl font-semibold'>Hours</p>
            <p className='font-sans text-lg '>Monday-Friday:</p>
            <p className='font-sans text-lg '>9:00 am - 6:00 pm EST</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-2 text-center'>
            <img src={P} alt="Not Available" className='object-cover object-center' /> 
            <p className='font-sans text-2xl font-semibold'>Contact Us</p>
            <p className='font-sans text-lg'>Phone: +1 416-477-6846 </p>
            <p className='font-sans text-lg'>Email: info@3dcityscapes.ca</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-2 text-center'>
            <img src={L} alt="Not Available" className='object-cover object-center' /> 
            <p className='font-sans text-2xl font-semibold'>Our Address</p>
            <p className='font-sans text-lg'>31 Scarsdale Road, Suite 7 </p>
            <p className='font-sans text-lg'>Toronto, ON M3B 2R2 Canada</p>
            </div>
        </div>
        
      </div>
      <div className='pb-16'>
      <HomeSec4/>
      </div>
      <div className='pb-10'>
        <HomeSec3 />
      </div>
      <Footer />
    </>
  );
}
