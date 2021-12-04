import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Link } from "react-router-dom";
/*import "./App.css";*/
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import Project from "./pages/Projects/Project";
import { ProjectInfo } from "./pages/Project/Project";
import Cursor from "./components/Cursor/Cursor";
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './globalStyle';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [colorFont, setColorFont] = useState('white');
  const [colorFont2, setColorFont2] = useState('#292929');
  const [src, setSrc] = useState('/logo.svg');
  const [text , setText] = useState('Light mode');
  const [iconS, setIconS] = useState("/search.svg");
  const [iconF, setIconF] = useState("/filter.svg");

  const toggleTheme = () => {
    if (theme === 'light') {
      console.log("setting dark!!");
      setTheme('dark');
      setColorFont('white');
      setColorFont2('#292929');
      setSrc('/logo.svg');
      setText('Light mode');
      setIconS('/search.svg');
      setIconF('/filter.svg');
      
    } else {
      console.log("setting light!!");
      setTheme('light');
      setColorFont('#292929');
      setColorFont2('white');
      setSrc('/logoLight.svg');
      setText('Dark mode');
      setIconS('/searchLight.svg');
      setIconF('/filterLight.svg');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        {/* Definir uma navbar em todas as páginas)*/}
        <NavBar toggleTheme={toggleTheme} font={colorFont} src={src}/>
        {/* Definir cursor em todas as páginas)*/}
        <Cursor color={colorFont}/>
        {/* Definir aqui as rotas do projeto (para comentar várias linhas: ctr + k + ctrl + c)*/}
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} value={text}/>} />
          <Route path="projects" element={<Project toggleTheme={toggleTheme} value={text} iconS={iconS} iconF={iconF} font={colorFont}/>} />
          <Route path="projects/:id" element={<ProjectInfo toggleTheme={toggleTheme} value={text} font={colorFont}/>} />
          <Route path="about" element={<About toggleTheme={toggleTheme} value={text} font={colorFont} font2={colorFont2}/>} />
          <Route path="about/madalena" element={<AboutMe nome={"madalena"} toggleTheme={toggleTheme} value={text}/>} />
          <Route path="about/ines" element={<AboutMe nome={"ines"} toggleTheme={toggleTheme} value={text}/>} />
          <Route path="about/beatriz" element={<AboutMe nome={"beatriz"} toggleTheme={toggleTheme} value={text}/>} />
          <Route path="contact" element={<Contact toggleTheme={toggleTheme} value={text} font={colorFont2}/>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};
export default App;
