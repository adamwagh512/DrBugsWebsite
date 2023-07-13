import {React, useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    // setting our nav state, which we will use when in mobile mode
    // we will set this to false as a default
    const [nav, setNav] = useState(false)

  return (
    // Creates a master div that will take up 100% of screen width, and have a height of 90px
    <div className="w-full h-[90px] bg-[#0f0a5a] text-white">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1>Dr. Bugs </h1>
        </div>
        <div className="hidden md:flex">
          {/* Creates an unordered list to hold all of our menu items */}
          {/* This only displays if the window size is medium or bigger, otherwise it will be hidden, and mobile menu will display */}
          <ul className="flex text-white">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Mobile view of navbar */}
        <div className="block md:hidden">
          <AiOutlineMenu size={30} />
        </div>

        {/* Mobile Menu */}
        <div className=" w-full bg-black bg-opacity-80 text-white absolute top-[90px] left-0 h-screen flex justify-center text-center">
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
