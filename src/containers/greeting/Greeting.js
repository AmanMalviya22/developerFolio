import React, {useContext} from "react";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import Button from "../../components/button/Button";
import {illustration, greeting, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting">
      <div
        className={isDark ? "greeting-hero greeting-hero-dark" : "greeting-hero"}
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <span className="hero-badge">Mumbai, India · Backend Engineer @ NIUM</span>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title}
            </h1>
            {greeting.role && (
              <p
                className={
                  isDark ? "dark-mode greeting-role" : "greeting-role"
                }
              >
                {greeting.role}
              </p>
            )}
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p hero-lead"
                  : "greeting-text-p hero-lead subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            {greeting.aboutLine && (
              <p
                className={
                  isDark ? "dark-mode greeting-about" : "greeting-about subTitle"
                }
              >
                {greeting.aboutLine}
              </p>
            )}
            <div className="button-greeting-div">
              {greeting.resumeLink && (
                <Button
                  text="Download Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
              <Button
                text="LinkedIn"
                newTab={true}
                href={socialMediaLinks.linkedin}
              />
              <Button text="Contact" href="#contact" />
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="Developer illustration"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
