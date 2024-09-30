import React from "react";
import Group11 from './images/Home/Partners/Group 11.png';
import Group12 from './images/Home/Partners/Group 12.png';
import Group13 from './images/Home/Partners/Group 13.png';
import Group14 from './images/Home/Partners/Group 14.png';
import Group15 from './images/Home/Partners/Group 15.png';
import Group16 from './images/Home/Partners/Group 16.png';

export function HomeSec6() {
  return (
    <>
   
      <div className="mt-18">
        <div>
          <p className="text-center font-sans md:text-5xl text-4xl font-bold">Our partners</p>
        </div>
        
        <div className="bg-[#161616]"> 
          <div className="container">
          <div className="grid grid-cols-2 lg:flex  lg:space-x-10 lg:justify-center gap-y-10 justify-items-center w-full py-[55px] text-[#FFFFFF] mt-10">
          <img src={Group11} alt="Not Available" className="lg:max-w-xs lg:max-h-10 max-w-[150px] max-h-[150px] md:max-w-[384px] md:max-h-[384px] object-contain" />
          <img src={Group12} alt="Not Available" className="lg:max-w-lg lg:max-h-10 max-w-[150px] max-h-[150px] md:max-w-[384px] md:mr-8 md:max-h-[384px] object-contain" />
          <img src={Group13} alt="Not Available" className="lg:max-w-lg lg:max-h-10 max-w-[150px] max-h-[150px] md:max-w-[384px] md:max-h-[384px] object-contain" />
          <img src={Group14} alt="Not Available" className="lg:max-w-lg lg:max-h-10 max-w-[150px] max-h-[150px] md:max-w-[384px] md:max-h-[384px] object-contain" />
          <img src={Group15} alt="Not Available" className="lg:max-w-lg lg:max-h-10 max-w-[150px] max-h-[150px] md:max-w-[384px] md:max-h-[384px] object-contain" />
          <img src={Group16} alt="Not Available" className="lg:max-w-lg lg:max-h-10 max-w-[150px] max-h-[150px] md:max-w-[384px] md:max-h-[384px] object-contain" />
        </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
