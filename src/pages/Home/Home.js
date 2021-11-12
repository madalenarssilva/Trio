// rafce para criar template
import React, { useEffect } from "react";
import { useNavigate } from "react-router"; /*Hook*/
import "../../components/Footer/Footer.css";
import "react-image-shadow/assets/index.css";
import "./Home.css";
import { useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const [estadoVisibilidade, setEstadoVisibilidade] = useState(0);

  return (
    <div className="homePage">
      <div className="footer footer-home">
        <div>
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
      <img className="roxo" src="/Mancha roxa.svg" />
      <img className="copo" src="/Copo cafe.svg" />

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
