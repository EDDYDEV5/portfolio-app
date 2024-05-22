import React from "react";
import { Slide } from "./Slide";
import { motion } from "framer-motion";

const headVarient = {
  hidden: { opacity: 0, translateX: -90 },
  visible: { opacity: 1, translateX: 0 },
};

const About = () => {
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
          <p className="text-4xl font-bold text-center whitespace-break-spaces inline font-bebas tracking-widest  ">
            about me
          </p>
        </motion.div>

        <Slide>
          <p className=" px-2 font-gelasio text-center  text-gray-800 pb-4
           leading-8 max-w-screen-lg mx-auto">
            I'm Cletus Aneikan Obosi a frontend web developer Proficient in
            HTML, CSS, JavaScript, React, and Tailwind CSS. With a sharp focus
            on creating websites that are responsive, scalable, captivating, and
            user-friendly. with the ability to turn ideas into reality through
            creative thinking innovative solutions new concepts understanding
            user needs to enhance the interactive user interfaces and turning
            them into practical applications adhering to best practices
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default About;
