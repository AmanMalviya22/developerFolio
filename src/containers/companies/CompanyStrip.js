import React, {useContext} from "react";
import {companiesSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./CompanyStrip.scss";

export default function CompanyStrip() {
  const {isDark} = useContext(StyleContext);

  if (!companiesSection.display) {
    return null;
  }

  return (
    <section className="company-strip" aria-label={companiesSection.title}>
      <p className={isDark ? "company-strip-label dark-mode" : "company-strip-label"}>
        {companiesSection.title}
      </p>
      <div className="company-strip-logos">
        {companiesSection.companies.map(company => (
          <div key={company.name} className="company-strip-item">
            <img src={company.logo} alt={company.name} />
            <span>{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
