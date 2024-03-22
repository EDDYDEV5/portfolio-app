import React from 'react'
import { Slide } from './Slide'
import { motion }from 'framer-motion'


const headVarient ={
  hidden: { opacity: 0, translateX: -90 },
  visible: { opacity: 1, translateX: 0, 
    
  },
  
}

const About = () => {
  return (
    <div name="about" className=' w-full h-fit bg-orange-50  text-orange-600 pt-20'>
      
    <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen items-center'>
      
        <motion.div className=' pb-8' 
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
            <p className='text-4xl font-bold text-center inline font-playfair '>about me</p>
        </motion.div>
        
        <Slide>
        <p className='text-xl mt-6 tracking-wide font-inter capitalize '> i'm cletus aneikan obosi a frontend web developer Proficient in HTML, CSS, JavaScript, React, and Tailwind CSS. With a sharp focus on creating websites that are responsive, scalable, captivating, and user-friendly.
        with the ability to turn ideas into reality
        through creative thinking innovative solutions new concepts understanding user needs to enhance the interactive user interfaces and turning them into practical applications adhering to best practices 

        </p>
        </Slide>
    </div>   
    
     </div>
  )
}

export default About