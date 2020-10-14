import React, { useState } from 'react';
import clsx from 'clsx';
import { hot } from 'react-hot-loader/root';
import { Element } from 'react-scroll';
import Landing from './pages/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import ContactMe from './pages/ContactMe/ContactMe';
import classes from './App.module.css';

function App() {
  const [onLanding, setOnLanding] = useState(true);

  return (
    <div className={classes.app}>
      <div
        className={clsx(
          classes['background-black'],
          !onLanding && classes['background-reveal']
        )}
      >
        {onLanding ? (
          <Landing unmount={() => setOnLanding(false)} />
        ) : (
          <>
            <Navbar />
            <Home />
            <Element id='about' name='about'>
              <AboutMe />
            </Element>
            <Element id='skills' name='skills'>
              <Skills />
            </Element>
            <Element id='projects' name='projects'>
              <Projects />
            </Element>
            <Element id='contact' name='contact'>
              <ContactMe />
            </Element>
          </>
        )}
      </div>
    </div>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
