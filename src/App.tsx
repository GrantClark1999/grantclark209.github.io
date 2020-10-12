import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import Greeting from './components/Greeting/Greeting';
import AboutMe from './pages/AboutMe/AboutMe';
import classes from './App.module.css';

function App() {
  const [onLanding, setOnLanding] = useState(true);

  return (
    <Router>
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
              <main className={classes.content}>
                <Switch>
                  <Route path='/about'></Route>
                  <Route path='/interests'></Route>
                  <Route path='/hobbies'></Route>
                  <Route path='/contact-me'></Route>
                  <Route path='/'>
                    <ProfilePicture />
                    <Greeting />
                  </Route>
                </Switch>
              </main>
            </>
          )}
        </div>
      </div>
    </Router>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
