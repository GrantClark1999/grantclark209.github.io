import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './SmallInfo.module.css';

type SmallInfoProps = {
  icon: IconProp;
  label: String;
  children: String;
};

export default function SmallInfo({ icon, label, children }: SmallInfoProps) {
  return (
    <div className={classes.root}>
      <div className={classes.test}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <span>
        <label>{label}</label>
        {children}
      </span>
    </div>
  );
}
