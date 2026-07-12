import React, {useContext, useEffect, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  bigProjects,
  achievementSection,
  educationInfo
} from "../../portfolio";

const navItems = [
  {id: "experience", label: "Experience", visible: () => workExperiences.display},
  {id: "projects", label: "Projects", visible: () => bigProjects.display},
  {id: "achievements", label: "Achievements", visible: () => achievementSection.display},
  {id: "skills", label: "Skills", visible: () => skillsSection.display},
  {id: "education", label: "Education", visible: () => educationInfo.display},
  {id: "contact", label: "Contact", visible: () => true}
];

function Header() {
  const {isDark} = useContext(StyleContext);
  const [activeSection, setActiveSection] = useState("greeting");

  useEffect(() => {
    const sections = ["greeting", ...navItems.map(item => item.id)];
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.3, 0.6]}
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
      document.getElementById("menu-btn").checked = false;
    }
  };

  return (
    <Headroom>
      <header
        className={isDark ? "dark-menu header" : "header"}
        aria-label="Main header"
      >
        <a href="#greeting" className="logo" aria-label="Homepage">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          tabIndex={0}
          aria-label="Toggle navigation menu"
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"} />
        </label>
        <nav aria-label="Main navigation">
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {navItems.map(
              item =>
                item.visible() && (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={activeSection === item.id ? "nav-active" : ""}
                      onClick={e => handleNavClick(e, item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                )
            )}
            {greeting.resumeLink && (
              <li>
                <a
                  className="nav-resume"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            )}
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
