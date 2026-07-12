import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, contactInfo, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title section-heading">
            {contactInfo.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode contact-subtitle section-subtitle"
                : "subTitle contact-subtitle section-subtitle"
            }
          >
            {contactInfo.subtitle}
          </p>
          <div
            className={
              isDark
                ? "dark-mode contact-text-div contact-cta-box"
                : "contact-text-div contact-cta-box"
            }
          >
            <div className="contact-actions">
              <Button
                text="Email Me"
                href={`mailto:${contactInfo.email_address}`}
              />
              {greeting.resumeLink && (
                <Button
                  text="Download Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
            </div>
            {contactInfo.number && (
              <a className="contact-detail" href={`tel:${contactInfo.number}`}>
                {contactInfo.number}
              </a>
            )}
            <a
              className="contact-detail-email"
              href={`mailto:${contactInfo.email_address}`}
            >
              {contactInfo.email_address}
            </a>
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          {illustration.animated ? (
            <img
              alt="Contact"
              src={require("../../assets/images/contactMailDark.svg")}
            />
          ) : (
            <img
              alt="Contact"
              src={require("../../assets/images/contactMailDark.svg")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
