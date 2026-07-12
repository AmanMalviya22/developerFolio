import React, {useContext} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-header">
        <h1
          className={
            isDark
              ? "dark-mode skills-heading section-heading"
              : "skills-heading section-heading"
          }
        >
          {skillsSection.title}
        </h1>
        <p
          className={
            isDark
              ? "dark-mode subTitle skills-text-subtitle section-subtitle"
              : "subTitle skills-text-subtitle section-subtitle"
          }
        >
          {skillsSection.subTitle}
        </p>
      </div>

      {skillsSection.skillGroups && (
        <div className="skill-groups">
          {skillsSection.skillGroups.map(group => (
            <div key={group.label} className="skill-group-card">
              <h3 className="skill-group-label">{group.label}</h3>
              <div className="skill-group-tags">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
