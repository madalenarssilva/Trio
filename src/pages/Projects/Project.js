import React, { useCallback, useEffect, useState } from "react";
import Card from "../../components/Cards/CardProject";
import Footer from "../../components/Footer/Footer";
import Popover from "@mui/material/Popover";
import "./Projects.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import useFetch from "../../../src/useFetch.js";
import anymatch from "anymatch";
import Moment from "moment";

const Project = ({ toggleTheme, value, iconS, iconF, font }) => {
  const allProjects = useFetch(
    "https://api.trio-mbi-api.com/wp-json/wp/v2/project"
  );
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(allProjects);
  }, [allProjects]);

  //get projects to show, according to search words
  function updateProjects(searchWords) {
    if (searchWords === "") {
      return allProjects;
    }
    var words = searchWords
      .toLowerCase()
      .split(" ")
      .filter(function (i) {
        return i;
      });

    return allProjects.filter((item) => {
      var match = false;
      var titleWords = item.title.rendered
        .toLowerCase()
        .split(" ")
        .filter(function (i) {
          return i;
        });

      for (var i = 0; i < titleWords.length; i++) {
        match = anymatch(words, titleWords[i]);
        if (match) break;
      }
      return match;
    });
  }

  const borderStyle = "2px solid " + font;
  console.log(borderStyle);

  /*const projects = [
    {
      id: "1",
      urlname: "illustrationBook",
      name: "Illustration Book",
      date: "October 2021",
      src: "/Madalena.png",
      tools: ["/illustrator.png", "/indesign.png"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncaliquam faucibus libero, et congue urna vulputate vel. Suspendisse non turpis magna. Praesent at erat a eros iaculis semper ut id lorem. Ut eu eleifend lorem. Praesent id neque ac nunc pellentesque pellentesque. Ut dictum nulla blandit mauris tincidunt pharetra. Proin quis lorem dui. Donec tincidunt sed mi ut finibus. Nam vitae pharetra nunc. Curabitur risus metus, maximus non scelerisque vitae, cursus vel purus. Vestibulum accumsan suscipit fringilla. Vestibulum laoreet metus eget pulvinar sodales. Phasellus sollicitudin magna quis lobortis rutrum. Fusce porta dignissim metus, nec feugiat justo aliquam vitae. Nullam dapibus laoreet sapien, eget molestie libero sollicitudin et. Nullam nec ante sollicitudin, pulvinar urna consectetur, mattis nibh.",
      items: ["/ilustracao1.png", "/ilustracao2.png"],
    },
    {
      id: "2",
      urlname: "popBubble",
      name: "Pop the Bubble",
      date: "January 2021",
      src: "/Ines.png",
      tools: ["/illustrator.png", "/indesign.png"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncaliquam faucibus libero, et congue urna vulputate vel. Suspendisse non turpis magna. Praesent at erat a eros iaculis semper ut id lorem. Ut eu eleifend lorem. Praesent id neque ac nunc pellentesque pellentesque. Ut dictum nulla blandit mauris tincidunt pharetra. Proin quis lorem dui. Donec tincidunt sed mi ut finibus. Nam vitae pharetra nunc. Curabitur risus metus, maximus non scelerisque vitae, cursus vel purus. Vestibulum accumsan suscipit fringilla. Vestibulum laoreet metus eget pulvinar sodales. Phasellus sollicitudin magna quis lobortis rutrum. Fusce porta dignissim metus, nec feugiat justo aliquam vitae. Nullam dapibus laoreet sapien, eget molestie libero sollicitudin et. Nullam nec ante sollicitudin, pulvinar urna consectetur, mattis nibh.",
      items: ["/Bility.png", "/Didi.png", "/Lief.png"],
    },
  ];*/

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
    }
    setSearch((search) => ({ ...search, [e.target.name]: e.target.value }));
    setProjects(updated);
  };

  //Update filter option & projects shown
  const onFilterChange = (e, option) => {
    setFilterOption(option);
    console.log(option);
    var updated = projects;

    if (updated != null) {
      if (option == "a-z") {
        updated.sort((a, b) => (a.title.rendered > b.title.rendered ? 1 : -1));
      } else if (option == "z-a") {
        updated.sort((a, b) => (a.title.rendered < b.title.rendered ? 1 : -1));
      }
      //MODIFY TO ITEM DATE (ORDER BY MONTH & YEAR)
      else if (option == "recent") {
        updated.sort(
          (a, b) =>
            Moment(b.acf.date).format("X") - Moment(a.acf.date).format("X")
        );
      } else if (option == "older") {
        updated.sort(
          (a, b) =>
            Moment(a.acf.date).format("X") - Moment(b.acf.date).format("X")
        );
      }
    }
    setProjects(updated);
  };

  {
    projects &&
      projects.map((project, index) => {
        console.log(
          project.title.rendered +
            "     " +
            Moment(project.acf.date).format("M/YYYY")
        );
      });
  }

  return (
    <>
      <div className="grid">
        <div />
        <div />
        <div>
          <motion.div
            className="icons"
            /*onMouseOver={(e) => {
              document.getElementById("cursor-ring").style.opacity = 0;
              e.target.classList.add("icons-hover");
            }}
            onMouseLeave={(e) => {
              document.getElementById("cursor-ring").style.opacity = 1;
              e.target.classList.remove("icons-hover");
            }}*/
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
                backgroundImage={project.acf.preview_back.url}
                frontImage={project.acf.preview_front.url}
                textImage={project.title.rendered}
              />
            </div>
          ))}

        {/*
        <div onClick={() => ProjectHandler("popBubble")}>
          <Card
            backgroundImage="/backgroundBubble.png"
            frontImage="/frontBubble.png"
            textImage="Pop the bubble"
          />
        </div>
        <div style={{ backgroundColor: "blue", borderRadius: "15px" }} />
        <div style={{ backgroundColor: "pink", borderRadius: "15px" }} />
        <div style={{ backgroundColor: "green", borderRadius: "15px" }} />
        <div style={{ backgroundColor: "white", borderRadius: "15px" }} />
        <div style={{ backgroundColor: "aliceblue", borderRadius: "15px" }} />
        */}
      </motion.div>
      <Footer toggleTheme={toggleTheme} value={value} />
    </>
  );
};

export default Project;
