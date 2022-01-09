import React from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import Footer from "../../components/Footer/Footer";
import CarouselTech from "../../components/ProjectCarousel";
import "./Project.css";
import { motion } from "framer-motion";
import useFetch from "../../../src/useFetch.js";

export const ProjectInfo = ({ toggleTheme, value, font }) => {
  const { id } = useParams();
  //console.log({ id });

  const location = useLocation();
  const project = location.state.projectInfo; // Read values passed on state

  const author_url =
    "https://api.trio-mbi-api.com/wp-json/wp/v2/project-author?include=" +
    project.acf.author.ID;
  const author = useFetch(author_url);

  const navigate = useNavigate();
  const AuthorHandler = (nome, author) => {
    console.log(author);
    navigate("/about/" + nome, { state: { authorInfo: author } });
  };

  const tools = useFetch("https://api.trio-mbi-api.com/wp-json/wp/v2/tool");
  function searchTool(idToSearch, tools) {
    console.log(tools);
    return tools.filter((item) => {
      return item.id === idToSearch;
    });
  }

  console.log(project.acf.link);

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
            {project.title.rendered}
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
            {project.acf.date}
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
            {author &&
              author.map((authorInfo, index) => (
                <img
                  div
                  key={index}
                  className="author"
                  src={authorInfo.acf.photo.url}
                  onMouseOver={(e) => e.target.classList.add("foto_blur")}
                  onMouseLeave={(e) => e.target.classList.remove("foto_blur")}
                  onClick={() =>
                    AuthorHandler(authorInfo.acf.user_name, authorInfo)
                  }
                />
              ))}
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
          {project.acf.tools &&
            project.acf.tools.map((tool, index) => {
              if (tools != null) {
                return (
                  <img
                    div
                    key={index}
                    className="tool"
                    src={searchTool(tool.ID, tools)[0].acf.icon.url}
                  />
                );
              }
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
          {project.acf.description}

          {project.acf.link != undefined && (
            <a
              href={project.acf.link.url}
              onMouseOver={(e) => e.target.classList.add("color-animation")}
              onMouseLeave={(e) => e.target.classList.remove("color-animation")}
            >
              <p>{project.acf.link.title}</p>
            </a>
          )}
        </motion.p>
        <div className="carrossel">
          <CarouselTech items={project.acf.project_images} />
        </div>
      </div>
      <Footer toggleTheme={toggleTheme} value={value} />
    </div>
  );
};
