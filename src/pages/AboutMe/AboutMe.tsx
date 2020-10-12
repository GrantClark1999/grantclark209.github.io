import React from 'react';
import classes from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <div className={classes.root}>
        <h2 style={{ marginBottom: '0' }}>About Me</h2>
        <div className={classes.content}>
          <div className={classes['profile-pic__caption']}>
            <p>
              I am currently a 4th year student at the
              <strong> University of California, Santa Barbara</strong> studying
              <strong> Computer Science</strong>.
            </p>
            <p>
              I grew up in the small but beautiful wine town of
              <strong> Lodi, California</strong> and lived there for most of my
              life. Before my senior year of high school, my family and I moved
              down
              <strong> Temecula, California</strong> where I've been living for
              the better part of 4 years.
            </p>
            <p>
              When I'm not studying or busy with school work, I like to spend
              the better part of my day learning new tools and applying to my
              personal projects. In my remaining free time, I usually enjoy
              playing games with online friends and streaming those games to
              interact with people from all walks of life and to have fun with
              one of the personal projects I've developed.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.root}>
        <h2 style={{ marginBottom: '0' }}>My Family</h2>
      </div>
    </>
  );
}
