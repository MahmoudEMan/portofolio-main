import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";
console.log(SectionWrapper);
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{ perspective: 600, transition: true, scale: 1.02 }}
      className="md:w-[250px] w-full duration-100"
    >
      <motion.div
        variants={fadeIn("right", "spring", (0.5 * (index + 1)) / 2, 0.75)}
        className={
          "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        }
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className={
            "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          }
        >
          <img src={icon} className={"w-16 h-16 object-contain"} alt="" />
          <h2 className="text-white text-[20px] font-bold text-center">
            {" "}
            {title}{" "}
          </h2>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I'm a skilled frontend developer with experience in React, MUI, tailwind
        and APIs integration , I'm a quick learner solve real world problems ,
        lets work together.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            ></ServiceCard>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
