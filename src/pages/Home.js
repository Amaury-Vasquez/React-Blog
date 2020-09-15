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
          <h2 className="title">Welcome to my blog!</h2>
          <h3 className="subtitle">Learn about programming for free</h3>
          <p>
            Nowadays creating content is one way to share who we are to the
            world. <br /> The way i see things, coding gives you the ability to
            create content, making possible to pass beyond the barrier of the
            consummer.
            <br /> You cand find below the current tutorials we have about
            programming languages, there are more to come, be sure to keep
            updated!
          </p>
        </article>
        <div className="card-container">
          <Card
            logo={CLogo}
            name="C/C++"
            description="C and C++ are two of the most important languages
            in the world, most operating systems are build using them."
            path="/tutorials/c"
          />
          <Card
            logo={JavaLogo}
            name="java"
            description="Java is an Object Orientated Programming Language, it is commonly 
            used for developing web and android applications"
          />
          <Card
            logo={JsLogo}
            name="Javascript"
            description="Javascript is indeed the most important programming language
            for web, it can be used for backend and frontend."
          />
        </div>
      </div>
    );
  }
}
