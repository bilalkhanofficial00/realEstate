// Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="my-4">
      <ol className="flex space-x-2 text-sm text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600 text-white ">Home</Link>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li>
          <span className="text-white">Portfolio</span>
        </li>
      </ol>
    </nav>
  );
};

const BreadcrumbPD = () => {
  return (
    <nav aria-label="breadcrumb" className="my-4">
      <ol className="flex space-x-2 text-sm text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600 text-white ">Home</Link>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li>
          <span className="text-white">PortfolioDetails</span>
        </li>
      </ol>
    </nav>
  );
};

const BreadcrumbOV = () => {
  return (
    <nav aria-label="breadcrumb" className="my-4">
      <ol className="flex space-x-2 text-sm text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600 text-white ">Home</Link>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li>
          <span className="text-white">OurVision</span>
        </li>
      </ol>
    </nav>
  );
};



const BreadcrumbCU = () => {
  return (
    <nav aria-label="breadcrumb" className="my-4">
      <ol className="flex space-x-2 text-sm text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600 text-white ">Home</Link>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li>
          <span className="text-white">Contact Us</span>
        </li>
      </ol>
    </nav>
  );
};


const BreadcrumbC = () => {
  return (
    <nav aria-label="breadcrumb" className="my-4">
      <ol className="flex space-x-2 text-sm text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600 text-white ">Home</Link>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li>
          <span className="text-white">Careers</span>
        </li>
      </ol>
    </nav>
  );
};

const BreadcrumbN = () => {
  return (
    <nav aria-label="breadcrumb" className="my-4">
      <ol className="flex space-x-2 text-sm text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600 text-white ">Home</Link>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li>
          <span className="text-white">News</span>
        </li>
      </ol>
    </nav>
  );
};

export  { Breadcrumb, BreadcrumbPD, BreadcrumbOV, BreadcrumbCU,  BreadcrumbC,  BreadcrumbN,     };
