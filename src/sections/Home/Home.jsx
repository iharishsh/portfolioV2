import React, { useEffect } from 'react';
import './Home.css';
import laptop from '../../assets/laptop.png';

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
        laptopImg.style.top = '0%'; 
      }
      // Adjust the image transform based on scroll position for the reverse parallax effect
      laptopImg.style.transform = `translate(-50%, ${scrollPosition * 0.7}px) scale(${1 - scrollPosition * 0.001})`;
    };    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="home-container">
      <img src={laptop} alt="Laptop" />
    </section>
  );
};

export default Home;
