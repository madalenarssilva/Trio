import React from "react";
import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import CarouselTech from "../../components/ProjectCarousel";
import "./Project.css";
import { motion } from "framer-motion";


export const ProjectInfo = ({toggleTheme,value, font}) => {
  const { id } = useParams();
  console.log({ id });
  return (
    <div className="projectPage">
      <div className="projectArea">
        <div className="projectHeader">
          <motion.h1
            className="title"
            initial={{
              translateX: "-50vw",
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
            style={{color:font}}
          >
            Project Name
          </motion.h1>
          <motion.h2
            className="date"
            initial={{
              translateX: "50vw",
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
            style={{color:font}}
          >
            January 2022
          </motion.h2>
          <motion.div
            initial={{
              translateX: "50vw",
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
          >
            <img className="author" src="/Madalena.png" />
          </motion.div>
        </div>
        <motion.div
          className="projectTools"
          initial={{
            translateX: "-50vw",
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "spring",
            duration: 1.5,
          }}
        >
          <img className="tool" src="/illustrator.png" />
          <img className="tool" src="/indesign.png" />
        </motion.div>

        <motion.p
          className="description"
          initial={{
            translateX: "50vw",
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "spring",
            duration: 1.5,
          }}
          style={{color:font}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          faucibus libero, et congue urna vulputate vel. Suspendisse non turpis
          magna. Praesent at erat a eros iaculis semper ut id lorem. Ut eu
          eleifend lorem. Praesent id neque ac nunc pellentesque pellentesque.
          Ut dictum nulla blandit mauris tincidunt pharetra. Proin quis lorem
          dui. Donec tincidunt sed mi ut finibus. Nam vitae pharetra nunc.
          Curabitur risus metus, maximus non scelerisque vitae, cursus vel
          purus. Vestibulum accumsan suscipit fringilla. Vestibulum laoreet
          metus eget pulvinar sodales. Phasellus sollicitudin magna quis
          lobortis rutrum. Fusce porta dignissim metus, nec feugiat justo
          aliquam vitae. Nullam dapibus laoreet sapien, eget molestie libero
          sollicitudin et. Nullam nec ante sollicitudin, pulvinar urna
          consectetur, mattis nibh.
        </motion.p>
        <div className="carrossel">
          <CarouselTech />
        </div>
      </div>
      <Footer toggleTheme={toggleTheme} value={value}/>
    </div>
  );
};
