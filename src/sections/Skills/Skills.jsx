import React, { useState } from "react";
import "./Skills.css";
import cup from "../../assets/cup.png";
//code
import dev from "../../assets/coding/developer.png";
import html from "../../assets/coding/html.svg";
import css from "../../assets/coding/css.svg";
import github from "../../assets/coding/github.svg";
import bootstrap from "../../assets/coding/bootstrap.svg";
import insomnia from "../../assets/coding/insomnia.svg";
import redux from "../../assets/coding/redux.svg";
import vscode from "../../assets/coding/vscode.svg";
import tailwindcss from "../../assets/coding/tailwindcss.svg";
import mongodb from "../../assets/coding/mongodb.svg";
import java from "../../assets/coding/java.svg";
import prettier from "../../assets/coding/prettier.svg";
import reactjs from "../../assets/coding/reactjs.svg";
import nodejs from "../../assets/coding/nodejs.svg";
import javascript from "../../assets/coding/javascript.svg";
import postman from "../../assets/coding/postman.svg";
import mysql from "../../assets/coding/mysql.svg";
import npm from "../../assets/coding/npm.svg";
import vitejs from "../../assets/coding/vitejs.svg";
import oracle from "../../assets/coding/oracle.svg";
import springboot from "../../assets/coding/springboot.svg";
import git from "../../assets/coding/git.svg";
//design
import graph from "../../assets/design/graphsstatistics.png";
import canva from "../../assets/design/canva.svg";
import figma from "../../assets/design/figma.svg";
import illustrator from "../../assets/design/illustrator.svg";
import photoshop from "../../assets/design/photoshop.svg";

const Skills = () => {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(!rotate);

    // Change the root background color
    const root = document.documentElement;
    root.style.setProperty("--root-bg-color", rotate ? "#ffffff" : "#ffffcc");
  };

  const cupStyle = {
    transform: rotate ? "rotateY(180deg)" : "rotateY(0)",
    transition: "transform 0.5s ease",
  };

  return (
    <>
      <section id="skills" className="skills-container">
        {/* Text overlays */}
        <div className={`text-overlay code-title ${rotate ? 'hidden' : ''}`}>Coding</div>
        <div className={`text-overlay design-title ${rotate ? '' : 'hidden'}`}>Design</div>

        {/* Rotating image */}
        {rotate ? (
        <>
        <img src={cup} alt="Cup" style={cupStyle} />
        <img src={graph} alt="Graph" className="design-img" />
        <img src={canva} alt="Canva" title="Canva" className="design-img canva-img" />
        <img src={figma} alt="Figma" title="Figma" className="design-img figma-img" />
        <img src={illustrator} alt="Illustrator" title="Illustrator" className="design-img illustrator-img" />
        <img src={photoshop} alt="Photoshop" title="Photoshop" className="design-img photoshop-img" />
        </>
      ) : (
        <>
        <img src={cup} alt="Cup" style={cupStyle} />
        <img src={dev} alt="Dev" className="code-img" />
        <img src={html} alt="Html" title="Html" className="code-img html-img" />
        <img src={css} alt="Css" title="Css" className="code-img css-img" />
        <img src={github} alt="Github" title="Github" className="code-img github-img" />
        <img src={bootstrap} alt="Bootstrap" title="Bootstrap" className="code-img bootstrap-img" />
        <img src={insomnia} alt="Insomnia" title="Insomnia" className="code-img insomnia-img" />
        <img src={redux} alt="Redux" title="Redux" className="code-img redux-img" />
        <img src={vscode} alt="Vscode" title="Vscode" className="code-img vscode-img" />
        <img src={tailwindcss} alt="Tailwindcss" title="Tailwindcss" className="code-img tailwindcss-img" />
        <img src={mongodb} alt="Mongodb" title="Mongodb" className="code-img mongodb-img" />
        <img src={java} alt="Java" title="Java" className="code-img java-img" />
        <img src={prettier} alt="Prettier" title="Prettier" className="code-img prettier-img" />
        <img src={reactjs} alt="Reactjs" title="Reactjs" className="code-img reactjs-img" />
        <img src={nodejs} alt="Nodejs" title="Nodejs" className="code-img nodejs-img" />
        <img src={javascript} alt="Javascript" title="Javascript" className="code-img javascript-img" />
        <img src={postman} alt="Postman" title="Postman" className="code-img postman-img" />
        <img src={mysql} alt="Mysql" title="Mysql" className="code-img mysql-img" />
        <img src={npm} alt="Npm" title="Npm" className="code-img npm-img" />
        <img src={vitejs} alt="Vitejs" title="Vitejs" className="code-img vitejs-img" />
        <img src={oracle} alt="Oracle" title="Oracle" className="code-img oracle-img" />
        <img src={springboot} alt="Springboot" title="Springboot" className="code-img springboot-img" />
        <img src={git} alt="Git" title="Git" className="code-img git-img" /> 
        </>
      )}

        {/* Button */}
        <button className="rotate-button" onClick={handleClick}>
          Click to slide
        </button>
      </section>
    </>
  );
};

export default Skills;
