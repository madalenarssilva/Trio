import React from "react";
import Card from "../../components/Cards/CardProject";
import Footer from "../../components/Footer/Footer";
import "./Projects.css";

const Project = () => {
  return (
    <>
      <div className="cartas">
        {/* <Card/> */}
        <Card
          backgroundImage="/background_illustration.png"
          frontImage="/front_illustration.png"
          textImage="Illustration"
        />

        <div style={{ backgroundColor: "blue" }} />
        <div style={{ backgroundColor: "pink" }} />
        <div style={{ backgroundColor: "green" }} />
        <div style={{ backgroundColor: "white" }} />
        <div style={{ backgroundColor: "aliceblue" }} />
      </div>
      <Footer />
    </>
  );
};

export default Project;
