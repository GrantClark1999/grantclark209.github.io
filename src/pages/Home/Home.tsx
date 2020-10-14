import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import Greeting from '../../components/Greeting/Greeting';
import classes from './Home.module.css';

export default function Home() {
  const [doneTyping, setDoneTyping] = useState(false);
  return (
    <div className={classes.home}>
      <ProfilePicture />
      <Greeting onFinishedTyping={() => setDoneTyping(true)} />
      {doneTyping ? (
        <Link to='about' className={classes['arrow']} spy={true} smooth>
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      ) : null}
    </div>
  );
}
