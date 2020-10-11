import React from 'react';
import Typing from 'react-typing-animation';
import classes from './Home.module.css';

export default function Home() {
  return (
    <>
      <Typing className={classes.Greeting} speed={100} startDelay={1000}>
        <span>Hello, world!</span>
        <Typing.Delay ms={1000} />
        <br />
        <span>My name is Grant Clark.</span>
        <Typing.Delay ms={1000} />
        <br />
        <Typing.Speed ms={80} />
        <span>I'm a Gamer</span>
        <Typing.Delay ms={750} />
        <Typing.Backspace count={5} />
        <span>Streamer</span>
        <Typing.Delay ms={750} />
        <Typing.Backspace count={8} />
        <span>Designer</span>
        <Typing.Delay ms={750} />
        <Typing.Backspace count={8} />
        <span>Developer.</span>
        <Typing.Delay ms={500} />
      </Typing>
      {/* <div className={classes.ContentContainer}>
        <h1>About Me</h1>
      </div> */}
    </>
  );
}
