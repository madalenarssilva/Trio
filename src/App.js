import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import Project from "./pages/Projects/Project";

const App = () => {
  return (
    <div className="App">
      {/* Definir uma navbar em todas as páginas)*/}
      <NavBar />

      {/* Definir aqui as rotas do projeto (para comentar várias linhas: ctr + k + ctrl + c)*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="about/madalena" element={<AboutMe nome={"madalena"} />} />
        <Route path="about/ines" element={<AboutMe nome={"ines"} />} />
        <Route path="about/beatriz" element={<AboutMe nome={"beatriz"} />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;