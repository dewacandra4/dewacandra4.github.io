import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
// import Switch from '@mui/material/Switch';
import CssBaseline from "@mui/material/CssBaseline";
import Project from "./components/Project/Project";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import { createTheme } from "@mui/material/styles";
// import { Typography } from '@mui/material';

function App() {
  const [prefersDarkMode, setDarkMode] = useState(true);
  const [changeBG, setChangeBG] = useState(true);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#e28649",
      },
      mode: prefersDarkMode ? "dark" : "light",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            transition: "all 0.5s linear",
          },
        },
      },
    },
  });
  useEffect(() => {
    const themeType = localStorage.getItem("dark") || "dark";
    const bg = localStorage.getItem("dark") || "dark";
    if (themeType != "dark") {
      setDarkMode(false);
    }
    if (bg != "dark") {
      setChangeBG(false);
    }
  }, []);
  const handleDarkMode = (event) => {
    localStorage.setItem("dark", prefersDarkMode ? "light" : "dark");
    setDarkMode(!prefersDarkMode);
    localStorage.setItem("dark", changeBG ? "light" : "dark");
    setChangeBG(!changeBG);
  };
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline>
        <div className="App">
          <Navbar
            theme={theme}
            handleDarkMode={handleDarkMode}
            prefersDarkMode={prefersDarkMode}
          />
          <Hero changeBG={changeBG}/>
          <Project/>
          <Skill/>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
