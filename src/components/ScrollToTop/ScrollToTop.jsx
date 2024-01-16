import React, { useState, useEffect } from 'react';
import { ArrowFatUp } from '@phosphor-icons/react';
import './ScrollToTop.css'; // Add your CSS styles for the ScrollToTop button

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled down a certain distance to show the button
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 300; // Adjust this threshold as needed

    setIsVisible(scrollY > showThreshold);
  };

  // Scroll to the top of the page smoothly when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <ArrowFatUp size={40} color="black" />
    </div>
  );
};

export default ScrollToTop;
