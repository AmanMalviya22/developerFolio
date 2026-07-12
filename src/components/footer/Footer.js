import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const footerClass = isDark ? "dark-mode footer-text" : "footer-text";

  return (
    <Fade bottom duration={800} distance="5px">
      <footer className="footer-div">
        <div className="footer-accent-line" />
        <p className={footerClass}>
          {emoji(`Crafted with ☕ by ${greeting.username}`)}
        </p>
        <p className={`${footerClass} footer-meta`}>
          Backend Engineer · Payments · Microservices
        </p>
      </footer>
    </Fade>
  );
}
