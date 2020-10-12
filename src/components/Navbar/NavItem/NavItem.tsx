import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

type NavItemProps = {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}

export default function NavItem({ to, exact=false, children }: NavItemProps) {
  return (
    <li className={classes['nav-item']}>
      <NavLink to={to} activeClassName={classes.active} exact={exact}>
        {children}
      </NavLink>
    </li>
  );
}
