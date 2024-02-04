import React from 'react'
import design from '../assets/design.png.png'
import { motion } from 'framer-motion' 

const Projects = () => {
const portfolios = [
    {
        id: 1,
        src: design
    },
    {
        id: 2,
        src: design
    },
    {
        id: 3,
        src: design
    },
    {
        id: 4,
        src: design
    },
    {
        id: 5,
        src: design
    },
    {
        id: 6,
        src: design
    },
]


  return (
    <div name="projects" className='bg-gradient-to-bl from-slate-50 to-slate-400 w-full text-slate-600 md:h-fit pt-20'>
    <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit'>
        <div className=' pb-8 text-center'>
            <p className=' capitalize font-bold text-4xl inline border-b-4 border-slate-600 '>projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

{portfolios.map(({id, src, i}) => (
 
 <motion.div key={id} className=' shadow-md shadow-slate-600 rounded-lg ' initial={{ opacity: 0, translateX: -100 }} transition={{ duration: 1}} whileInView={{ opacity: 1, translateX: 0 }}>
     <img src={src} alt="" className=' rounded-md duration-200'/>
     <div className='flex items-center justify-center font-bold text-lg text-slate-600' >
         <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:text-red-950 capitalize'>demo </button >
         <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:text-red-950 capitalize' >code </button>
     </div>
 </motion.div>



))
}

</div>
    </div>
    </div>
  )
}

export default Projects