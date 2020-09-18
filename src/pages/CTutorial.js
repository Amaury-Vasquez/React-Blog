import React, { Component } from "react";

import AboutC from "../components/tutorials/C/AboutC";
import Introduction from "../components/tutorials/C/Introduction";
import Content from "../components/Content";

class CTutorial extends Component {
  constructor() {
    super();
    const articles = [<AboutC />, <Introduction />];
    this.state = {
      activeComponent: null,
      articles,
      current: articles[0],
    };
  }
  render() {
    const contents = [
      "About C",
      "Introduction to C programming",
      "Structured Program Development",
      "C Program Control",
      "C Functions",
      "c arrays",
      "c pointers",
      "c characters and strings",
      "c formatted input and output",
      "c structures, unions, bit manipulations and enumerations",
      "c file processing",
      "c data structures",
      "c preprocessor",
      "other c topics",
    ];
    return (
      <div className="content">
        <Content list={contents} callback={this.changeArticle.bind(this)} />
        {this.state.current}
      </div>
    );
  }

  changeArticle(index) {
    if (index < this.state.articles.length)
      this.setState({ current: this.state.articles[index] });
    else console.log("article undefined");
  }
}

export default CTutorial;
