import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import classes from './App.module.css';

function App() {
  const [onLanding, setOnLanding] = useState(true);

  return (
    <div className={classes.App}>
      {onLanding ? (
        <Landing unmount={() => setOnLanding(false)} />
      ) : (
        <>
          <Navbar />
          <main className={classes.Content}>
            <Home />
          </main>
        </>
      )}
    </div>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
