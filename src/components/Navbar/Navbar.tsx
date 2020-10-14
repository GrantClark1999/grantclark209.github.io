import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/GC_Logo_Black.svg';
import NavItem from './NavItem/NavItem';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <img src={logo} alt='logo' className={classes['small-logo']} onClick={() => scroll.scrollToTop()} />
      <ul>
        <NavItem to='about'>About Me</NavItem>
        <NavItem to='skills'>Skills</NavItem>
        <NavItem to='projects'>Projects</NavItem>
        <NavItem to='contact'>Contact Me</NavItem>
      </ul>
    </nav>
  );
}
