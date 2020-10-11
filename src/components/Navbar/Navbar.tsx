import React from 'react';
import clsx from 'clsx';
import logo from '../../assets/GC_Logo_Black.svg';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={clsx(classes.Navbar, classes.FixedScroll)}>
      <img src={logo} alt='logo' className={classes.SmallLogo} />
    </nav>
  )
}
