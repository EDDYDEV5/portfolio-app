import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'


export const Slide = ({children, delay, className, variants}) => {
    const ref =useRef(null)
    const isInview = useInView(ref, { once: true });
      const controls = useAnimation();
    
      useEffect(() => {
        if (isInview) {
          controls.start("visible");
        }
      }, [isInview]);
    
      const boxVarient ={
        hidden: { opacity: 0, translateY: 90 },
        visible: { opacity: 1, translateY: 0, 
            when: "beforeChildren"
        },
      } 
      
  return (
    <motion.div
    ref={ref} 
    variants={
       boxVarient
    }
    transition={{
        type: "spring",
        duration: 0.2,
        damping: 10,
        delay: 0.7,
        stiffness: 60,
      }}

    initial="hidden"
      animate={controls}
      className={className}
       delay ={delay}
    >{children}</motion.div>
  )
}
