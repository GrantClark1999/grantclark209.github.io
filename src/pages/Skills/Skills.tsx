import React from 'react';
import classes from './Skills.module.css';

// Language Icons
import CPP from '../../assets/Skills/Languages/C++.png';
import CSS3 from '../../assets/Skills/Languages/CSS3.png';
import HTML5 from '../../assets/Skills/Languages/HTML5.png';
import Java from '../../assets/Skills/Languages/Java.png';
import JavaScript from '../../assets/Skills/Languages/Javascript.jpeg';
import Python from '../../assets/Skills/Languages/Python.png';
import TypeScript from '../../assets/Skills/Languages/Typescript.jpg';

// Tool Icons
import Electron from '../../assets/Skills/Tools/Electron.jpg';
import Git from '../../assets/Skills/Tools/Git.png';
import MaterialUI from '../../assets/Skills/Tools/MaterialUI.png';
import MongoDB from '../../assets/Skills/Tools/MongoDB.png';
import NodeJS from '../../assets/Skills/Tools/NodeJS.png';
import ReactIcon from '../../assets/Skills/Tools/React.png';
import Redux from '../../assets/Skills/Tools/Redux.png';
import Selenium from '../../assets/Skills/Tools/Selenium.jpg';
import SpringBoot from '../../assets/Skills/Tools/SpringBoot.png';
import Webpack from '../../assets/Skills/Tools/Webpack.png';

// Service Icons
import AWS from '../../assets/Skills/Services/AWS.jpg';
import Firebase from '../../assets/Skills/Services/Firebase.jpg';
import Github from '../../assets/Skills/Services/Github.png';
import Lambda from '../../assets/Skills/Services/Lambda.png';
import S3 from '../../assets/Skills/Services/S3.png';

const languages = [
  {
    name: 'C++',
    imgSrc: CPP,
    to: 'https://stackshare.io/cplusplus',
  },
  {
    name: 'CSS 3',
    imgSrc: CSS3,
    to: 'https://stackshare.io/css-3',
  },
  {
    name: 'HTML 5',
    imgSrc: HTML5,
    to: 'https://stackshare.io/html5',
  },
  {
    name: 'Java',
    imgSrc: Java,
    to: 'https://stackshare.io/java',
  },
  {
    name: 'Javascript',
    imgSrc: JavaScript,
    to: 'https://stackshare.io/javascript',
  },
  {
    name: 'Python',
    imgSrc: Python,
    to: 'https://stackshare.io/python',
  },
  {
    name: 'Typescript',
    imgSrc: TypeScript,
    to: 'https://stackshare.io/typescript',
  },
];
const services = [
  {
    name: 'AWS',
    imgSrc: AWS,
    to: 'https://aws.amazon.com/',
  },
  {
    name: 'Firebase',
    imgSrc: Firebase,
    to: 'https://stackshare.io/firebase',
  },
  {
    name: 'Github',
    imgSrc: Github,
    to: 'https://stackshare.io/github',
  },
  {
    name: 'Lambda',
    imgSrc: Lambda,
    to: 'https://stackshare.io/aws-lambda',
  },
  {
    name: 'S3',
    imgSrc: S3,
    to: 'https://stackshare.io/amazon-s3',
  },
];
const tools = [
  {
    name: 'Electron',
    imgSrc: Electron,
    to: 'https://stackshare.io/firebase',
  },
  {
    name: 'Git',
    imgSrc: Git,
    to: 'https://stackshare.io/git',
  },
  {
    name: 'Material UI',
    imgSrc: MaterialUI,
    to: 'https://stackshare.io/material-ui',
  },
  {
    name: 'MongoDB',
    imgSrc: MongoDB,
    to: 'https://stackshare.io/mongodb',
  },
  {
    name: 'NodeJS',
    imgSrc: NodeJS,
    to: 'https://stackshare.io/nodejs',
  },
  {
    name: 'React',
    imgSrc: ReactIcon,
    to: 'https://stackshare.io/react',
  },
  {
    name: 'Redux',
    imgSrc: Redux,
    to: 'https://stackshare.io/redux',
  },
  {
    name: 'Selenium',
    imgSrc: Selenium,
    to: 'https://stackshare.io/selenium',
  },
  {
    name: 'Spring Boot',
    imgSrc: SpringBoot,
    to: 'https://stackshare.io/spring-boot',
  },
  {
    name: 'Webpack',
    imgSrc: Webpack,
    to: 'https://stackshare.io/webpack',
  },
];

export default function Skills() {
  return (
    <div className={classes.root}>
      <h2>Skills</h2>
      <h3>Languages</h3>
      <div className={classes['icon-container']}>
        {languages.map((item, index) => (
          <a
            href={item.to}
            className={classes.icon}
            style={{ backgroundImage: `url(${item.imgSrc})` }}
            target='_blank'
            rel='noopener noreferrer'
          >
            {item.name}
          </a>
        ))}
      </div>
      <h3>Tools / Frameworks</h3>
      <div className={classes['icon-container']}>
        {tools.map((item, index) => (
          <a
            href={item.to}
            className={classes.icon}
            style={{ backgroundImage: `url(${item.imgSrc})`, margin: '20px 35px' }}
            target='_blank'
            rel='noopener noreferrer'
          >
            {item.name}
          </a>
        ))}
      </div>
      <h3>Services</h3>
      <div className={classes['icon-container']}>
        {services.map((item, index) => (
          <a
            href={item.to}
            className={classes.icon}
            style={{ backgroundImage: `url(${item.imgSrc})` }}
            target='_blank'
            rel='noopener noreferrer'
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
