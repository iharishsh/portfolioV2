import React, { useLayoutEffect, useRef } from "react";
import "./Experience.css";
import sf from "../../assets/sflogo.png";
import ycircle from "../../assets/yellowcircle.png";
import dcircle from "../../assets/diamondcircle.png";
import ocircle from "../../assets/orangecircle.png";

const Experience = () => {
  const circle1ImgRef = useRef(null);
  const circle2ImgRef = useRef(null);
  const circle3ImgRef = useRef(null);

  useLayoutEffect(() => {
    const circle1Img = circle1ImgRef.current;
    const circle2Img = circle2ImgRef.current;
    const circle3Img = circle3ImgRef.current;

    const initialPosition =
      circle1Img.getBoundingClientRect().left + window.scrollX;
    const initialPosition2 =
      circle2Img.getBoundingClientRect().left + window.scrollX;

    const initialTranslateX = initialPosition - window.scrollY;
    const initialTranslateX2 = initialPosition2 - window.scrollY;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 2000 && scrollPosition < 2900) {
        const currentTranslateX = initialPosition - scrollPosition;
        const translateX = initialTranslateX - currentTranslateX * 0.19;
        circle1Img.style.transition = "transform 0.3s ease"; 
        circle1Img.style.transform = `translate(${translateX}px, -10px)`;

        const currentTranslateX2 = initialPosition2 - scrollPosition;
        const translateX2 = initialTranslateX2 + currentTranslateX2 * 1.1; 
        circle2Img.style.transition = "transform 0.3s ease"; 
        circle2Img.style.transform = `translate(${translateX2}px, -50%)`;

        circle3Img.style.transition = "transform 0.3s ease"; 
        circle3Img.style.transform = `translate(-50%, -50%)`;
        return;
      }

      if (scrollPosition > 2900 && scrollPosition <= 3340) {
        const translateY = scrollPosition - 2900 + 300;
        const scale = 1 - translateY * 0.0005;
        circle1Img.style.transition = "transform 0.3s ease";
        circle1Img.style.transform = `translate(90px, ${translateY}px) scale(${scale})`;

        const translateY2 = Math.min(scrollPosition - 2900, -300); // Limiting the value to a maximum of 300px
        const scale2 = 1 - translateY2 * 0.0005;
        circle2Img.style.transition = "transform 0.3s ease";
        circle2Img.style.transform = `translate(-400px, ${translateY2}px) scale(${scale2})`;

        const translateY3 = scrollPosition - 2900 + 100;
        const scale3 = 1 - translateY3 * 0.0005;
        circle3Img.style.transition = "transform 0.3s ease";
        circle3Img.style.transform = `translate(-50%, ${translateY3}px) scale(${scale3})`;
        
      } else {
        // Reset transition when not in the specified range
        circle1Img.style.transition = "none";
        circle2Img.style.transition = "none";
        circle3Img.style.transition = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="experience" className="experience-container">
        <div className="experience-center-container">
          <h2>Experience</h2>
          <div className="experience-glass-card">
            <div className="experience-content">
              <div className="experience-heading">
                <p>
                  <b>
                    APARJITHA - SUNDARAM DIRECT. (sub division of Sundaram
                    finance)
                  </b>
                </p>
                <p className="experience-subtitle">Nov 2022 – Present</p>
                <p className="experience-subtitle">Chennai, TN</p>
              </div>
              <p className="experience-sentence">
                Revamped Sundaram Direct website with enhanced interfaces and
                responsive coding using HTML, CSS, and ReactJS, iterating design
                changes from user feedback.
              </p>
              <p className="experience-sentence">
                Led CMS to Sundaram FAST transition, reducing data entry time by
                50%, enhancing user satisfaction by 75%, and boosting system
                performance by 40% through backend and database optimization.
              </p>
              <p className="experience-sentence">
                Extended Sundaram FAST to mobile, elevating field service
                efficiency by 75%, reducing data sync time by 20%, and enhancing
                employee satisfaction and productivity by 25% through
                user-friendly design.
              </p>
            </div>
          </div>
        </div>
        <div className="experience-circle">
          <img className="company-logo" src={sf} />
        </div>
        <div className="experience-circle1" ref={circle1ImgRef}>
          <img className="yellow-ellipse" src={ycircle} />
        </div>
        <div className="experience-circle2" ref={circle2ImgRef}>
          <img className="diamond-ellipse" src={dcircle} />
        </div>
        <div className="experience-circle3" ref={circle3ImgRef}>
          <img className="orange-ellipse" src={ocircle} />
        </div>
      </section>
    </>
  );
};

export default Experience;
