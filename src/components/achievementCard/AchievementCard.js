import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      return;
    }
    const win = window.open(url, "_blank", "noopener,noreferrer");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Achievement"}
          className="card-image"
        />
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => (
          <a
            key={i}
            className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {v.name}
          </a>
        ))}
      </div>
    </div>
  );
}
