import React, { useState } from "react";
import logo from './images/Nav/NavL.png';
import Facebook from './images/Nav/F.png';
import InstaGram from './images/Nav/I.png';
import LinkedIn from './images/Nav/IN.png';
import Twitter from './images/Nav/X.png';
import YouTube from './images/Nav/Y.png';
import { Link } from "react-router-dom";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState({ Solutions: false, Products: false, Company: false });

    // Toggle function for dropdowns
    const toggleDropdown = (menu) => {
        setIsDropdownOpen((prev) => {
            const newDropdownState = { Solutions: false, Products: false, Company: false };
            newDropdownState[menu] = !prev[menu];
            return newDropdownState;
        });
    };

    // Submenu content for both mobile and desktop
    const submenuItems = {
        Solutions: [
            { name: 'News', link: '/news' },
            { name: 'Our Vision', link: '/ourvision' }
        ],
        Products: [
            { name: 'Portfolio', link: '/portfolio' },
            { name: 'Portfolio Details', link: '/portfoliodetails' }
        ],
        Company: [
            { name: 'Careers', link: '/careers' },
            { name: 'Contact Us', link: '/contactus' }

        ]
    };

    return (
        <>
            <nav className="w-full relative flex lg:justify-around lg:pt-10 pt-5 pl-5 lg:pl-0">
                {/* Logo Section */}
                <div className="flex-shrink-0 ">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>

                {/* Mobile Menu Icon */}
                <div
                    className="md:text-7xl text-6xl lg:hidden absolute top-[15%] right-3 block cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    &#8801;
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"} lg:hidden absolute top-16 left-0 right-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white z-20 p-6 transition-transform transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top`}
                >
                    <ul className="flex flex-col space-y-6">
                        {["Solutions", "Products", "Company"].map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer hover:text-blue-400 flex items-center relative"
                                onClick={() => toggleDropdown(item)}
                            >
                                {item}
                                <svg
                                    className="w-3 h-3 ml-2 transform transition-transform"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    style={{
                                        transform: isDropdownOpen[item] ? "rotate(180deg)" : "rotate(0deg)",
                                    }}
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                                </svg>
                                {/* Dropdown Menu for Mobile */}
                                {isDropdownOpen[item] && (
                                    <ul className=" absolute left-0 top-full mt-2 bg-gradient-to-br from-blue-50 to-blue-100 text-black shadow-lg p-4 space-y-2 rounded-lg transition-all duration-300 ease-in-out z-20">
                                        {submenuItems[item].map((submenu, index) => (
                                            <li key={index} className="cursor-pointer   hover:text-blue-600  transition-colors duration-200">
                                                <Link to={submenu.link}>{submenu.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Social Media Links for Mobile */}
                    <div className="flex justify-center space-x-4 mt-4">
                        <img className="cursor-pointer w-8 h-8" src={Facebook} alt="Facebook" />
                        <img className="cursor-pointer w-8 h-8" src={InstaGram} alt="Instagram" />
                        <img className="cursor-pointer w-8 h-8" src={LinkedIn} alt="LinkedIn" />
                        <img className="cursor-pointer w-8 h-8" src={Twitter} alt="Twitter" />
                        <img className="cursor-pointer w-8 h-8" src={YouTube} alt="YouTube" />
                    </div>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden lg:flex flex-row items-center text-2xl list-none space-x-6">
                    {["Solutions", "Products", "Company"].map((item) => (
                        <li
                            key={item}
                            className="relative group cursor-pointer hover:text-blue-600 flex items-center"
                            onClick={() => toggleDropdown(item)}
                        >
                            {item}
                            <svg
                                className="w-3 h-3 ml-2 inline-block transform transition-transform"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 5 10 6"
                                style={{
                                    transform: isDropdownOpen[item] ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                            </svg>
                            {/* Dropdown Menu for Desktop */}
                            {isDropdownOpen[item] && (
                                <ul style={{ width: "max-content" }} className="absolute left-0 top-full mt-2  bg-gradient-to-br from-blue-50 to-blue-100 text-black shadow-lg p-4 lg:p-8 space-y-3 rounded-lg duration-800 border-2 border-red-600 origin-top z-20">
                                    {submenuItems[item].map((submenu, index) => (
                                        <li key={index} className="cursor-pointer hover:bg-black hover:text-white px-8 py-2 text-center  font-sans   transition-colors duration-200">
                                            <Link to={submenu.link}>{submenu.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Social Media Links for Desktop */}
                <div className="lg:flex justify-center space-x-4  hidden">
                    <img className="cursor-pointer w-8 h-8" src={Facebook} alt="Facebook" />
                    <img className="cursor-pointer w-8 h-8" src={InstaGram} alt="Instagram" />
                    <img className="cursor-pointer w-8 h-8" src={LinkedIn} alt="LinkedIn" />
                    <img className="cursor-pointer w-8 h-8" src={Twitter} alt="Twitter" />
                    <img className="cursor-pointer w-8 h-8" src={YouTube} alt="YouTube" />
                </div>
            </nav>
        </>
    );
}
