import React from "react";
import heroimage from "../assets/heroimage.png";
import { FiDownload } from "react-icons/fi";
import { Slide } from "./Slide";
import { motion }from 'framer-motion'


const headVarient ={
  hidden: { opacity: 0, translateX: -50 },
  visible: { opacity: 1, translateX: 0, 
    
  },
  
}


const Home = () => {
  const links = [
    {
      id: 1,
      child: <>Resume </>,
      href: "/CletusObosiResume (1)",
      download: true,
    },
  ];

  return (
    <>
      <div
        name="home"
        className="h-fit w-full  pt-20 bg-white "
      >
          
        <div className=" h- flex flex-col items-center justify-center lg:justify-betwen lg:gap-4 xl:gap-6 text-violet-400 px-4 lg:flex-row border border-violet-400 rounded ">
        
          <div className=" flex flex-col lg:justify-center pt-6">
         
            <motion.h1 className=" text-5xl md:text-7xl  font-bebas tracking-wider font-bold"
            variants={headVarient}
            initial="hidden"
            animate="visible"
            transition = {{
              type: "spring",
              duration: 0.2,
              delay: 0.2,
              stiffness: 50,
            }}
            >
              
              hi, <br /> i'm cletus obosi
            </motion.h1>
           
            <motion.p className=" capitalize tracking-wide py-4 max-w-md font-medium text-lg font-gelasio text-gray-600 "
            variants={headVarient}
            initial="hidden"
            animate="visible"
            transition = {{
              type: "spring",
              duration: 0.2,
              
              delay: 0.5,
              stiffness: 50,
            }}
            
            >
              a dedicated and result oriented <br />
              frontend developer creating great user experience and responsive
              webistes.
            </motion.p>
        
            
            <div>
            <Slide>
              <div className="  cursor-pointer text-xl flex text-white  rounded-md justify-center items-center px-5 mt-2 w-40  hover:bg-violet-100  hover:text-violet-600 py-3 delay-75 font-gelasio bg-violet-400 font-bold">
                <ul className=" group">
                  {links.map(({ id, child, href, download }) => (
                    <li key={id}>
                      <a
                        href={href}
                        download={download}
                        target="_blank"
                        className=" flex flex-row group"
                      >
                        {child}
                        <FiDownload size={20} className=" ml-2 mt-1 group-hover:animate-bounce" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              </Slide>
            </div>
           
          </div>
         
          <div className=" pb-8 ">
            <img
              src={heroimage}
              alt="my hero profile"
              className=" rounded-full mx-auto w-64  border-violet-400 hover:border lg:w-full mt-2"
            />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Home;
