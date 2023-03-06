import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import MediaCard from './components/Card.js';
import Grid from '@mui/material/Grid'; // Grid version 1

const variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <header>
        <ResponsiveAppBar />
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h1>
      </header>
      <section id="Projects">
        <h2>Projects</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Grid container rowSpacing={1}  columnSpacing={5} columns={{ xs: 1, md: 3 }}>
            <Grid >
              <MediaCard />
            </Grid>
            <Grid >
              <MediaCard />
            </Grid>
            <Grid>
              <MediaCard />
            </Grid>
          </Grid>
          <div>
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </div>
          <div>
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
          </div>
          <div>
            <h3>Project 3</h3>
            <p>Description of project 3.</p>
          </div>
        </motion.div>
      </section>
      <section id="About">
        <h2>About Me</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>Hi, I'm John Doe, a web developer based in New York.</p>
          <p>I specialize in React and have experience with Node.js and Express.</p>
        </motion.div>
      </section>
      <section id="Contact">
        <h2>Contact Me</h2>
        <form>
          <motion.input
            type="text"
            placeholder="Name"
            whileHover={{ scale: 1.1 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            whileHover={{ scale: 1.1 }}
          />
          <motion.textarea
            placeholder="Message"
            whileHover={{ scale: 1.1 }}
          />
          <motion.button whileHover={{ scale: 1.1 }}>Send</motion.button>
        </form>
      </section>
    </motion.div>
  );
};

export default Portfolio;