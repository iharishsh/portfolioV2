// projectsData.js

import project1Image from '../../assets/covercode.jpg';
import project2Image from '../../assets/house.jpg';

import nike from '../../assets/projects/nike/cover.png';
import nikegifm from '../../assets/projects/nike/mob.gif';
import nikegifl from '../../assets/projects/nike/lap.gif';

import mernestate from '../../assets/projects/mern-estate/cover.png';
import mernestatel from '../../assets/projects/mern-estate/lap_home.gif';
import mernestatem from '../../assets/projects/mern-estate/mobile_home.gif';

//icons
import htmlIcon from '../../assets/coding/html.svg';
import cssIcon from '../../assets/coding/css.svg';
import tailwindcss from '../../assets/coding/tailwindcss.svg';
import reactjs from '../../assets/coding/reactjs.svg';
import vitejs from '../../assets/coding/vitejs.svg';
import javascript from '../../assets/coding/javascript.svg';
import mongodb from '../../assets/coding/mongodb.svg';
import expressjs from '../../assets/coding/expressjs.svg';
import nodejs from '../../assets/coding/nodejs.svg';
import fire from '../../assets/coding/fire.svg';

const projectsData = [
  {
    title: 'Portfolio',
    cover: project1Image,
    imgs: [],
    description: 'First version of my portfolio',
    para1: 'As design inspired from Minh Pham designer, I have decided to do this project to showcase myself.',
    para2: 'React JS is used to create my portfolio displaying about me, my skills, my projects and my experience.',
    tech: [htmlIcon, cssIcon],
    githubLink: 'https://github.com/iharishsh/portfolioV2',
    siteLink: '',
  },
  {
    title: 'Nike website',
    cover: nike,
    imgs: [nikegifm, nikegifl],
    description: 'Created using Tailwind CSS',
    para1: 'Designed a small web application using Vite, React, and Tailwind CSS to gain proficiency in responsive web development and user interface design.',
    tech: [htmlIcon, cssIcon, tailwindcss, javascript, reactjs, vitejs],
    githubLink: 'https://github.com/iharishsh/niketcss',
    siteLink: 'https://iharishsh.github.io/niketcss/',
  },
  {
    title: 'MERN Estate',
    cover: mernestate,
    imgs: [mernestatem, mernestatel],
    description: 'This project is a full-stack real estate marketplace built using the MERN (MongoDB, Express.js, React, Node.js) stack.',
    para1: '<b>User Authentication</b>: Implemented advanced authentication techniques using JWT, Firebase, and Google OAuth for secure and seamless user access.',
    para2: '<b>Property Listings (CRUD)</b>: Perform real-world Create, Read, Update, and Delete operations for property listings using MongoDB.',
    para3: '<b>User-friendly Interface</b>: Enhanced user experience with features like image uploads, property listing management, and more.',
    para4: '<b>Advanced Search Functionality</b>: Implemented cutting-edge search features to help users find properties efficiently.',
    tech: [htmlIcon, cssIcon, reactjs, javascript, mongodb, expressjs, nodejs, fire],
    githubLink: 'https://github.com/iharishsh/mern-estate',
    siteLink: 'https://mern-estate-vyj2.onrender.com/',
  },
  {
    title: 'Portfolio',
    cover: project1Image,
    imgs: [],
    description: 'First version of my portfolio',
    para1: 'As design inspired from Minh Pham designer, I have decided to do this project to showcase myself.',
    para2: 'React JS is used to create my portfolio displaying about me, my skills, my projects and my experience.',
    tech: [htmlIcon, cssIcon],
    githubLink: 'https://github.com/iharishsh/portfolioV2',
    siteLink: '',
  },
  {
    title: 'Portfolio',
    cover: project1Image,
    imgs: [],
    description: 'First version of my portfolio',
    para1: 'As design inspired from Minh Pham designer, I have decided to do this project to showcase myself.',
    para2: 'React JS is used to create my portfolio displaying about me, my skills, my projects and my experience.',
    tech: [htmlIcon, cssIcon],
    githubLink: 'https://github.com/iharishsh/portfolioV2',
    siteLink: '',
  },
  {
    title: 'Portfolio',
    cover: project1Image,
    imgs: [],
    description: 'First version of my portfolio',
    para1: 'As design inspired from Minh Pham designer, I have decided to do this project to showcase myself.',
    para2: 'React JS is used to create my portfolio displaying about me, my skills, my projects and my experience.',
    tech: [htmlIcon, cssIcon],
    githubLink: 'https://github.com/iharishsh/portfolioV2',
    siteLink: '',
  },
];

export default projectsData;
