import React, { useEffect } from 'react';
import './About.css';
import workspace from '../../assets/workspace_solid.png';

const About = () => {
  useEffect(() => {
    const img = document.querySelector('.about-container img');

    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollDirection = scrollPosition > lastScrollPosition ? 'down' : 'up';

      if (scrollDirection === 'down') {
        img.style.transition = 'transform 0.5s ease-out'; 
        img.style.transform = `translateY(0%)`;
      } else {
        img.style.transition = 'transform 0.5s ease-out'; 
        img.style.transform = `translateY(80%)`;
      }

      lastScrollPosition = scrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='about' className="about-container">
      <h2 className='about-title'>ABOUT ME</h2>
      <div className='para'>
        <p>I’m a growing <b>Developer</b> and <b>Designer</b>, passionate about crafting quality digital experiences through a blend of design creativity and code.</p>
        <div className='para2'>
        <p>So What I’m doing now?</p>
        <p>"Coding the canvas of creativity, one pixel at a time."</p>
        </div>
      </div>
      <img src={workspace} alt="Workspace" />
    </section>
  );
};

export default About;
