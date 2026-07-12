import React, {useContext} from "react";
import {highlightsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./Highlights.scss";

export default function Highlights() {
  const {isDark} = useContext(StyleContext);

  if (!highlightsSection.display) {
    return null;
  }

  return (
    <section className="highlights-section" id="highlights">
      <div className="highlights-grid">
        {highlightsSection.stats.map((stat, index) => (
          <div
            key={stat.label}
            className={
              isDark
                ? "highlight-card highlight-card-dark"
                : "highlight-card highlight-card-light"
            }
            style={{animationDelay: `${index * 0.08}s`}}
          >
            <span className="highlight-value">{stat.value}</span>
            <span className="highlight-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
