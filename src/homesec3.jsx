import React from 'react';
import Testimonial from './images/Home/Testimonials.png'
import { HorizontalCard} from './testimonialcard'


export function HomeSec3() {



  return (
    <div className="bg-[#161616]  p-8 md:p-10 lg:px-[64px] lg:pb-[15px]  lg:pt-[50px]">
      <div className="text-center space-y-2 lg:space-y-0">
        <p className="sans text-xl md:2xl lg:text-3xl font-semibold text-[#FFFFFF]">Feedback From Visitors</p>
        <img src={Testimonial} alt="Not Available" className="object-cover object-center w-[50%] mx-auto" />
      </div>
      <HorizontalCard/>
       </div>

)}
