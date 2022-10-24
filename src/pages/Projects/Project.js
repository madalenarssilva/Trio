import React, { useCallback, useEffect, useState } from "react";
import Card from "../../components/Cards/CardProject";
import Footer from "../../components/Footer/Footer";
import Popover from "@mui/material/Popover";
import "./Projects.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import anymatch from "anymatch";
import Moment from "moment";

const Project = ({ toggleTheme, value, iconS, iconF, font }) => {
  const allProjects = [
    {
      id: "1",
      urlname: "illustrationBook",
      name: "Ebook",
      date: "October 2021",
      src: "/Madalena.png",
      autor: "madalena",
      tools: ["/illustrator.png", "/indesign.png"],
      link: "https://www.behance.net/gallery/155024611/Ilustracoes-para-ebook",
      description:
        "Este projeto pessoal veio no seguimento de um pedido de ilustração para um e-book. O e-book em causa fala de contraceção, entre outros tópicos, de uma maneira informativa e simples. A nível de ilustrações foi pedido que fossem efetuadas ilustrações alusivas ao tema, que acompanhassem o tom inclusivo do livro e chamassem a atenção ao leitor.",
      items: ["/background_illustration.png", "/front_illustration.png"],
      illustrations: [
        "utero.png",
        "ilustracao1.png",
        "Ilustração2.png",
        "Menina1.png",
        "Menina2.png",
        "Menina3.png",
        "Menina4.png",
        "Menina5.png",
        "Menina6.png",
        "Menina7.png",
        "Menina8.png",
      ],
    },
    {
      id: "2",
      urlname: "popBubble",
      name: "Pop the Bubble",
      date: "January 2021",
      src: "/Ines.png",
      autor: "ines",
      tools: ["/illustrator.png", "/indesign.png"],
      link: "https://student.dei.uc.pt/~tabanez/PopTheBubble/",
      description:
        "We aim to raise consciousness about the risks of groupthinking in the workplace. Groupthinking is a phenomenon in which people approach problems without truly debating every idea, in order to reach consensus quicker. Ignoring all the possible scenarios/flaws in a project for the sake of simplicity or simply because of a closed mindset can be very harming in the long run, either because of missed opportunities or downright complete failure. Recognizing existing problems is always the first step to reach our full potential. So, we invite you to meet our eight teammates, each one representative of a symptom of groupthinking, hoping that it can help you learn from their mistakes. Let's pop our comfort bubble and make the most out of all the new possibilities that can be achieved through the diversity of ideas!",
      items: ["/backgroundBubble.png", "/frontBubble.png"],
      illustrations: ["Bility.png", "Didi.png", "Lief.png"],
    },
  ];

  const [projects, setProjects] = useState(allProjects);

  //get projects to show, according to search words
  function updateProjects(searchWords) {
    if (searchWords === "") {
      return allProjects;
    }
    var words = searchWords
      .toLowerCase()
      .split(" ")
      .filter((i) => {
        return i != null;
      });

    return allProjects.filter((item) => {
      var match = false;
      var titleWords = item.name
        .toLowerCase()
        .split(" ")
        .filter((i) => {
          return i != null;
        });

      for (var i = 0; i < titleWords.length; i++) {
        match = anymatch(words, titleWords[i]);
        if (match) break;
      }
      return match;
    });
  }

  const borderStyle = "2px solid " + font;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [visible, setVisible] = useState(0);

  const navigate = useNavigate();

  const handleVisibility = () => {
    visible ? setVisible(0) : setVisible(1);
  };

  // filter options "a-z" | "z-a" | "older" | "recent"
  const [filterOption, setFilterOption] = useState("a-z");

  const openDropdown = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const closeDropdown = useCallback((e) => {
    setAnchorEl(null);
  }, []);

  const updateFilter = useCallback((filterOption) => {}, []);

  const ProjectHandler = (project) => {
    navigate("/projects/" + project.id, { state: { projectInfo: project } });
  };

  // Set initial search words
  const [search, setSearch] = useState({ name: "Search project title here" });

  //Update search words & projects shown
  const onSearchChange = (e) => {
    var updated = projects;
    if (allProjects != null) {
      updated = updateProjects(e.target.value);
      console.log(e.target.value);
    }
    setSearch((search) => ({ ...search, [e.target.name]: e.target.value }));
    setProjects(updated);
  };

  //Update filter option & projects shown
  const onFilterChange = (e, option) => {
    setFilterOption(option);
    var updated = projects;

    if (updated != null) {
      if (option == "a-z") {
        updated.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (option == "z-a") {
        updated.sort((a, b) => (a.name > b.name ? -1 : 1));
      }
      //MODIFY TO ITEM DATE (ORDER BY MONTH & YEAR)
      else if (option == "recent") {
        updated.sort(
          (a, b) => Moment(b.date).format("X") - Moment(a.date).format("X")
        );
      } else if (option == "older") {
        updated.sort(
          (a, b) => Moment(a.date).format("X") - Moment(b.date).format("X")
        );
      }
    }
    setProjects(updated);
  };

  return (
    <>
      <div className="grid">
        <div />
        <div />
        <div>
          <motion.div
            className="icons"
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
            <input
              className="search-input"
              style={{
                flexGrow: visible ? 1 : 0,
                opacity: visible,
                width: visible ? "100%" : "0%",
                transition: "all 400ms",
                borderBottom: borderStyle,
              }}
              type="text"
              name="name"
              value={search.name}
              onChange={onSearchChange}
              onClick={() => {
                setSearch({ name: "" });
              }}
            />
            <img src={iconS} onClick={handleVisibility} />
            <>
              <img className="filtro" src={iconF} onClick={openDropdown} />
              <Popover
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={closeDropdown}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                PaperProps={{
                  style: {
                    backgroundColor: "#7C7878",
                    borderRadius: "10%",
                    width: 120,
                  },
                }}
              >
                <div className="dropdown">
                  <span
                    className="dropdown-item"
                    onMouseEnter={(event) => {
                      onFilterChange(event, "a-z");
                    }}
                    style={{
                      backgroundColor:
                        filterOption === "a-z" ? "rgba(0,0,0,0.2)" : "#7C7878",
                    }}
                  >
                    A-Z
                  </span>
                  <span
                    className="dropdown-item"
                    onMouseEnter={(event) => {
                      onFilterChange(event, "z-a");
                    }}
                    style={{
                      backgroundColor:
                        filterOption === "z-a" ? "rgba(0,0,0,0.2)" : "#7C7878",
                    }}
                  >
                    Z-A
                  </span>
                  <span
                    className="dropdown-item"
                    onMouseEnter={(event) => {
                      onFilterChange(event, "recent");
                    }}
                    style={{
                      backgroundColor:
                        filterOption === "recent"
                          ? "rgba(0,0,0,0.2)"
                          : "#7C7878",
                    }}
                  >
                    Most recent
                  </span>
                  <span
                    className="dropdown-item"
                    onMouseEnter={(event) => {
                      onFilterChange(event, "older");
                    }}
                    style={{
                      backgroundColor:
                        filterOption === "older"
                          ? "rgba(0,0,0,0.2)"
                          : "#7C7878",
                    }}
                  >
                    Older
                  </span>
                </div>
              </Popover>
            </>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="cartas"
        initial={{
          translateY: "10vh",
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          type: "spring",
          duration: 1.5,
        }}
      >
        {/* <Card/> */}

        {projects &&
          projects.map((project, index) => (
            <div key={index} onClick={() => ProjectHandler(project)}>
              <Card
                backgroundImage={project.items[0]}
                frontImage={project.items[1]}
                textImage={project.name}
              />
            </div>
          ))}
      </motion.div>
      <Footer toggleTheme={toggleTheme} value={value} />
    </>
  );
};

export default Project;
