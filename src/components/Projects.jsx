import React from "react";
import design from "../assets/design.png.png";
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from "react-icons/bi";
import kfbar from '../assets/kfbar.png'
import { Slide } from "./Slide";


const headVarient ={
  hidden: { opacity: 0, translateX: -90 },
  visible: { opacity: 1, translateX: 0
}
}

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: kfbar,
      href: 'https://kf-bar-and-food.vercel.app/',
      code: 'https://github.com/EDDYDEV5/kf_bar_and_food.git',
      title: "Kf Food and Bar"
    },
    {
      id: 2,
      src: design,
    },
    {
      id: 3,
      src: design,
    },
    {
      id: 4,
      src: design,
    },
    {
      id: 5,
      src: design,
    },
    {
      id: 6,
      src: design,
    },
  ];

  return (
    <div
      name="projects"
      className=" bg-orange-50 w-full text-orange-600 md:h-fit pt-20 h-full"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        
        <motion.div className=" pb-10 text-center"  
      variants={headVarient}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true
      }}
      transition = {{
        type: "spring",
        duration: 0.2,
        delay: 0.2,
        damping: 8,
        stiffness: 50,
      }}
        >
          <p className=" capitalize font-bold text-4xl inline font-playfair ">
            projects
          </p>
        </motion.div>
        
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  px-12 sm:px-0 "
        >
       
          {portfolios.map(({ id, src, href, code }) => (
             <Slide>
            <div
              key={id}
              className=" shadow-md shadow-orange-600 rounded-lg border-orange-600 border-4 bg-orange-100 "

            >
             
              <img src={src} alt="" className="px-2 py-2 h-44 w-full" />
              
              <div className="flex-col items-center justify-center font-bold text-lg text-center">
                <h1 className=" font-inter font-bold px-5 tracking-wide">Featured Project 
                </h1>
                
                
                <div className="flex ">
                
                <div className="w-1/2 py-2 m-4 duration-200  cursor-pointer hover: rounded flex flex-col justify-center p-2"><a href={href} target="blank" 
                >
                  <BiLinkExternal size={28} />
                  <span>Demo</span></a>
                  
                </div>
                
                <div className="w-1/2  px-6 py-2 m-4 duration-200  rounded flex flex-col items-center "><a href={code}><FaGithub size={28}/>
                  <span>Code</span></a>
                </div>
                
                </div>
                
              </div>
          
            </div>
            </Slide>
          ))}
           
        </div>
        
      </div>
      
    </div>
  );
};

export default Projects;
