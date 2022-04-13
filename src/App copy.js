import './App.css';
import Navbar from './components/Navbar/Navbar';

import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';
import Project from './components/Project/Project';
import Hero from './components/Hero/Hero';
// import { Typography } from '@mui/material';

function App() {

  const [prefersDarkMode, setDarkMode] = useState(false);
  const [changeBG, setChangeBG] = useState(false);
  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#e28649',
          },
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const handleDarkMode = (event) => {
    setDarkMode(!prefersDarkMode);
    setChangeBG(!changeBG);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline >
        <div className="App" >
          <Navbar  theme = { theme } handleDarkMode= { handleDarkMode } prefersDarkMode = { prefersDarkMode } />
          <Hero changeBG = { changeBG }/>
          
          <Project/>

        </div>
       </CssBaseline> 
    </ThemeProvider>

  );
}

export default App;
