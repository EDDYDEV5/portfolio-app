import { motion} from "framer-motion"
import { Slide } from "./Slide";
import { achievement, achievement1, } from "../data"

const headVarient = {
    hidden: { opacity: 0, translateX: -90 },
    visible: { opacity: 1, translateX: 0 },
  };
  

const Experience = () => {
  return (
    <div name="about" className=" w-full h-fit bg-white  text-secondary">
        <div className=" border border-secondary rounded my-2  flex flex-col justify-cente w-full h-full items-center">
        <motion.div
          className=" py-6 "
          variants={headVarient}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
            duration: 0.2,
            delay: 0.2,
            damping: 28,
            stiffness: 50,
          }}
        >
            <h1 className=" pb-4 text-4xl font-bebas font-bold">experience</h1>
            </motion.div>
        
            <div>
              <div className=" flex flex-col">
                {
                    achievement.map((item) => (
                        <Slide key={item.id}>
                            <div className=" font-gelasio text-gray-800 mx-4 ">
                                <h1 className=" text-xl font-gelasio text-black ">{item.title}</h1>
                                <p className=" text-sm pb-2">{item.year}</p>
                           <li className=" list-disc py-1 font-gelasio">
                              {item.content}
                           </li>
                           </div>
                        </Slide>
                    ))}
                    </div>
                    <div className=" py-6">
                       {
                        achievement1.map((item) => (
                            <Slide key={item.id}>
                                <div className=" text-gray-800  mx-4">
                                    <h1 className=" text-xl font-gelasio text-black ">{item.company}</h1>
                                    <p className="">{item.title}</p>
                                    <p className=" text-sm pb-2">{item.year}</p>
                               <li className=" list-disc py-1 font-gelasio">
                                  {item.content}
                               </li>
                               </div>
                            </Slide>
                        ))}
                    
                    </div>
                    </div>
               

         
             
             
               </div>
        </div>
  )
}

export default Experience