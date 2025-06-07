import React, { useState, useEffect, useRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [bgColor, setBgColor] = useState("rgb(45, 52, 54)");
  const imgRef = useRef();

  useEffect(() => {
    const colorThief = new ColorThief();
    const img = imgRef.current;

    const handleImageLoad = () => {
      try {
        if (img.complete) {
          const color = colorThief.getColor(img);
          setBgColor(`rgb(${color.join(", ")})`);
        }
      } catch (err) {
        console.warn("ColorThief error:", err);
      }
    };

    if (img) {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        return () => img.removeEventListener("load", handleImageLoad);
      }
    }
  }, []);

  const GetDescBullets = ({ descBullets }) =>
    descBullets?.map((item, i) => (
      <li key={i} className={`subTitle ${isDark ? "dark-mode-text" : ""}`}>
        {item}
      </li>
    ));

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-banner" style={{ backgroundColor: bgColor }}>
        <div className="experience-blurred_div" />
        <div className="experience-div-company">
          <h5 className="experience-text-company" title={cardInfo.company}>
            {cardInfo.company}
          </h5>
        </div>
        <img
          crossOrigin="anonymous"
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={`${cardInfo.company} logo`}
        />
      </div>

      <div className="experience-text-details">
        <h5
          className={`experience-text-role ${
            isDark ? "dark-mode-text" : ""
          }`}
        >
          {cardInfo.role}
        </h5>
        <h5
          className={`experience-text-date ${
            isDark ? "dark-mode-text" : ""
          }`}
        >
          {cardInfo.date}
        </h5>
        <p
          className={`subTitle experience-text-desc ${
            isDark ? "dark-mode-text" : ""
          }`}
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
