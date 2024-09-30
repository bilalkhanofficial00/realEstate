import React from "react";
import Foooter from './images/Nav/NavL.png'
import Loc from './images/Footer/u_location-point.png'
import Pho from './images/Footer/u_phone-alt.png'
import Mai from './images/Footer/fi_mail.png'
import F from './images/Footer/Facebook (1).png'
import T from './images/Footer/Twitter (2).png'
import Y from './images/Footer/YouTube.png'
import I from './images/Footer/LinkedIn.png'
import InS from './images/Footer/Instagram.png'

export function Footer() {
  return (
    <>
      <div className="container"> {/* Flex container to center content */}
        <div className="lg:flex justify-center items-center">
          <div className="lg:grid lg:grid-cols-3 grid-cols-1 space-y-8 lg:gap-20 pt-10 lg:text-start lg:place-items-start text-center place-items-center"> {/* Center items inside the grid */}
            <div className=" lg:mt-9 lg:text-start lg:items-start text-center"> {/* Center individual grid content */}
              <img src={Foooter} alt="Not Available" className="pb-5 lg:mx-0 mx-auto" /> {/* Use mx-auto to center the image */}
              <p className="sans text-xl font-semibold pb-3">A New Era of Exploration.</p>
              <p className="sans md:px-5 lg:px-0  text-sm">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
            </div>
            <div className=" lg:text-start text-center"> {/* Center individual grid content */}
              <p className="sans text-2xl font-semibold pb-3">CONTACT</p>
              <div className="grid gap-1">
                <div className="flex gap-2 lg:items-start lg:justify-start items-center justify-center"> {/* Center flex content */}
                  <img src={Loc} alt="Not Available" />
                  <p className="sans text-sm lg:items-start lg:justify-start ">31 Scarsdale Road, #7, Toronto ON M3B 2R2</p>
                </div>
                <div className="flex gap-2 items-center justify-center lg:items-start lg:justify-start "> {/* Center flex content */}
                  <img src={Pho} alt="Not Available" />
                  <p className="sans text-sm">+1 416-477-6846</p>
                </div>
                <div className="flex gap-2 items-center justify-center lg:items-start lg:justify-start "> {/* Center flex content */}
                  <img src={Mai} alt="Not Available" />
                  <p className="sans text-sm">info@3dcityscapes.ca</p>
                </div>
              </div>
              <p className="sans text-2xl font-semibold py-4">FOLLOW US</p>
              <span className="flex flex-wrap lg:justify-start justify-center space-x-3"> {/* Center icons */}
                <img src={F} alt="Not Available" className="cursor-pointer bg-[#434242] p-2 rounded-full" />
                <img src={T} alt="Not Available" className="cursor-pointer bg-[#434242] p-2 rounded-full" />
                <img src={Y} alt="Not Available" className="cursor-pointer bg-[#434242] p-2 rounded-full" />
                <img src={I} alt="Not Available" className="cursor-pointer bg-[#434242] p-2 rounded-full" />
                <img src={InS} alt="Not Available" className="cursor-pointer bg-[#434242] p-2 rounded-full" />
              </span>
            </div>
            <div className="flex flex-col gap-3 lg:items-start lg:text-start lg:justify-start items-center text-center"> {/* Center grid content */}
              <p className="sans text-2xl font-semibold pb-3">SUBSCRIBE</p>
              <p className="sans text-sm">We will send you updates on new products and discounts.</p>
              <div>
                <div className="relative">
                  <input className="bg-[#434242] pl-8 h-10 w-64" placeholder="Email" type="text" id="" />
                  <div className="absolute left-2 top-[12px]">
                    <img src={Mai} alt="Not Available" />
                  </div>
                </div>
              </div>
              <p className="Poppins text-center lg:px-[30%] lg:pt-5 font-semibold text-lg">Subscribe</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black p-4 mt-8 ">
        <div className="container">
          <div className="  lg:flex flex-wrap text-center space-y-5 lg:space-y-0  justify-between mt-5">
            <div>
              <p className="text-xl font-sans">metaworldx . Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className=" flex   gap-5 list-none lg:px-0 md:px-[30%] ">

              <li className="cursor-pointer text-xl font-sans ">Solutions</li>
              <li className="cursor-pointer text-xl font-sans ">Products</li>
              <li className="cursor-pointer text-xl font-sans ">Company</li>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}