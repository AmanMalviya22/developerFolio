import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";
import codechefLogo from "../../assets/images/codechef-svgrepo-com.svg";

const platforms = [
  {name: "github", icon: "fab fa-github", label: "GitHub"},
  {name: "linkedin", icon: "fab fa-linkedin-in", label: "LinkedIn"},
  {name: "codechef", label: "CodeChef", isImage: true, imgSrc: codechefLogo}
];

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="social-media-div">
      {platforms.map(({name, icon, label, isImage, imgSrc}) => {
        const link = socialMediaLinks[name];
        if (!link) {
          return null;
        }
        return (
          <a
            key={name}
            href={link}
            className={`icon-button ${name}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {isImage ? (
              <img src={imgSrc} alt="" className="custom-social-icon" />
            ) : (
              <i className={icon} aria-hidden="true" />
            )}
          </a>
        );
      })}
    </div>
  );
}
