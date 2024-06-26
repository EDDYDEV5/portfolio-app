import React from "react";
import design from "../assets/design.png.png";
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from "react-icons/bi";
import kfbar from '../assets/kfbar.png'
import kendo from '../assets/landingpaged.jpg'
import sureaza from '../assets/sureaza.jpg'
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
      title: "Kf Food and Bar",
      features: 'Kfbar and Food Bar is a restaurant mini e-commerce website showcasing their products built with Html, CSS, javaScript, React and Tailwind'
    },
    {
      id: 2,
      src: kendo,
      code: 'https://github.com/EDDYDEV5/portfolio-app.git',
      href: 'https://landing-page-peach-nine.vercel.app/',
      title: 'Kendo solar',
      features: 'A landing page that showcases  features and services offered by Kendo Solar Nigeria Ltd built with Html, CSS, javaScript, React and Tailwind'

    },
    {
      id: 3,
      src: sureaza,
      code: 'https://github.com/EDDYDEV5/Sure-aza.git',
      href: 'https://sure-aza.vercel.app/',
      title: 'Sureaza Bank',
      features: 'A Landing Page of Sureaza Bank a modern bank with a swift payment method was built with Html, CSS, javaScript, React and Tailwind'
    },
    {
      id: 4,
      src: design,
      title: '#Coming Soon'
    },
   
  ];

  return (
    <div
      name="projects"
      className=" bg-white w-full text-secondary md:h-fit  h-full"
    >
      <div className="  border border-secondary rounded my-2 flex flex-col justify-center w-full h-fit">
        
        <motion.div className=" py-6 text-center"  
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
        damping: 28,
        stiffness: 50,
      }}
        >
          <p className=" capitalize font-bold text-4xl inline font-bebas tracking-wider">
            projects
          </p>
        </motion.div>
        
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-6 "
        >
       
          {portfolios.map(({ id, src, href, code, title, features }) => (
             <Slide key={id}>
            <div
              
              className=" rounded bg-blue-1 border-secondary border shadow-md hover:brightness-90"

            >
             
              <img src={src} alt="" className=" sm:h-48 w-full rounded-lg p-1  "/>
              <div className="flex-col items-center justify-center text-lg text-center py-2 sm:h-72 ">
                 
                <h1 className=" font-bebas tracking-wider font-bold">{title} 
                </h1>
                <p className=" font-gelasio leading-8 text-gray-600 px-4">{features}</p>
                
                
                <div className="flex ">
                
                <div className="w-1/2 py-2 m-4  cursor-pointer hover: rounded flex flex-col font-gelasio items-center"><a href={href} target="blank" 
                >
                  <BiLinkExternal size={28} />
                  <span>Demo</span></a>
                  
                </div>
                
                <div className="w-1/2 py-2 m-4 cursor-pointer rounded flex flex-col items-center font-gelasio "><a href={code}><FaGithub size={28}/>
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
