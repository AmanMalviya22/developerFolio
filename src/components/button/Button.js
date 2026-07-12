import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  const isExternal = newTab || (href && /^https?:\/\//.test(href));

  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
