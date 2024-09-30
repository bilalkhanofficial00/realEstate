import React from "react";
import V1 from './images/Home/HomeV1.mp4';


 export function HomeSec4() {

    return(
        <>
        <div>
            <div className="text-center pt-12 md:pt-14 lg:pt-20">
                <p className="sans text-4xl md:text-5xl font-bold pb-5">3DCS Degital brochure</p>
                <p className="sans text-lg pb-10 px-4 ">Learn more about 3D CityScapes products, services, use cases, and more.</p>
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
        </div>
        </>
    )
    
};