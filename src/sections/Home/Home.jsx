import React, { useEffect } from 'react';
import './Home.css';
import laptop from '../../assets/macIphone.png';
import Marquee from '../../components/Marquee/Marquee';

const Home = () => {
  useEffect(() => {
    // Handle scroll event to trigger the parallax effect
    const handleScroll = () => {
      const laptopImg = document.querySelector('.home-container img');
      const scrollPosition = window.scrollY;
    
      if (scrollPosition === 0) {
        laptopImg.style.transition = 'top 0.5s ease-out'; 
        laptopImg.style.top = '50%'; 
      } else {
        laptopImg.style.transition = 'top 0.5s ease-out'; 
        laptopImg.style.top = '20%'; 
      }
      laptopImg.style.transform = `translate(-50%, ${scrollPosition * 0.7}px) scale(${1 - scrollPosition * 0.001})`;
    };    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='home' className="home-container">
      <img src={laptop} alt="Laptop" />
      <Marquee />
    </section>
  );
};

export default Home;
