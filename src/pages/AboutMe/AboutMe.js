import React, { useState } from "react";
import { useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";
import CarouselTech from "../../components/Carousel";
import "./AboutMe.css";
import { motion } from "framer-motion";
import Highlight from "react-highlight";

export const AboutMe = ({ nome , toggleTheme, value}) => {

  const location = useLocation();
  const author = location.state.authorInfo; // Read values passed on state

  const initialMsg = `<button onClick = "myFunction()" > Click Me! </button>
    <script>
        function myFunction() {
            let x = document.getElementById( "qualifications" );
            x.style.fontSize = "18px";
            x.style.color = "white";
            x.style.visibility = "visible";
        }
    </script>;`;
  const afterMsg = author.acf.timeline;

  const [clickBtn, setClickBtn] = useState(true);
  const [photo, setPhoto] = useState(null);

  const handleBotao = () => {
    setClickBtn(!clickBtn);
  };

  const handlePageView = () => {
    if (nome == "madalena") {
      setPhoto("/Madalena.png");
    } else if (nome == "beatriz") {
      setPhoto("/Bia.png");
    } else {
      setPhoto("/Ines.png");
    }
  };

  return (
    <div className="parent" onLoad={handlePageView}>
      <div className="aboutMe-page">
        <div className="topRow">
          <motion.div
            className="photo"
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
            <img src={photo} />
          </motion.div>
          <div className="about">
            <motion.p
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
            {author.acf.about}  
            </motion.p>
          </div>
        </div>
        <div className="qualificacoes">
          <div className="box">
            <div className="tab">
              <img className="img" src="/tab.svg" />
              {clickBtn ? (
                <span id="cv">
                  <Highlight language="html">{initialMsg}</Highlight>
                </span>
              ) : (
                <p id="cv">{afterMsg}</p>
              )}
            </div>
            <div className="botao">
              <input
                className="button"
                onMouseOver={(e) => {
                  e.target.classList.add("color-animation-button");
                  e.target.classList.add("box-shadow");
                }}
                onMouseLeave={(e) => {
                  e.target.classList.remove("color-animation-button");
                  e.target.classList.remove("box-shadow");
                }}
                type="button"
                value="Click Me!"
                onClick={handleBotao}
              />
            </div>
          </div>
        </div>
        <div className="carrossel-about-me">
          <CarouselTech items={author.acf.tools}/>
        </div>
      </div>
      <Footer toggleTheme={toggleTheme} value={value}/>
    </div>
  );
};
