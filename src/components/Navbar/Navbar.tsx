import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/GC_Logo_White.svg';
import NavItem from './NavItem/NavItem';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <NavLink to='/' exact>
        <img src={logo} alt='logo' className={classes['small-logo']} />
      </NavLink>
      <ul>
        <NavItem to='/about'>About Me</NavItem>
        <NavItem to='/interests'>Interests</NavItem>
        <NavItem to='/hobbies'>Hobbies</NavItem>
        <NavItem to='/contact-me'>Contact Me</NavItem>
      </ul>
    </nav>
  );
}
