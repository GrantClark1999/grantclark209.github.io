import React, { useState, useEffect } from 'react';
import classes from './Landing.module.css';
import Logo from './Logo/Logo';

type LandingProps = {
  unmount: () => void;
}

export default function Landing({ unmount }: LandingProps) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setTimeout(unmount, 3500);
    }
  }, [clicked, unmount]);

  return (
    <div className={classes.Body} onClick={() => setClicked(true)}>
      <Logo animateToLogo={clicked} />
    </div>
  );
}
