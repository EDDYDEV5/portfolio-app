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
    <div name="skills" className=' bg-white w-full text-orange-400 h-fit'>
        
<div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-fit pt-20  text-center'>
    <motion.div className=' pt-20'
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
        <p className=' text-4xl font-playfair font-bold inline  p-2'>Skills</p>
    </motion.div>


<div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>

    {techs.map(({id, src, title}) => (
        <Slide>
 <div key={id} className=' flex flex-col justify-center items-center shadow-md  py-2 shadow-orange-400 rounded-lg border-orange-50 border-4 h-44 bg-orang' >
 <img src={src} alt="" className=' w-20 mx-auto' />
 <p className=' mt-4 font-inter font-bold'>{title}</p>
 
</div>
</Slide>
    ))}   
</div>

</div>
    </div>
  )
}

export default Skills