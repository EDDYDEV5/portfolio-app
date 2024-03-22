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
        className="h-fit w-full  pt-20 bg-orange-50 "
      >
          
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen text-orange-600 px-4 md:flex-row">
        
          <div className=" flex flex-col justify-center h-full ">
         
            <motion.h1 className=" mt-2 text-5xl md:text-7xl font-playfair font-bold font"
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
           
            <motion.p className=" capitalize tracking-wide py-4 max-w-md  text-xl font-inter "
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
              <div className=" cursor-pointer text-xl flex text-white  rounded-md justify-center items-center px-5 mt-2 w-40  hover: hover:bg-orange-100 hover:border-4 hover:border-orange-600 hover:text-orange-600 py-3 delay-75 font-gelasio bg-orange-600 font-bold">
                <ul>
                  {links.map(({ id, child, href, download }) => (
                    <li key={id}>
                      <a
                        href={href}
                        download={download}
                        target="_blank"
                        className=" flex flex-row"
                      >
                        {child}
                        <FiDownload size={20} className=" ml-2 mt-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              </Slide>
            </div>
           
          </div>
         
          <div className=" pb-3 ">
            <img
              src={heroimage}
              alt="my hero profile"
              className=" rounded-full mx-auto w-2/3 border-orange-600 border-4 md:w-full"
            />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Home;
