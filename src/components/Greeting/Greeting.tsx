import React, { useState } from 'react';
import Typing from 'react-typing-animation';
import classes from './Greeting.module.css';

type GreetingProps = {
  onFinishedTyping: () => void;
};

export default function Greeting({ onFinishedTyping }: GreetingProps) {
  const [finishedFirst, setFinishedFirst] = useState(false);

  return (
    <>
      <Typing
        className={classes['greeting-hello']}
        cursorClassName={classes['cursor-white']}
        speed={80}
        startDelay={3000}
        onFinishedTyping={() => setFinishedFirst(true)}
      >
        <span>Hello, world!</span>
        <Typing.Delay ms={750} />
        <Typing.Backspace count={6} />
        <span>I'm Grant Clark</span>
        <Typing.Delay ms={1000} />
      </Typing>
      {finishedFirst ? (
        <Typing
          className={classes['greeting-description']}
          cursorClassName={classes['cursor-white']}
          speed={80}
          onFinishedTyping={() => onFinishedTyping()}
        >
          <span>I'm a Gamer</span>
          <Typing.Backspace count={5} delay={1000} />
          <Typing.Delay ms={500} />
          <span>Streamer</span>
          <Typing.Backspace count={8} delay={1000} />
          <Typing.Delay ms={500} />
          <span>Designer</span>
          <Typing.Backspace count={8} delay={1000} />
          <Typing.Delay ms={500} />
          <span>Developer</span>
          <Typing.Delay ms={500} />
        </Typing>
      ) : null}
    </>
  );
}
