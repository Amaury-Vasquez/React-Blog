import React, { Component } from "react";

import AboutC from "../components/tutorials/C/AboutC";
import Introduction from "../components/tutorials/C/Introduction";
import Operators from "../components/tutorials/C/Operators";
import InputOutput from "../components/tutorials/C/InputOutput";
import Content from "../components/Content";
class CTutorial extends Component {
  constructor() {
    super();
    const articles = [
      <AboutC />,
      <Introduction />,
      <Operators />,
      <InputOutput />,
    ];
    this.state = {
      activeComponent: null,
      articles,
      current: articles[3],
    };
  }
  render() {
    const contents = [
      "Acerca de C",
      "Introducción a la programación en C",
      "Operadores y Variables",
      "Formato de entrada y salida",
      "Control de programas",
      "Funciones",
      "Arreglos",
      "Apuntadores",
      "Carácteres y cadenas",
      "Estructuras, uniones, manipulación de bits y enumeraciones",
      "Procesamiento de archivos",
      "Estructuras de datos",
      "Preprocesador",
      "Otros temas",
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
