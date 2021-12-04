// rafce para criar template
import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router"; /*Hook*/
import "../../components/Footer/Footer.css";
import "react-image-shadow/assets/index.css";
import "./Home.css";
import { motion, transform } from "framer-motion";
import BlobCursor from "../../components/Cursor/Cursor";

const MAX_OFFSET = 20;

export const Home = ({toggleTheme,value}) => {
  const navigate = useNavigate();
  const [estadoVisibilidade, setEstadoVisibilidade] = useState(0);

  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const onMouseMove = useCallback((e) => {
    const rightSide = e.clientX > window.screen.width / 2;
    const inputRangeX = rightSide
      ? [window.screen.width / 2, window.screen.width]
      : [0, window.screen.width / 2];
    const outputRangeX = rightSide ? [0, MAX_OFFSET] : [-MAX_OFFSET, 0];

    const bottomSide = e.clientY > window.screen.height / 2;
    const inputRangeY = bottomSide
      ? [window.screen.height / 2, window.screen.height]
      : [0, window.screen.height / 2];
    const outputRangeY = bottomSide ? [0, MAX_OFFSET] : [-MAX_OFFSET, 0];

    setValues({
      x: -transform(e.clientX, inputRangeX, outputRangeX),
      y: -transform(e.clientY, inputRangeY, outputRangeY),
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <div className="homePage">
      <div className="footer footer-home">
        <div
          className="table"
          style={{
            transition: "ease-in",
            transform: `translateX(${values.x}px) translateY(${values.y}px) `,
          }}
        ></div>
        <div style={{ position: "absolute" }}>
          <motion.div
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
            className="light-mode"
           
          >
            <img
              className="light-icon"
              src="/light.png"
              alt="logo-luz"
              style={{ zIndex: "1000" }}
            />
            <p
              onMouseOver={(e) => e.target.classList.add("color-animation")}
              onMouseLeave={(e) => e.target.classList.remove("color-animation")}
              onClick={toggleTheme}
            >
              {value}
            </p>
          </motion.div>
        </div>
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
          className="social-media"
        >
          <img src="/facebook-icon.svg" width="18px" />
          <img src="/instagram-icon.svg" width="90px" />
        </motion.div>
      </div>

      {/* Estáticas */}
      <img className="laranja" src="/Mancha laranja.svg" />
      <img className="rosa" src="/Mancha rosa.svg" />
      <img
        className="roxo"
        src="/Mancha roxa.svg"
        style={{
          transition: "ease-in",
          transform: `translateX(${values.x}px) translateY(${values.y}px) `,
        }}
      />
      <img
        className="copo"
        src="/Copo cafe.svg"
        style={{
          transition: "ease-in",
          transform: `translateX(${values.x}px) translateY(${values.y}px) `,
        }}
      />

      <motion.div
        initial={{
          translateX: "-50vw",
        }}
        animate={{
          translateX: 0,
        }}
        transition={{
          type: "spring",
          duration: 1,
        }}
        className="text"
      >
        <p>We are three girls</p>
        <p>who love coding, design</p>
      </motion.div>

      {/* Dinâmicas */}
      <img
        className="pc"
        onMouseOver={(e) => {
          e.target.classList.add("foto_blur");
        }}
        onMouseLeave={(e) => {
          e.target.classList.remove("foto_blur");
        }}
        src="/PC.svg"
        onClick={() => navigate("/projects")}
        style={{
          transition: "ease-in",
          transform: `translateX(${values.x}px) translateY(${values.y}px)`,
        }}
      />
      <img
        className="telemovel"
        onMouseOver={(e) => {
          e.target.classList.add("foto_blur");
        }}
        onMouseLeave={(e) => {
          e.target.classList.remove("foto_blur");
        }}
        src="/Telemovel.svg"
        onClick={() => navigate("/contact")}
        style={{
          transition: "ease-in",
          transform: `translateX(${values.x}px) translateY(${values.y}px) `,
        }}
      />
      <img
        className="foto"
        onMouseOver={(e) => {
          e.target.classList.add("foto_blur");
        }}
        onMouseLeave={(e) => {
          e.target.classList.remove("foto_blur");
        }}
        src="/photoMain.png"
        onClick={() => navigate("/about")}
        style={{
          transition: "ease-in",
          transform: `translateX(${values.x}px) translateY(${values.y}px) `,
        }}
      />

      <img
        className="azul"
        style={{ opacity: 0 }}
        onMouseOver={() =>
          document.getElementById("cursor-blob").classList.add("dot-scale")
        }
        onMouseLeave={() =>
          document.getElementById("cursor-blob").classList.remove("dot-scale")
        }
        src="/Mancha azul.svg"
      />
      <p className="quote-coffee" style={{ zIndex: "1000" }}>
        and a looot of coffee
      </p>
      {/*<img
        className="quote-coffee"
        style={{ opacity: estadoVisibilidade, zIndex: "1000" }}
        onMouseOver={() => {
          setEstadoVisibilidade(1);
        }}
        onMouseLeave={() => {
          setEstadoVisibilidade(0);
        }}
        src="/coffeeQuote.svg"
      />*/}
    </div>
  );
};
