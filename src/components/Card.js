import React from "react";
import { Link } from "react-router-dom";
import "./styles/index.css";

class Card extends React.Component {
  render() {
    const { name, description, logo, path } = this.props;
    return (
      <div className="card">
        <article className="card-text">
          <img className="card-img" src={logo} alt={name + " logo"} />
          <br />
          <h3 className="card-title"> {name} </h3>
          <br />
          <p className="card-description">{description} </p>
        </article>
        <div className="button-container">
          <Link to={path} className="button-link">
            <button className="card-button"> ¡Llévame ahí! </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
