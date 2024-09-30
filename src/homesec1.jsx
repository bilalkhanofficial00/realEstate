import React from "react";
import V1 from './images/Home/HomeV1.mp4';

export function HomeSec1() {
    return (

        <>
            <div className="w-full flex flex-wrap justify-center items-center   space-y-12">
                {/* Text and Button Section */}
                <div className="w-full lg:w-[40%] flex flex-wrap flex-col items-center lg:items-start justify-center pt-10 md:pt-12 px-4 lg:pl-20 space-y-6">
                    <p className="text-2xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-bold font-sans text-center lg:text-left">
                        A DIGITAL <br className="hidden lg:block " /> EXPERIENCE
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg md:text-2xl font-sans text-[#FFFFFF] text-center lg:text-left">
                        3D CityScapes creates immersive interactive <br />
                        visualization platforms designed for property <br />
                        developers, urban planners, cities, and <br />
                        authorities available anywhere, on any device.
                    </p>
                    <button className="uppercase py-3 px-6 font-sans lg:py-4 lg:px-8 bg-[#0C0C0C] text-[#FFFFFF] border-2 border-white hover:bg-blue-400 transition-colors duration-300">
                        Talk to an Expert
                    </button>
                </div>

                {/* Video Embed Section */}
                <div className="w-full lg:w-[60%] flex flex-wrap justify-center items-center ">
                    <div className="relative w-full aspect-w-16 aspect-h-9">
                        <video
                            className="absolute top-0 left-0 right-0 w-full h-full"
                            autoPlay
                            muted
                            loop
                            preload="auto"
                            poster="your-video-poster.jpg">
                            <source src={V1} type="video/mp4" />
                           
                        </video>
                    </div>
                </div>
            </div>
            
        </>
    );
}