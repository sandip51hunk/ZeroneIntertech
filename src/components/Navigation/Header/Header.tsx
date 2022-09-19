import React from "react";
import { useNavigate } from "react-router-dom";
// import {Logo} from '../../../assets/images/index
export const Header = () => {
  let Logo = require("../../../assets/images/mainImage.png");
  const navigate = useNavigate();

  return (
    <header className="text-gray-600 body-font px-24">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} alt="" />
          <span className="ml-3 text-xl">
            {" "}
            <span style={{ color: "#274AD8" }}>Load</span>
            <span style={{ color: "#EC4A47" }}>Nepal</span>
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" >Home</a>
          <a className="mr-5 hover:text-gray-900"onClick={() => window.location.replace("/#about")}>About</a>
          <a className="mr-5 hover:text-gray-900" onClick={() => window.location.replace("/#shippers")}>Shippers</a>
          <a className="mr-5 hover:text-gray-900"onClick={() => window.location.replace("/#carriers")}>Carriers</a>
          <a className="mr-5 hover:text-gray-900"onClick={() => window.location.replace("/#contact")}>Contact</a>
        </nav>
        <button 
          onClick={() => navigate("/register")}
        
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Register
        </button>
        <button
          onClick={() => navigate("/login")}
          className="inline-flex bg-sky-500 text-white items-center bg-gray-100 mx-3 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Login
        </button>
      </div>
    </header>
  );
};
