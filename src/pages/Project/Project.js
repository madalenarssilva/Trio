import React from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import Footer from "../../components/Footer/Footer";
//import CarouselTech from "../../components/ProjectCarousel";
import CarouselTech from "../../components/Carousel";
import "./Project.css";
import { motion } from "framer-motion";
import useFetch from "../../../src/useFetch.js";

export const ProjectInfo = ({ toggleTheme, value, font }) => {
  const { id } = useParams();
  console.log({ id });

  const location = useLocation();
  const project = location.state.projectInfo; // Read values passed on state
  console.log(project);

  const navigate = useNavigate();
  const AuthorHandler = (nome) => {
    navigate("/about/" + nome);
  };

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
            style={{ color: font }}
          >
            {project.name}
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
            style={{ color: font }}
          >
            {project.date}
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
            {
              <img
                className="author"
                src={project.src}
                onMouseOver={(e) => e.target.classList.add("foto_blur")}
                onMouseLeave={(e) => e.target.classList.remove("foto_blur")}
                onClick={() => AuthorHandler(project.autor)}
              />
            }
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
          {project.tools &&
            project.tools.map((item) => {
              return <img className="tool" src={item} />;
            })}
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
          style={{ color: font }}
        >
          {project.description}

          {project.link && (
            <a
              href={project.link}
              onMouseOver={(e) => e.target.classList.add("color-animation")}
              onMouseLeave={(e) => e.target.classList.remove("color-animation")}
            >
              <p>Website: {project.link}</p>
            </a>
          )}
        </motion.p>
        <div className="carrossel">
          <CarouselTech items={project.illustrations} />
        </div>
      </div>
      <Footer toggleTheme={toggleTheme} value={value} />
    </div>
  );
};
