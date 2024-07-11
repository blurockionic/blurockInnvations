import path from "../assets/path.svg";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import WhatWeDo from "../components/about-component/WhatWeDo";
import AboutVideo from "../components/about-component/AboutVideo";
import TeamMembers from "../components/about-component/TeamMembers";
import ServiceAndSolutions from "../components/about-component/ServiceAndSolutions";

const About = () => {
  return (
    <>
      <div
        className=" mx-auto bg-[#141415] plus-jakarta-sans"
        style={{
          backgroundImage: `url(${path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <section className="text-center mb-12">
          <div className="h-auto items-center">
            <div className="flex justify-between items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "10%" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="h-20 w-[10%] flex flex-col mt-10"
              >
                <div className="h-7 bg-gradient-to-l from-blue-100 rounded-tr-full rounded-br-full"></div>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "10%" }}
                transition={{
                  duration: 5,
                  delay: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="h-20 w-[10%] flex flex-col mt-10"
              >
                <div className="h-7 bg-gradient-to-r from-blue-100 rounded-tl-full rounded-bl-full"></div>
              </motion.div>
            </div>
            <h1 className="text-md font-bold mb-4 uppercase text-[#146ef5]">
              WHO WE ARE
            </h1>
            <h1 className="text-6xl font-bold mb-4  text-white">
              Get to know us
            </h1>
            <p className="text-md text-gray-100 flex justify-center items-center text-lg">
            With a passion for technology and a commitment to excellence, <br/>we empower businesses to thrive in the digital landscape.
          </p>
            <p className="text-md text-gray-100 flex justify-center items-center mt-2">
              Home <ChevronRight className="text-sm" /> About
            </p>
            {/* <div className="flex justify-between items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 3 }}
                className="h-20 w-[25%] flex flex-col mt-10"
              >
                <div className="h-7 bg-gradient-to-l from-yellow-400 rounded-tr-full rounded-br-full"></div>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 3, delay: 0.5 }}
                className="h-20 w-[25%] flex flex-col mt-10"
              >
                <div className="h-7 bg-gradient-to-r from-yellow-400 rounded-tl-full rounded-bl-full"></div>
              </motion.div>
            </div> */}
          </div>
        </section>

        {/* what we do  */}
        <WhatWeDo />
        <AboutVideo />
        <TeamMembers />
        <ServiceAndSolutions />
      </div>
    </>
  );
};

export default About;
