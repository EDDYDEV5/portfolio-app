import React, { useState } from "react";
import { FaBars, FaHome, FaTimes, FaTools  } from "react-icons/fa";
import { Link } from "react-scroll";
import { IoPerson } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id:1,
        child: (
          <><FaHome size={30} className=' m-1' />
          Home </>
        ),
        link: "home"
          },
          {
            id:2,
              child: (
                <><IoPerson size={30} className=' m-1' />
                About </>
              ), 
              link: "about" 
                },
                {
                  id:3,
                    child: (
                      <><AiFillProject size={30} className=' m-1' />
                      Projects </>
                    ), 
                    link: "projects" 
                      },
                      {
                        id:4,
                          child: (
                            <><FaTools size={30} className=' m-1' />
                            Skills </>
                          ), 
                          link: "skills" 
                            },
                            {
                              id:5,
                                child: (
                                  <><MdContactMail size={30} className=' m-1' />
                                  Contact </>
                                ), 
                                link: "contact" 
                                  },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4b text-yellow-500 bg-blue-950 fixed z-10 border-b-  border-white-500">
      <div>
        <h1 className=" text-3xl font-protestguerrilla ml-2 ">EDDYDEV</h1>
      </div>
      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" text-xl px-5 cursor-pointer capitalize font-tektur font-bold  hover:text-yellow-400 duration-200 tracking-wide hover:scale-125"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="text-4xl cursor-pointer z-10 pr-4 md:hidden text-white"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-tl from-slate-50 to-slate-400 text-slate-600">
          {links.map(({ id, child, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-tektur text-4xl m-5 flex justify-center items-center"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={600}
                className="flex"
              >
                {child}
    
              </Link>

            </li>
            

          ))}
        </ul>
      )}
      
    </div>
  );
};

export default Navbar;
