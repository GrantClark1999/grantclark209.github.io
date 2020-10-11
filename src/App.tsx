import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import classes from './App.module.css';

function App() {
  const [onLanding, setOnLanding] = useState(true);

  return (
    <div className={classes.App}>
      {onLanding ? <Landing unmount={() => setOnLanding(false)}/> : <p>No Longer On Landing</p>}
    </div>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
