import React, { useEffect } from 'react';
import './About.css';
import workspace from '../../assets/workspace_solid.png';

const About = () => {
  return (
    <section className="about-container">
        <h2>ABOUT ME</h2>
        <div className='para'>
        <p>I’m a growing <b>Developer</b> and <b>Designer</b>, passionate about crafting quality digital experiences through a blend of design creativity and code.</p>
        <p>So What I’m doing now?</p> 
        <p>"Coding the canvas of creativity, one pixel at a time."</p>
        </div>
      <img src={workspace} alt="Workspace" />
    </section>
  );
};

export default About;
