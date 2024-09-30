import React, { useState } from 'react';
import { Navbar } from './navbar';
import { BreadcrumbN } from './breadcrumb';
import BG from './images/PortFolio/Group 39.png';
import { data } from './newsapi';
import { SideBar } from './newssidebar';
import { HomeSec6 } from './homesec6';
import { Footer } from './footer';
import { ND_3DCS_RETURNS } from './NewsDetails/nd_3dcs_returns';
import { LookingAt } from './NewsDetails/lookingat_card';
import { CityScapes } from './NewsDetails/3dcityscapes';

export function News() {
  const [selectedCardId, setSelectedCardId] = useState(null); // State to track selected card ID
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to show the detailed view based on card ID
  const handleCardClick = (id) => {
    setSelectedCardId(id); // Set the selected card ID
  };

  // Function to render the appropriate detail component based on the card ID
const renderDetailComponent = () => {
  return (
    <div>
      {selectedCardId === 1 && <LookingAt />}
      {selectedCardId === 2 && <CityScapes />}
      {selectedCardId === 3 && <ND_3DCS_RETURNS />}
      {/* Add more cases for different card IDs */}

      {/* Back button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setSelectedCardId(null)} // Reset the selected card to go back
          className="flex items-center text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-600"
        >
          <span>&larr;</span> {/* Back arrow */}
          <span className="ml-2">Back to News</span>
        </button>
      </div>
    </div>
  );
};


  return (
    <>
      <Navbar />
      <div className="relative w-full h-auto">
        <img
          src={BG}
          alt="Not Available"
          className="object-cover object-center w-full h-[200px]"
        />
        <div className="absolute inset-0 flex flex-col pt-16 items-center justify-center">
          <p className="font-sans lg:text-[50px] text-[35px] text-center font-bold text-white">
            News
          </p>
          <BreadcrumbN />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="w-full  lg:w-1/4 mb-8  md:mb-20">
            <SideBar
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onPostClick={handleCardClick} // Pass the function to the sidebar
            />
          </div>

          {/* News Cards or Detail View */}
          <div className="w-full lg:w-3/4">
            {selectedCardId ? (
              renderDetailComponent() // Render the appropriate detail component
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-5 md:gap-14">
  {currentItems.map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={item.image}
        alt="Not Available"
        className="object-cover cursor-pointer object-center w-72 h-72"
        onClick={() => handleCardClick(item.id)} // Handle card click
      />
      <div className="flex justify-around w-72 py-2">
        <div className="flex items-center">
          <img src={item.D} alt="Not Available" />
          <span className="ml-2 text-sm">{item.Date}</span>
        </div>
        <div className="flex items-center">
          <img src={item.A} alt="Not Available" />
          <span className="ml-2 text-sm">{item.Admin}</span>
        </div>
      </div>
      <div className="py-4 w-72">
        <h3 className="font-sans leading-tight text-lg font-semibold text-left">
          {item.Heading}
        </h3>
      </div>
      <div className="pb-4 w-72">
        <p className="font-sans leading-tight text-sm text-left">
          {item.Descrption}
        </p>
      </div>
    </div>
  ))}
</div>

            )}
          </div>
        </div>

        {!selectedCardId && (
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-2 px-4 py-2 rounded ${
                  currentPage === index + 1 ? 'text-white' : 'border-white border-2 text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8">
        <HomeSec6 />
      </div>
      <Footer />
    </>
  );
}
