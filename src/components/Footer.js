import React from "react";
// import { Link } from "react-router-dom";

import "./styles/index.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-email">amaury.vasquezenriquez@gmail.com</p>
        <div className="icon-container">
          <a
            href="https://twitter.com/AmauryVasquez11"
            className="media-icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            href="https://www.instagram.com/vasquezamaury/"
            className="media-icon instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            href="https://github.com/Amaury-Vasquez/"
            className="media-icon github"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            href="https://www.facebook.com/amaury.vasquezenriquez/"
            className="media-icon facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
