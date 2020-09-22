import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/blog.svg";
import "./styles/App.css";
import "./styles/index.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-column left">
          <span className="blog-logo">
            <img className="blog-img" src={logo} alt="blog logo"></img>
          </span>
          <ul className="list-menu">
            <Link to="/" className="link">
              <li> Inicio </li>
            </Link>
            <Link to="/about" className="link">
              <li> Acerca De </li>
            </Link>
          </ul>
        </div>
        <div className="right">
          <h3 className="header-title"> Programando </h3>
        </div>
      </header>
    );
  }
}
export default Header;
