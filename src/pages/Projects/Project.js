import React, { useCallback, useState } from "react";
import Card from "../../components/Cards/CardProject";
import Footer from "../../components/Footer/Footer";
import Popover from "@mui/material/Popover";
import "./Projects.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Project = () => {
  const projects = [
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
  ];

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

  const ProjectHandler = (name) => {
    navigate("/projects/" + name);
  };

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
              }}
              type="text"
              name="name"
            />
            <img src="/search.svg" onClick={handleVisibility} />
            <>
              <img
                className="filtro"
                src="/filter.svg"
                onClick={openDropdown}
              />
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
                    onMouseEnter={() => setFilterOption("a-z")}
                    style={{
                      backgroundColor:
                        filterOption === "a-z" ? "rgba(0,0,0,0.2)" : "#7C7878",
                    }}
                  >
                    A-Z
                  </span>
                  <span
                    className="dropdown-item"
                    onMouseEnter={() => setFilterOption("z-a")}
                    style={{
                      backgroundColor:
                        filterOption === "z-a" ? "rgba(0,0,0,0.2)" : "#7C7878",
                    }}
                  >
                    Z-A
                  </span>
                  <span
                    className="dropdown-item"
                    onMouseEnter={() => setFilterOption("recent")}
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
                    onMouseEnter={() => setFilterOption("older")}
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
        <div onClick={() => ProjectHandler("bookIllustration")}>
          <Card
            backgroundImage="/background_illustration.png"
            frontImage="/front_illustration.png"
            textImage="Illustration"
          />
        </div>
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
      </motion.div>
      <Footer />
    </>
  );
};

export default Project;
