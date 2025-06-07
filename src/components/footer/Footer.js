import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const footerClass = isDark ? "dark-mode footer-text" : "footer-text";

  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className="footer-div">
        <p className={footerClass}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p>
        <p className={footerClass}>
          Theme by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            developerFolio
          </a>
        </p>
      </footer>
    </Fade>
  );
}
