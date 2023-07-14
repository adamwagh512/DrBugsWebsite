import {React, useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../assets/DrBugsLogo.jpg'

const Navbar = () => {
    // setting our nav state, which we will use when in mobile mode
    // we will set this to false as a default
    const [nav, setNav] = useState(false)
    // This is the function we will use to handle our nav state change
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    // Creates a master div that will take up 100% of screen width, and have a height of 90px
    <div className="w-full h-[90px] text-[#0f0a5a] bg-white">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div><img src={logo} className="h-[80px] justify-left"/></div>
        <div>
          <h1 className="hidden md:flex">Dr. Bugs Pest Control </h1>
        </div>
        <div className="hidden md:flex">
          {/* Creates an unordered list to hold all of our menu items */}
          {/* This only displays if the window size is medium or bigger, otherwise it will be hidden, and mobile menu will display */}
          <ul className="flex text-[#0f0a5a]">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Mobile view of navbar */}
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          
        </div>

        {/* Mobile Menu */}
        <div className= {nav ? "w-full bg-black bg-opacity-90 text-white absolute top-[90px] left-0 h-screen flex justify-center text-center" : 'absolute left-[-100%]'}>
          <ul>
            <li className="text-2xl py-5">About Us</li>
            <li className="text-2xl py-5">Services</li>
            <li className="text-2xl py-5">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Being exported so it can be used in the App.js file
export default Navbar;
