import React from 'react';
import { data } from './newsapi'; // Import the news data
import F from './images/Footer/Facebook (1).png';
import T from './images/Footer/Twitter (2).png';
import I from './images/Footer/Instagram.png';

export function SideBar({ currentPage, itemsPerPage, onPostClick }) {
  const sortedData = [...data];

  // Get the latest 4 posts
  const latestPosts = sortedData.slice(0, 4);

 

  // Calculate the gallery items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const galleryItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="w-full  md:flex md:flex-col md:justify-center md:items-center lg:items-start lg:justify-start lg:w-64 px-4 pb-4">
        {/* Search */}
        <h3 className="font-semibold text-lg lg:text-start text-center  text-white md:text-xl mb-4">Search</h3>
        <div className="border-b-2 border-[#434242]"></div>
        <div className="py-5">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-[#434242] w-full p-3 font-sans"
          />
        </div>

        {/* Recent Posts */}
        <div className="pt-10">
          <h3 className="font-semibold text-lg text-white md:text-center lg:text-start font-sans mb-4">Recent Posts</h3>
          <div className="border-b-2 border-[#434242]"></div>
          <div className="pt-5">
            {latestPosts.map((post, index) => (
              <div
                key={index}
                className="flex items-center mb-4"
                onClick={() => onPostClick(post.id)} // Trigger the post click handler
              >
                {/* Image */}
                <div className="w-20 lg:w-20 lg:h-20 md:w-28 md:h-28 cursor-pointer h-20 flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.Heading} // Use a descriptive text based on the post heading
                    className="w-full h-full object-center object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 pl-4">
                  <h4 className="font-sans text-sm pb-1 leading-tight text-white font-semibold">
                    {post.Heading}
                  </h4>
                  <p className="text-xs text-white">{post.Date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="pt-10 hidden lg:block">
          <h3 className="font-semibold text-lg md:text-xl text-white mb-4">Categories</h3>
          <div className="border-b-2 border-[#434242]"></div>
          <div className="list-none space-y-5">
            <li className="pt-5">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  className="appearance-none w-4 h-4 bg-[#434242] border-2 border-gray-300 cursor-pointer checked:bg-white focus:outline-none"
                />


                <span>Blog</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  className="appearance-none w-4 h-4 bg-[#434242] border-2 border-gray-300 cursor-pointer checked:bg-white focus:outline-none"
                />
                <span>Press</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  className="appearance-none w-4 h-4 bg-[#434242] border-2 border-gray-300 cursor-pointer checked:bg-white focus:outline-none"
                />
                <span>Podcast</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  className="appearance-none w-4 h-4 bg-[#434242] border-2 border-gray-300 cursor-pointer checked:bg-white focus:outline-none"
                />
                <span>Sweets bakery</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  className="appearance-none w-4 h-4 bg-[#434242] border-2 border-gray-300 cursor-pointer checked:bg-white focus:outline-none"
                />
                <span>Runway</span>
              </label>
            </li>
          </div>
        </div>

        {/* Gallery */}
        <div className="pt-10">
          <h3 className="font-semibold text-lg md:text-center lg:text-start  md:text-xl text-white mb-4">Gallery</h3>
          <div className="border-b-2 border-[#434242]"></div>

          {/* Gallery Grid */}
          <div className="grid  grid-cols-3  md:gap-x-12   gap-y-3 mt-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="w-20 h-20 lg:w-20 lg:h-20 md:w-28 md:h-28 ">
                <img
                  src={item.image}
                  alt={`Gallery ${index + 1}`} // Use a descriptive text like "Gallery X"
                  className="object-cover object-center w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12">
          <h3 className="font-semibold text-lg md:text-xl lg:text-start text-center text-white mb-4">Follow Us</h3>
          <div className="border-b-2 border-[#434242]"></div>
          <div className="flex flex-wrap space-x-5 pt-5 items-center justify-center">
            <img src={F} alt="Facebook" className="cursor-pointer bg-[#434242] p-4 rounded-full" />
            <img src={T} alt="Twitter" className="cursor-pointer bg-[#434242] p-4 rounded-full" />
            <img src={I} alt="Instagram" className="cursor-pointer bg-[#434242] p-4 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}
