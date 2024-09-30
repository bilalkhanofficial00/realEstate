import React from "react";
import LP from '../images/Detail News/3DCS Returns card/Rectangle 65.png';
import SP1 from '../images/Detail News/3DCS Returns card/Rectangle 28.png';
import SP2 from '../images/Detail News/3DCS Returns card/Rectangle 29.png';
import SP3 from '../images/Detail News/3DCS Returns card/Rectangle 30.png';
import { data } from "../newsapi";
import V1 from '../images/Home/HomeV1.mp4';

export function CityScapes() {
    const item = data[1];
  return (
    <>
      <div className="container">
        <div className="font-sans text-3xl text-start leading-tight py-8 font-semibold">
        3D CityScapes Goes Back-To-Back With Vandyk Properties
        </div>
        <p className="font-sans text-lg font-semibold leading-tight text-start">
        3D CityScapes To Support NTRY, First Global Metaverse Real Estate Marketplace The team was on hand for the proptech's brand…
        </p>
        
            {/* Displaying details for a specific item */}
            <div className="flex flex-col py-5 items-start">
          <div className="flex space-x-8 w-72 py-2">
            <div className="flex items-center">
              <img src={item.D} alt="Date Icon" />
              <span className="ml-2 text-sm">{item.Date}</span> {/* Use item.date */}
            </div>
            <div className="flex items-center">
              <img src={item.A} alt="Admin Icon" />
              <span className="ml-2 text-sm">{item.Admin}</span> {/* Use item.admin */}
            </div>
          </div>
        </div>

        <div className="w-full h-auto md:shrink-0 pb-8">
          <img src={LP} alt="Not Available" className="object-cover object-center" />
        </div>
        <div className="leading-tight font-sans text-lg py-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          <br /><br />
          Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages...
        </div>
        <div className="grid grid-cols-3 gap-8 w-full h-full py-8 md:shrink-0">
          <img src={SP1} alt="Not Available" className="object-cover object-center" />
          <img src={SP2} alt="Not Available" className="object-cover object-center" />
          <img src={SP3} alt="Not Available" className="object-cover object-center" />
        </div>
        <div className="leading-tight font-sans text-lg py-8">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...
          <br /><br />
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
        </div>
        {/* Video Embed Section */}
        <div className="w-full flex flex-wrap justify-center py-8 items-center ">
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <video
              className="absolute inset-0 w-full h-full"
              autoPlay
              muted
              loop
              preload="auto"
              poster="your-video-poster.jpg"
            >
              <source src={V1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
