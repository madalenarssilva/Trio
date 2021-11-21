// rafce para criar template
import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router"; /*Hook*/
import "../../components/Footer/Footer.css";
import "react-image-shadow/assets/index.css";
import "./Home.css";
import { transform } from "framer-motion";

const MAX_OFFSET = 20;

export const Home = () => {
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
          <div className="light-mode">
            <img className="light-icon" src="/light.png" alt="logo-luz" />
            <p
              onMouseOver={(e) => e.target.classList.add("color-animation")}
              onMouseLeave={(e) => e.target.classList.remove("color-animation")}
            >
              Light mode
            </p>
          </div>
        </div>
        <div className="social-media">
          <img src="/facebook-icon.svg" width="18px" />
          <img src="/instagram-icon.svg" width="90px" />
        </div>
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

      <div className="text">
        <p>We are three girls</p>
        <p>who love coding, design</p>
      </div>

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
          perspective: "100em",
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
        style={{ opacity: estadoVisibilidade }}
        onMouseOver={() => setEstadoVisibilidade(1)}
        onMouseLeave={() => setEstadoVisibilidade(0)}
        src="/Mancha azul.svg"
      />
      <img
        className="quote-coffee"
        style={{ opacity: estadoVisibilidade }}
        onMouseOver={() => setEstadoVisibilidade(1)}
        onMouseLeave={() => setEstadoVisibilidade(0)}
        src="/coffeeQuote.svg"
      />
    </div>
  );
};
