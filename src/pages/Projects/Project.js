import React, { useCallback, useState } from "react";
import Card from "../../components/Cards/CardProject";
import Footer from "../../components/Footer/Footer";
import Popover from "@mui/material/Popover";
import "./Projects.css";

const Project = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [visible, setVisible] = useState(0);

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

  return (
    <>
      <div className="grid">
        <div />
        <div />
        <div>
          <div className="icons">
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
            <img src="search.svg" onClick={handleVisibility} />
            <>
              <img className="filtro" src="filter.svg" onClick={openDropdown} />
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
          </div>
        </div>
      </div>
      <div className="cartas">
        {/* <Card/> */}
        <Card
          backgroundImage="/background_illustration.png"
          frontImage="/front_illustration.png"
          textImage="Illustration"
        />

        <div style={{ backgroundColor: "blue", borderRadius: "15px" }} />
        <div style={{ backgroundColor: "pink", borderRadius: "15px" }} />
        <div style={{ backgroundColor: "green", borderRadius: "15px" }} />
        <div style={{ backgroundColor: "white", borderRadius: "15px" }} />
        <div style={{ backgroundColor: "aliceblue", borderRadius: "15px" }} />
      </div>
      <Footer />
    </>
  );
};

export default Project;
