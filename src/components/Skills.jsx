import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import reactimage from '../assets/reactimage.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import { motion } from 'framer-motion'
import { Slide } from './Slide'



const headVarient ={
    hidden: { opacity: 0, translateX: -90 },
    visible: { opacity: 1, translateX: 0
  }
  }
  

const Skills = () => {
const techs =
[
    {
        id:1,
        src: html,
        title: 'HTML'
    },
    {
        id:2,
        src: css,
        title: 'CSS'
    },
    {
        id:3,
        src: js,
        title: 'JAVASCRIPT'
    },
    {
        id:4,
        src: reactimage,
        title: 'REACT'
    },
    {
        id:5,
        src: tailwind,
        title: 'TAILWIND'
    },
    {
        id:6,
        src: github,
        title: 'GITHUB'
    },
];


  return (
    <div name="skills" className=' bg-white w-full text-secondary h-fit'>
        
<div className=' border border-secondary rounded my-2 p-4 flex flex-col justify-center  w-full h-fit pt-20  text-center'>
    <motion.div className=''
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
        <p className=' text-4xl font-bebas tracking-wider font-bold inline  p-2'>Skills</p>
    </motion.div>


<div className=' w-40 sm:w-full grid  sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 mx-auto'>

    {techs.map(({id, src, title}) => (
        <Slide key={id}>
 <div  className=' flex flex-col justify-center items-center shadow-md  py-2 rounded-lg border-secondary border h-44 bg-vi-100' >
 <img src={src} alt="" className=' w-20 ' />
 <p className=' text-gray-600 px-2 font-gelasio'>{title}</p>
 
</div>
</Slide>
    ))}   
</div>

</div>
    </div>
  )
}

export default Skills