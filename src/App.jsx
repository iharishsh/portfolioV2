import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import Skills from "./sections/Skills/Skills";
import AnimatedCursor from "react-animated-cursor";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Connect from "./sections/Connect/Connect";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [shouldRenderCursor, setShouldRenderCursor] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShouldRenderCursor(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {shouldRenderCursor && (
        <AnimatedCursor
          color="255,255,255"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={5}
          outerAlpha={1}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
          innerStyle={{
            mixBlendMode: "exclusion",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            "li",
            "img",
            "p",
            {
              target: ".navtext",
              options: {
                innerSize: 12,
                outerSize: 55,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
            {
              target: ".scroll-to-top",
              options: {
                innerSize: 12,
                outerSize: 55,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
            {
              target: ".icon",
              options: {
                innerSize: 12,
                outerSize: 55,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
      )}
      <Navbar />
      <ScrollToTop />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <Connect />
    </>
  );
}

export default App;
