import React, { Component } from "react";

// import Me from "";

export default class About extends Component {
  render() {
    return (
      <div className="content">
        <article className="article">
          <p className="quote">
            "I believe happinnes is only found when you are becoming better
            everyday"
          </p>
          <h2 className="title about">About this blog!</h2>
          <h3 className="subtitle"> Created by Amaury Vasquez </h3>
          <p>
            The intention of this blog is to help people who is currently a
            beginner at programming. <br />
            All tutorials are based on research from books about the language in
            question, in case of any doubt, you can send me an email and i will
            be glad to reply and solve your question.
          </p>
          <h2 className="title about"> About me! </h2>
          <br />
          <img
            className="me-img"
            src="https://i.imgur.com/5QwcgnG.jpg"
            alt="Amaury"
          />
          <h3 className="subtitle"> Who am I? </h3>
          <p>
            My dream is to help people to live better and easier lifes, i try to
            use technology in order to achieve it. <br /> <br />
            Studying Computer Science and Engineering at UTM. <br />
            Active student at{" "}
            <a
              href="https://platzi.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Platzi
            </a>
            .
            <br />
            Chess Player. <br />
            Athlete. <br />
            <br />
          </p>
          <h3 className="subtitle"> Skills </h3>
          <img
            className="college-img"
            // src="https://guiauniversitaria.mx/wp-content/uploads/2019/12/ipn_unidad-especializada-en-energi%CC%81a.jpg"
            src="https://www.diariomarca.com.mx/wp-content/uploads/2020/02/p.-2-27.jpg"
            alt="Amaury"
          />
          <p>
            Medium knowledge in C++ and Java. <br />
            Strong knowledge in C. <br />
            ReactJS developer.
            <br />
          </p>
          <h3 className="subtitle"> Projects</h3>
          <p>
            <a
              href="https://amaury-vasquez.github.io/kantodex/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Kanto pokedex
            </a>
            <br />
            <a
              href="https://github.com/Amaury-Vasquez/C-Data-Structs"
              rel="noopener noreferrer"
              target="_blank"
            >
              C data structures
            </a>
          </p>
        </article>
      </div>
    );
  }
}
