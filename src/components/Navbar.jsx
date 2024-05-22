import React, { useState } from "react";
import { FaBars, FaTimes, } from "react-icons/fa";
import { Link } from "react-scroll";
import { links } from "../data"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-16 px-4b bg-white text-secondary  fixed z-10 shadow">
      <div>
        <h1 className=" text-3xl font-protestguerrilla ml-2 ">EDDYDEV</h1>
      </div>
      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" text-xl px-5 cursor-pointer uppercase font-bebas tracking-widest font-bold  hover:text-gray-700 duration-200  hover:scale-125"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="text-4xl cursor-pointer z-10 pr-4 md:hidden"
      >
        {nav ? <FaTimes size={30} className="text-white" /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-secondary text-white">
          {links.map(({ id, title, link }) => (
            <li
              key={id}
              className=" border-b   cursor-pointer capitalize font-bebas
               text-4xl my-5 mx-5 px-3 hover:text-gray-700"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={600}
                className="flex"
              >
                {title}
    
              </Link>

            </li>
            

          ))}
        </ul>
      )}
      
    </div>
  );
};

export default Navbar;
