import React from "react";
import design from "../assets/design.png.png";
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from "react-icons/bi";
import kfbar from '../assets/kfbar.png'


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
      className="bg-gradient-to-bl from-slate-50 to-slate-400 w-full text-slate-600 md:h-fit pt-20 h-full"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className=" pb-8 text-center">
          <p className=" capitalize font-bold text-4xl inline border-b-4 border-slate-600 ">
            projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, href, code, title }) => (
            <motion.div
              key={id}
              className=" shadow-md shadow-slate-600 rounded-lg bg-slate-600"
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img src={src} alt="" className="px-2 py-2 h-44 w-full" />
              <div className="flex-col items-center justify-center font-bold text-lg text-white">
                <h1 className=" font-tektur px-5 tracking-wide">Featured Project 
                </h1>
                <p className="font-tektur px-5 tracking-wide">{title}</p>
                 
                <div className="flex">
                <div className="w-1/2 py-2 m-4 duration-200  cursor-pointer hover: text-white rounded flex flex-col justify-center"><a href={href} target="blank">
                  <BiLinkExternal size={28} />
                  <span>Demo</span></a>
                  
                </div>
                <div className="w-1/2 px-6 py-2 m-4 duration-200  text-white rounded flex flex-col items-center "><a href={code}><FaGithub size={28}/>
                  <span>Code</span></a>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
