import React, { Component } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Card from "../components/Card";
import CLogo from "../assets/c++.svg";
import JavaLogo from "../assets/java.svg";
import JsLogo from "../assets/javascript.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="content">
        <article className="article">
          <img
            className="home-article-img"
            src="https://media.istockphoto.com/vectors/programming-banner-coding-best-programming-languages-flat-concept-vector-id1185648198?k=6&m=1185648198&s=170667a&w=0&h=BYK8cS3bxH4hy3NpO3hFg2Ha6y4KQ2PTY2c-ePAqDPY="
            alt="coding banner"
          ></img>
          <h2 className="title">¡Bienvenido a mi blog!</h2>
          <h3 className="subtitle">Aprende gratis a programar</h3>
          <p>
            Hoy en día <strong>crear contenido</strong> es una herramienta muy
            útil para mostrar quien somos al mundo <br />A mi forma de ver las
            cosas, programar se ha convertido en una habilidad muy importante en
            el mundo moderno, además, te da la capacidad de crear contenido,
            haciendo posible <strong>dejar de ser solo un consumidor.</strong>{" "}
            <br />
            Abajo se encuentran los tutoriales con los que contamos actualmente,
            mantente actualizado, van a venir más.
          </p>
        </article>
        <div className="card-container">
          <Card
            logo={CLogo}
            name="c/c++"
            description="C y C++ son dos de los lenguajes más importantes en
            el mundo, muchos sistemas operativos son construidos en
            base a ellos."
            path="/tutorials/c"
          />
          <Card
            logo={JavaLogo}
            name="java"
            description="JAVA es un lenguaje orientado a objetos, es usado para 
            aplicaciones android, aplicaciones de escritorio, entre otros."
          />
          <Card
            logo={JsLogo}
            name="Javascript"
            description="Javascript es sin duda el lenguaje mas importante en la web, puede
            ser usando en frontend y backend."
          />
        </div>
      </div>
    );
  }
}
