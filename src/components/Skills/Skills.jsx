import React from "react";
import "../../styles/Skills.css";
import skillData from "../../data/skillData";

const Skills = () => {
  return (
    <div className="skills">
      <div className="heading">
        <div>My Skills</div>
        <p>Here are a few skills i possess</p>
      </div>
      <div className="skills-content">
        {skillData.map((section, i) => (
          <div className="skill-section" key={i}>
            <img src={section.icon} alt="" />
            <div className="skill-title">{section.title}</div>
            <div className="skill-items">
              {section.skills.map((skill, i) => (
                <div key={i}>{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
