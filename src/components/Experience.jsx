// import { Canvas, extend, useLoader } from "@react-three/fiber";
// import {
//   OrbitControls,
//   Environment,
//   Effects,
//   useTexture,
// } from "@react-three/drei";
// import { LUTPass, LUTCubeLoader } from "three-stdlib";

// extend({ LUTPass });

// function Grading() {
//   const { texture3D } = useLoader(LUTCubeLoader, "/cubicle-99.CUBE");
//   return (
//     <Effects>
//       <lUTPass lut={texture3D} intensity={0.75} />
//     </Effects>
//   );
// }

// function Sphere(props) {
//   const texture = useTexture("/terrazo.png");
//   return (
//     <mesh {...props}>
//       <sphereGeometry args={[1, 64, 64]} scale={2} />
//       <meshPhysicalMaterial
//         scale={2}
//         map={texture}
//         clearcoat={1}
//         clearcoatRoughness={0}
//         roughness={0}
//         metalness={0.5}
//       />
//     </mesh>
//   );
// }

// export default function App() {
//   return (
//     <div
//       className="h-[50vh]"
//       style={{
//         backgroundImage: `linear-gradient(180deg,#00000018,#000)`,
//       }}
//     >
//       <Canvas frameloop="demand" camera={{ position: [0, 0, 10], fov: 45 }}>
//         <ambientLight />
//         <spotLight
//           intensity={0.5}
//           angle={0.2}
//           penumbra={1}
//           position={[5, 15, 10]}
//         />
//         <Sphere />
//         <Grading />
//         <Environment preset="dawn" background blur={0.6} />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      // icon={
      //   <div className="flex justify-center items-center w-full h-full">
      //     <img
      //       src={experience.icon}
      //       alt={experience.company_name}
      //       className="w-[60%] h-[60%] object-contain"
      //     />
      //   </div>
      // }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What i have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
