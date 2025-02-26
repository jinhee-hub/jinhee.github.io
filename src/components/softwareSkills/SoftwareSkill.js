import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  const programmingLanguages = skillsSection.softwareSkills.filter((skill) =>
    ["Python", "Java", "C++", "MATLAB", "C#"].includes(skill.skillName)
  );

  const tools = skillsSection.softwareSkills.filter(
    (skill) =>
      !["Python", "Java", "C++", "MATLAB", "C#"].includes(skill.skillName)
  );

  const renderIcon = (skill) => {
    if (skill.customIcon) {
      return (
        <img
          src={require(`../../assets/icons/${skill.customIcon}`)}
          alt={skill.skillName}
        />
      );
    } else {
      return <i className={skill.fontAwesomeClassname}></i>;
    }
  };

  return (
    <div className="software-skills-main-div">
      <div className="skills-row">
        {/* Programming Languages */}
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul className="dev-icons">
            {programmingLanguages.map((skill, i) => (
              <li key={i} className="software-skill-inline" name={skill.skillName}>
                {renderIcon(skill)}
                <p>{skill.skillName}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools & Frameworks */}
        <div className="skill-category">
          <h3>Tools & Frameworks</h3>
          <ul className="dev-icons">
            {tools.map((skill, i) => (
              <li key={i} className="software-skill-inline" name={skill.skillName}>
                {renderIcon(skill)}
                <p>{skill.skillName}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
