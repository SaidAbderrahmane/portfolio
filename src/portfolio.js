import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import MediaCard from './components/Card.js';
import Grid from '@mui/material/Grid'; 
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Skills from './components/Skills';

const variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
    <header>
      <ResponsiveAppBar />
      <About />
      <Projects/>
      <Experience/>
      <Skills/>
    </header>
    </ThemeProvider>
  );
};

export default Portfolio;