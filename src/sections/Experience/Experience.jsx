import "./Experience.css";
import experienceData from "./ExperienceData.js";

const Experience = () => {

  return (
    <>
      <section id="experience" className="experience-container">
        <div className="experience-center-container">
          <h2>Experience</h2>
          {experienceData.map((experience, index) => (
            <div className="experience-glass-card" key={index}>
              <div className="experience-content">
                  <div className="experience-circle" key={index}>
                    <img
                      className="company-logo"
                      src={experience.logo}
                      alt={experience.name}
                    />
                <div className="experience-heading">
                  <p>
                    <b>{experience.name}</b>
                  </p>
                  <p className="experience-subtitle">{experience.year}</p>
                  <p className="experience-subtitle">{experience.place}</p>
                  </div>
                </div>
                <div>
                  <p className="experience-sentence" dangerouslySetInnerHTML={{ __html: experience.sentence1 }} />
                  <p className="experience-sentence" dangerouslySetInnerHTML={{ __html: experience.sentence2 }} />
                  <p className="experience-sentence" dangerouslySetInnerHTML={{ __html: experience.sentence3 }} />
                </div>
                <div>
                  {experience.tech.map((tech, techIndex) => (
                    <img key={techIndex} width={30} height={30} style={{paddingRight: '10px'}} src={tech} alt={`Tech ${techIndex + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="blob"></div>
      </section>
    </>
  );
};

export default Experience;
