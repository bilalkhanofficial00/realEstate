import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from './home';
import { PortFolio } from "./portfolio";
import { PortfolioDetails } from "./portfoliodetails";
import { OurVision } from "./ourvision";
import { ContactUs } from "./contactus";
import { Careers } from "./careers";
import { News } from "./news";
// import { ND_3DCS_RETURNS } from "./NewsDetails/nd_3dcs_returns";

function App() {
  // Correctly defined NotFound component with navigation
  const NotFound = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle navigation back to home
    const handleGoHome = () => {
      navigate("/"); // Navigate to the home page
    };

    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
        <p className="text-red-800 font-bold text-5xl text-center mb-4">
          Page___Not__Found__404
        </p>
        {/* Button to navigate back to home */}
        <button
          onClick={handleGoHome} 
          className="bg-blue-500 mt-28 text-center text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          
          Go Back to Home
        </button>
       
      </div>
    
    );
  };

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/portfoliodetails" element={<PortfolioDetails/>} />
          <Route path="/ourvision" element={<OurVision/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/news" element={<News/>} />
          {/* <Route path="/3dcs" element={<ND_3DCS_RETURNS/>} /> */}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
