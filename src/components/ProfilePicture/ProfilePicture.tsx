import React from 'react';
import profilePic from '../../assets/me.jpg';
import classes from './ProfilePicture.module.css';

export default function ProfilePicture() {
  return (
    <img
      src={profilePic}
      alt='Grant Clark'
      className={classes['profile-picture']}
    />
  );
}
