import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import CarouselTech from "../../components/Carousel";
import "./AboutMe.css";
import { motion } from "framer-motion";
import Highlight from "react-highlight";
import { useEffect } from "react";
import { useCallback } from "react";

export const AboutMe = ({ nome, toggleTheme, value }) => {
  const initialMsg = `<button onClick = "myFunction()" > Click Me! </button>
    <script>
        function myFunction() {
            let x = document.getElementById( "qualifications" );
            x.style.fontSize = "18px";
            x.style.color = "white";
            x.style.visibility = "visible";
        }
    </script>;`;

  const Msg = {
    madalena: [
      "2020 - 2021 : Degree in Software Engineering University of Coimbra \n2020 - 2022 : Masters in Software Engineerng University of Coimbra",
      <p>
        <p>
          Hi! I'm Madalena and I'm a Software Developer. I have a Master's
          degree in Computer Science from the University of Coimbra. I love to
          explore new skills and be creative. In my free time, I like to listen
          to music, write, read and make illustrations. One of my dreams,
          besides being a Software Developer, is to write and illustrate a
          Children's book one day.
        </p>
        <p>
          I love working with React and Figma to design and build creative
          Websites!
          <p>https://www.behance.net/madalenasilva1</p>
        </p>
      </p>,
      "/Madalena.png",
      [
        "bootstrap.svg",
        "figma.svg",
        "html.png",
        "indesign.png",
        "javaScript.png",
        "react.png",
        "css.png",
      ],
    ],
    beatriz: [
      "2020 - 2021 : Degree in Software Engineering University of Coimbra \n2020 - : Masters in Software Engineerng University of Coimbra",
      <p>
        <p>
          Hi! I'm Beatriz and I'm a Software Engineer. I'm taking a Master's
          degree in Computer Science at the University of Coimbra.
        </p>
        <p>In my free time I love playing with my dog, Lexie.</p>
      </p>,
      "/Bia.png",
      [
        "bootstrap.svg",
        "figma.svg",
        "html.png",
        "javaScript.png",
        "react.png",
        "css.png",
      ],
    ],
    ines: [
      "2020 - 2021 : Degree in Software Engineering University of Coimbra \n2020 - : Masters in Software Engineerng University of Coimbra",
      <p>
        Hi! I'm Inês and I'm a Designer. I'm taking a Master's degree in Design
        and Multimedia at the University of Coimbra. I also have a Bachelor's
        degree in Computer Science from the University of Coimbra.
        <p>In my free time, I like to make volunteer work at a dog shelter.</p>
        <p>
          I like to create beautiful websites where I can explore my passion for
          design and software development.
        </p>
      </p>,
      "/Ines.png",
      [
        "bootstrap.svg",
        "figma.svg",
        "html.png",
        "javaScript.png",
        "react.png",
        "css.png",
      ],
    ],
  };

  const [clickBtn, setClickBtn] = useState(true);

  const handleBotao = () => {
    setClickBtn((estadoAtual) => !estadoAtual);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="parent">
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
            <img src={Msg[nome][2]} />
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
              {Msg[nome][1]}
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
                <p id="cv">{Msg[nome][0]}</p>
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
          {/*<CarouselTech items={author.acf.tools} />*/}
          {<CarouselTech items={Msg[nome][3]} />}
        </div>
      </div>
      <Footer toggleTheme={toggleTheme} value={value} />
    </div>
  );
};
