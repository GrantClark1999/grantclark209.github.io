import React from 'react';
import {
  faBirthdayCake,
  faCalendar,
  faHome,
  faMapMarkerAlt,
  faUsers,
  faDog,
  faCat,
  faHeadphonesAlt,
} from '@fortawesome/free-solid-svg-icons';
import CarouselSlider from 'react-carousel-slider';
import SmallInfo from './SmallInfo/SmallInfo';
import classes from './AboutMe.module.css';

// Pictures
import ClarkFamilyPic from '../../assets/Family/ClarkFamily.jpg';
import CruisePic from '../../assets/Family/Cruise.jpg';
import DogsPic from '../../assets/Family/Dogs.jpg';
import PKitty1Pic from '../../assets/Family/PKitty1.jpg';
import PKitty2Pic from '../../assets/Family/PKitty2.jpg';

export default function AboutMe() {
  const familyPics = [
    {
      des: 'Clark Family in Cabo San Lucas\nMe, Mia, Bill, Jamie, Ava',
      imgSrc: ClarkFamilyPic,
    },
    {
      des: 'My sister and I on a cruise in 2008',
      imgSrc: CruisePic,
    },
    {
      des: 'Chit, Penny, and Buster (Top-Down)',
      imgSrc: DogsPic,
    },
    {
      des: 'My Cat (P-Kitty)',
      imgSrc: PKitty1Pic,
    },
    {
      des: 'She can be quite distracting',
      imgSrc: PKitty2Pic,
    },
  ].map((item, index) => (
    <div>
      <img
        src={item.imgSrc}
        className={classes['family-picture']}
        alt={item.des}
      />
      <p className={classes['family-picture-description']}>{item.des}</p>
    </div>
  ));

  return (
    <>
      <div className={classes.root}>
        <h2>About Me</h2>
        <p>
          Hi, I'm Grant Clark and I'm a 4th year Computer Science major at the
          University of California, Santa Barbara. I like to dedicate a lot of
          my time to exploring different areas of computer science and software
          development to better understand myself and where I would like to work
          after college.
        </p>
        <p>
          In my free time, I enjoy playing video games and occasionally
          streaming myself playing games or developing, as a way to interact
          with others with the same interests. Additionally, one of my personal
          projects tied into straming, which augmented the experience and made
          it more interactive between streamer and viewer.
        </p>
        <div className={classes['quick-info']}>
          <SmallInfo icon={faBirthdayCake} label='Birthday:'>
            April 28, 1999
          </SmallInfo>
          <SmallInfo icon={faCalendar} label='Age:'>
            21
          </SmallInfo>
          <SmallInfo icon={faHome} label='Born In:'>
            Lodi, California
          </SmallInfo>
          <SmallInfo icon={faMapMarkerAlt} label='Location:'>
            Temecula, California
          </SmallInfo>
          <SmallInfo icon={faUsers} label='Siblings:'>
            Mia (18), Ava (16)
          </SmallInfo>
          <SmallInfo icon={faDog} label='Dogs:'>
            Buster, Penny, Chit
          </SmallInfo>
          <SmallInfo icon={faCat} label='Cats:'>
            P-Kitty, Dwight, Lou, Sugar
          </SmallInfo>
          <SmallInfo icon={faHeadphonesAlt} label='Music:'>
            Pop, Lofi, Electronic
          </SmallInfo>
        </div>
        <h3>My Family</h3>
        <CarouselSlider
          slideCpnts={familyPics}
          manner={{ autoSliding: { interval: '8s' } }}
          buttonSetting={{ placeOn: 'middle-inside' }}
        />

        <h3>Hobbies</h3>
        <p>
          My biggest hobby is gaming. My main games currently are Rocket League,
          Rainbox Six Siege, and Among Us. Rocket League is my current favorite,
          with it's physics-based car soccer gameplay, it's hard not to get
          hooked.
        </p>
        <p>
          Alongside gaming, when I'm not too busy, I enjoy streaming myself
          playing those games, interacting with others who enjoy them as well,
          and using it as a means to test some personal projects. Currently, my
          stream is outfitted with a custom bot that allows viewers to control
          certain IoT devices that I set up. In my case, people can exchange
          channel points (a virtual currency earned only through watch time) to
          activate a strobe light in my face for a number of seconds.
        </p>
        <p>
          My plan is to expand this viewer-streamer interaction to other
          streamers in the Twitch community and allow them to do similar things,
          like changing room LED color, or making the streamer close out of
          their game.
        </p>
      </div>
    </>
  );
}
