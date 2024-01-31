import portfoliov2 from '../../assets/projects/portfoliov2/cover.png';

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
    cover: portfoliov2,
    imgs: [],
    description: 'Second version of my portfolio',
    projectOverview: {
      keyFeatures: [
        "<b>Design Inspiration</b>: Inspired by Minh Pham, the portfolio embodies a clean and visually appealing design.",
        "<b>Comprehensive Showcase</b>: Provides insights into my background, skills, experience, and featured projects.",
        "<b>Innovative Effects</b>: Noteworthy features include GSAP's ScrollTrigger effects, enhancing the portfolio's visual appeal and user interaction.",
        "<b>CSS Plays</b>: Leveraging creative CSS techniques, the portfolio incorporates aesthetically pleasing styles to captivate the audience.",
        "<b>Device Responsiveness</b>: Optimized for various devices, adapting seamlessly to different screen sizes."
      ],
      goalsAchieved: [
        "<b>Self-Representation</b>: Effectively communicates my personality, skills, and aspirations.",
        "<b>Engagement</b>: Engages visitors with smooth animations and an intuitive design.",
        "<b>Professional Showcase</b>: Serves as a professional showcase for potential clients, employers, and collaborators."
      ],
      futurePlans: [
        "Continual refinement and expansion of content.",
        "Integration of additional features and projects.",
        "Ongoing updates to reflect growth and new accomplishments."
      ],
      status: ["Ongoing"]
    },
    tech: [htmlIcon, cssIcon, javascript, reactjs, vitejs],
    githubLink: 'https://github.com/iharishsh/portfolioV2',
    siteLink: '',
  },
  {
    title: 'Nike website',
    cover: nike,
    imgs: [nikegifm, nikegifl],
    description: 'Created using Tailwind CSS',
    projectOverview: {
      keyFeatures: [
      "<b>Responsive Web Development</b>: Designed and implemented a small web application to showcase proficiency in responsive web development.",
      "<b>User Interface Design</b>: Applied principles of user interface design to create an engaging and visually appealing website.",
      ],
      goalsAchieved: [
      "<b>Skill Development</b>: Gained proficiency in using Vite, React, and Tailwind CSS.",
      "<b>Portfolio Addition</b>: Enhanced my portfolio with a project demonstrating responsive design and UI skills."
      ],
      futurePlans: [
        "Continuous Learning: Stay updated on the latest trends and techniques in Tailwind CSS.",
      ],
      status: ["Finished"]
    },
    tech: [htmlIcon, cssIcon, tailwindcss, javascript, reactjs, vitejs],
    githubLink: 'https://github.com/iharishsh/niketcss',
    siteLink: 'https://iharishsh.github.io/niketcss/',
  },
  {
    title: 'MERN Estate',
    cover: mernestate,
    imgs: [mernestatem, mernestatel],
    description: 'This project is a full-stack real estate marketplace built using the MERN (MongoDB, Express.js, React, Node.js) stack.',
    projectOverview: {
      keyFeatures: [
        "<b>User Authentication</b>: Implemented advanced authentication techniques using JWT, Firebase, and Google OAuth for secure and seamless user access.",
        "<b>Property Listings (CRUD)</b>: Performed real-world Create, Read, Update, and Delete operations for property listings using MongoDB.",
        "<b>User-friendly Interface</b>: Enhanced user experience with features like image uploads, property listing management, and more.",
        "<b>Advanced Search Functionality</b>: Implemented cutting-edge search features to help users find properties efficiently."
      ],
      goalsAchieved: [
        "<b>Full-Stack Development</b>: Successfully built a full-stack real estate marketplace using the MERN stack.",
        "<b>Authentication Security</b>: Implemented secure authentication methods for user access.",
        "<b>Enhanced User Experience</b>: Improved user interaction through user-friendly features and interface enhancements."
      ],
      futurePlans: [
        "Continuous Learning: Stay updated on MERN Stack.",
      ],
      status: ["Finished"]
    },
    tech: [htmlIcon, cssIcon, reactjs, javascript, mongodb, expressjs, nodejs, fire],
    githubLink: 'https://github.com/iharishsh/mern-estate',
    siteLink: 'https://mern-estate-vyj2.onrender.com/',
  }
];

export default projectsData;
