import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  bigProjects,
  achievementSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewProject = bigProjects.display;

  // Smooth scroll handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu if open
      document.getElementById("menu-btn").checked = false;
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"} aria-label="Main header">
        <a href="/" className="logo" aria-label="Homepage">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
          tabIndex={0}
          aria-label="Toggle navigation menu"
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <nav aria-label="Main navigation">
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {viewExperience && (
              <li>
                <a href="#experience" onClick={e => handleNavClick(e, "experience")}>Experience</a>
              </li>
            )}
            {viewSkills && (
              <li>
                <a href="#skills" onClick={e => handleNavClick(e, "skills")}>Skills</a>
              </li>
            )}
            {viewProject && (
              <li>
                <a href="#projects" onClick={e => handleNavClick(e, "projects")}>Projects</a>
              </li>
            )}
            {viewAchievement && (
              <li>
                <a href="#achievements" onClick={e => handleNavClick(e, "achievements")}>Achievements</a>
              </li>
            )}
            <li>
              <a href="#contact" onClick={e => handleNavClick(e, "contact")}>Contact</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a tabIndex={-1} aria-hidden="true">
                <ToggleSwitch />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}

export default Header;
