import React from 'react';
import logo from '../../assets/GC_Logo_White.svg';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <img src={logo} alt='logo' className={classes.SmallLogo} />
    </nav>
  )
}
