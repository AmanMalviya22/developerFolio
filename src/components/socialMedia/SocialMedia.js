import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

const platforms = [
  { name: "github", icon: "fab fa-github", label: "GitHub" },
  { name: "linkedin", icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { name: "gmail", icon: "fas fa-envelope", label: "Email", isMail: true },
  { name: "stackoverflow", icon: "fab fa-stack-overflow", label: "Stack Overflow" },
  { name: "codechef", icon: "fab fa-codepen", label: "CodeChef" }
];

export default function SocialMedia() {
  if (!socialMediaLinks.display) return null;

  return (
    <div className="social-media-div">
      {platforms.map(({ name, icon, label, isMail }) => {
        const link = socialMediaLinks[name];
        if (!link) return null;
        return (
          <a
            key={name}
            href={isMail ? `mailto:${link}` : link}
            className={`icon-button ${name}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <i className={icon}></i>
            <span></span>
          </a>
        );
      })}
    </div>
  );
}
