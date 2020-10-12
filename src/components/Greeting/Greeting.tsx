import React from 'react';
import Typing from 'react-typing-animation';
import classes from './Greeting.module.css';

export default function Greeting() {
  return (
    <Typing
      className={classes.greeting}
      cursorClassName={classes['cursor-white']}
      speed={80}
      startDelay={1000}
    >
      <span>Hello, world!</span>
      <Typing.Delay ms={1000} />
      <br />
      <span>My name is Grant Clark.</span>
      <Typing.Delay ms={1000} />
      <br />
      <span>I am a Gamer</span>
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
  );
}
