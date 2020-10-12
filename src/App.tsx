import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import clsx from 'clsx';
import Landing from './pages/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import Greeting from './components/Greeting/Greeting';
import AboutMe from './pages/AboutMe/AboutMe';
import classes from './App.module.css';

function App() {
  const [onLanding, setOnLanding] = useState(true);

  return (
    <div className={classes.App}>
      <div className={clsx(classes['background-black'], !onLanding && classes['background-reveal'])}>
        {onLanding ? (
          <Landing unmount={() => setOnLanding(false)} />
        ) : (
          <>
            <Navbar />
            <main className={classes.Content}>
              <ProfilePicture />
              <Greeting />
              {/* <AboutMe /> */}
            </main>
          </>
        )}
      </div>
    </div>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
