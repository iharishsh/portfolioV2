import React from "react";
import "./Skills.css";
import cup from "../../assets/cup.png";

const Skills = () => {
  return (
    <>
      <h1 className="skills-title">Skills</h1>
      <section className="skills-container">
        <img src={cup} alt="Cup" />
      </section>
    </>
  );
};

export default Skills;
