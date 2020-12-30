import React from 'react';
import TelaHance from '../../assets/TelaHance.png';
import FuzBot from '../../assets/FuzBot.png';
import RLMafia from '../../assets/RLMafia.png';
import Website from '../../assets/Website.png';
import classes from './Projects.module.css';

export default function Projects() {
  return (
    <div className={classes.root}>
      <h2>Projects</h2>
      <div className={classes['flex-container']}>
        <div className={classes.card}>
          <a
            href='https://github.com/tkomarlu/TeladocCapstone'
            className={classes['card-content']}
            style={{ backgroundImage: `url(${TelaHance})` }}
            target='_blank'
            rel='noopener noreferrer'
          >
            TelaHance Capstone Project Example UI
          </a>
        </div>
        <div className={classes.description}>
          <h3>TelaHance</h3>
          <p>
            A project for Teladoc™ Health for patients and doctors to view
            transcribed consults, and assist doctors in making the right
            diagnosis while working remote. This project is a part of my ongoing
            Capstone course for UCSB.
          </p>
        </div>
      </div>
      <div className={classes['flex-container-reverse']}>
      <div className={classes.description}>
          <h3>FuzBot</h3>
          <p>
            A Work-In-Progress Twitch.tv desktop application that allows
            streamers to connect their channel rewards to IoT devices in their
            home to allow for an a more connected viewing experience.
            Applications include: activating a strobe light during a game,
            changing the room light color, exiting the streamer's game
            application, and many more.
          </p>
        </div>
        <div className={classes.card}>
          <a
            href='https://github.com/GrantClark209/FuzBot'
            className={classes['card-content']}
            style={{ backgroundImage: `url(${FuzBot})` }}
            target='_blank'
            rel='noopener noreferrer'
          >
            FuzBot WIP User Interface
          </a>
        </div>
      </div>
      <div className={classes['flex-container']}>
        <div className={classes.card}>
          <a
            href='https://github.com/GrantClark209/grantclark209.github.io'
            className={classes['card-content']}
            style={{ backgroundImage: `url(${Website})` }}
            target='_blank'
            rel='noopener noreferrer'
          >
            FuzBot WIP User Interface
          </a>
        </div>
        <div className={classes.description}>
          <h3>Personal Website</h3>
          <p>
            This website was created using React, as a way to introduce myself
            and demonstrate some of my skillset. As I learn new designs and
            skills, I will be updating this site to maintain a modern appeal.
          </p>
        </div>
      </div>
      <div className={classes['flex-container-reverse']}>
        <div className={classes.description}>
          <h3>RL Mafia</h3>
          <p>
            A Discord Bot that helps people play a version of the infamous
            "Mafia" or "Town of Salem" game in Rocket League. RLMafia uses
            reaction-based events to allow for concurrent and user-friendly
            playing experiences.
          </p>
        </div>
        <div className={classes.card}>
          <a
            href='https://github.com/GrantClark209/RLMafia'
            className={classes['card-content']}
            style={{ backgroundImage: `url(${RLMafia})` }}
            target='_blank'
            rel='noopener noreferrer'
          >
            FuzBot WIP User Interface
          </a>
        </div>
      </div>
    </div>
  );
}
