import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    const win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <div className="main" id="projects">
      <h1 className="skills-heading section-heading">{bigProjects.title}</h1>
      <p
        className={
          isDark
            ? "dark-mode project-subtitle section-subtitle"
            : "subTitle project-subtitle section-subtitle"
        }
      >
        {bigProjects.subtitle}
      </p>

      <div className="projects-container">
        {bigProjects.projects.map((project, i) => (
          <div
            key={i}
            className={
              isDark
                ? "dark-mode project-card project-card-dark"
                : "project-card project-card-light"
            }
          >
            {project.image ? (
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="card-image"
                />
              </div>
            ) : null}
            <div className="project-detail">
              <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                {project.projectName}
              </h5>
              {project.tags && (
                <div className="project-tech-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p
                className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}
              >
                {project.projectDesc}
              </p>
              {project.footerLink ? (
                <div className="project-card-footer">
                  {project.footerLink.map((link, j) => (
                    <span
                      key={j}
                      className={isDark ? "dark-mode project-tag" : "project-tag"}
                      onClick={() => openUrlInNewTab(link.url)}
                      onKeyDown={e => {
                        if (e.key === "Enter") {
                          openUrlInNewTab(link.url);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      {link.name}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
