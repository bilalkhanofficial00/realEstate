// ContactUs.js
import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { HomeSec7 } from './homesec7';
import { HomeSec6 } from './homesec6';
import { HomeSec4 } from './homesec4';
import FC from './images/Careers/Rectangle 70.png'
import SC from './images/Careers/Rectangle 71.png'

import BG from './images/PortFolio/Group 39.png';
import { BreadcrumbC } from './breadcrumb';

export function Careers() {
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
          Careers
          </p>
          <BreadcrumbC />
        </div>
      </div>
      <div className='pb-16'>
      <HomeSec4/>
      </div>
      <div>
        <p className='font-sans lg:text-4xl md:text-2xl text-xl text-center pt-5 pb-16 font-semibold'>Job Openings</p>
      </div>
      <div className="container">
        <div className=' grid md:grid-cols-2 gap-8 gap-y-12 md:pb-16   grid-cols-1'>
             <div className='grid gap-y-3'>
                <img src={FC} alt="Not Available" className='object-cover object-center' />
                <p className='font-sans text-2xl text-center md:text-start font-semibold'>Unreal Engine Developer</p>
                <p className='font-sans text-lg  text-center md:text-start font-semibold '>About the role:</p>
                <p className='font-sans leading-tight  text-center md:text-start '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.<br></br> <br></br>
    
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br> <br></br>

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.<br></br> <br></br>

 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

             </div>


{/* SD */}



<div className='grid gap-y-3'>
                <img src={SC} alt="Not Available" className='object-cover object-center' />
                <p className='font-sans text-2xl  text-center md:text-start font-semibold'>3D Modeler</p>
                <p className='font-sans text-lg text-center  md:text-start font-semibold '>About Us:</p>
                <p className='font-sans leading-tight text-center  md:text-start '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.<br></br> <br></br>
    
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br> <br></br>

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.<br></br> <br></br>

 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

             </div>
        </div> 
      </div>
      {/* Pass showHeading={false} to hide the heading */}
      <div className='pb-20'>
      <HomeSec7/>
      </div>
      <HomeSec6/>     
      <Footer />
    </>
  );
}
