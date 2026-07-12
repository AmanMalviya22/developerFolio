import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!workExperiences.display) {
    return null;
  }

  return (
    <div id="experience">
      <div className="experience-container" id="workExperience">
        <h1 className="experience-heading section-heading">Experience</h1>
        <p className="section-subtitle">
          Building payment infrastructure and cloud-native systems at scale
        </p>
        <div className="experience-cards-div">
          {workExperiences.experience.map((card, i) => (
            <ExperienceCard
              key={i}
              isDark={isDark}
              cardInfo={{
                company: card.company,
                desc: card.desc,
                date: card.date,
                companylogo: card.companylogo,
                role: card.role,
                descBullets: card.descBullets
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
