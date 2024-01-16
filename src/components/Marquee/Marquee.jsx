import React, { useEffect, useRef } from 'react';
import './Marquee.css';
import gsap from 'gsap';

const Marquee = () => {
  const innerRef = useRef(null);
  const currentScroll = useRef(0);
  const isScrollingDown = useRef(true);

  useEffect(() => {
    let tween = gsap.to(".marquee__part", { xPercent: -100, repeat: -1, duration: 10, ease: "linear" }).totalProgress(0.5);
    gsap.set(innerRef.current, { xPercent: -50 });

    const handleScroll = () => {
      if (window.scrollY > currentScroll.current) {
        isScrollingDown.current = true;
      } else {
        isScrollingDown.current = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown.current ? 1 : -1
      });

      currentScroll.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <>
      <section className="spacer"></section>
      <section className="marquee">
        <div className="marquee__inner" aria-hidden="true" ref={innerRef}>
          <div className="marquee__part">
            Discover.Design.Develop.Deploy
          </div>
          <div className="marquee__part">
          Discover.Design.Develop.Deploy
          </div>
          <div className="marquee__part">
          Discover.Design.Develop.Deploy
          </div>
          <div className="marquee__part">
          Discover.Design.Develop.Deploy
          </div>
        </div>
      </section>
      <section className="spacer"></section>
    </>
  );
};

export default Marquee;
