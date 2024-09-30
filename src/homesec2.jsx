import React from "react";
import I5 from './images/Home/image 5.png';
import Group from './images/Home/Group 6.png';
import I6 from './images/Home/image 6.png';

export function HomeSec2() {
    return (
        <>
            <div className="w-full flex flex-wrap mb-8 md:mb-12 lg:mb-24 items-center justify-center lg:flex-row">
                {/* Left Section with Images */}
                <div className="relative w-full lg:w-[60%] h-[670px] flex items-center justify-center">
                    {/* I5 Image */}
                    <img 
                        src={I5} 
                        alt="I5" 
                        className="absolute left-0 bottom-0 w-[60%] h-[630px] object-cover object-center z-0"
                    />
                    {/* I6 Image */}
                    <img 
                        src={I6} 
                        alt="I6" 
                        className="absolute right-0 lg:top-[35%] bottom-0 md:w-[55%] w-[48%] h-[468px] object-cover object-center lg:w-[57%] z-20"
                    />
                    {/* Group Image */}
                    <div className="absolute right-[10%] md:w-[200px] md:right-[20%] z-30 top-[14%] w-[150px] lg:top-[20%] lg:right-[30%] lg:w-[150px]">
                        <img 
                            src={Group} 
                            alt="Group" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Right Section with Text Content */}
                <div className="w-full lg:w-[40%] p-6 flex flex-col md:pt-12   justify-center text-center lg:text-start">
                    <p className="font-semibold text-white text-3xl font-sans lg:text-5xl pb-8 leading-snug">
                        Delivering high quality projects and innovative<br /> design solutions for your dream projects
                    </p>
                    <p className="text-white text-base font-sans lg:text-lg">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                </div>
            </div>
        </>
    );
}
