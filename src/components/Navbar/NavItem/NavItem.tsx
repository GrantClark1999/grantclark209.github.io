import React from 'react';
import { Link } from 'react-scroll';
import classes from './NavItem.module.css';

type NavItemProps = {
  to: string;
  children: React.ReactNode;
}

export default function NavItem({ to, children }: NavItemProps) {
  return (
    <li className={classes['nav-item']}>
      <Link to={to} activeClass={classes.active} spy={true} smooth>
        {children}
      </Link>
    </li>
  );
}
