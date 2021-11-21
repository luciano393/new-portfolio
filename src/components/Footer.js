import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer className="Footer-wrapper">
      <div className="footer">
        <a href="https://github.com/luciano393">
          <FontAwesomeIcon icon={faGithub} className="social" />
        </a>
        <a href="mailto:lucianoib393@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="social" />
        </a>
        <a href="https://www.linkedin.com/in/luciano-alejandro-ibarra/">
          <FontAwesomeIcon icon={faLinkedin} className="social" />
        </a>
      </div>
    </footer>
  );
};
