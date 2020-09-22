import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div className="content">
        <article className="article">
          <p className="quote">
            "Creo que la felicidad solo es encontrada cuanto todos los días
            buscas ser mejor de lo que eras el día anterior"
          </p>
          <h2 className="title about">¡Acerca de este blog!</h2>
          <h3 className="subtitle"> Creado por Amaury Vasquez </h3>
          <p>
            La intención de este blog es ayudar a la gente que esta iniciando a
            programar. <br />
            Todos los tutoriales están basados en investigación tomada de libros
            correspondientes al lenguage, en caso de que se te presente
            cualquier duda puedes enviarme un correo a la dirección que se
            encuentra abajo, con gusto lo responderé.
          </p>
          <h2 className="title about">¡Acerca de mi! </h2>
          <br />
          <img
            className="me-img"
            src="https://i.imgur.com/5QwcgnG.jpg"
            alt="Amaury"
          />
          <h3 className="subtitle"> ¿Quien es Amaury Vásquez? </h3>
          <p>
            Mi sueño es ayudar a la gente a tener mejores vidas, intento usar la
            tecnología para lograrlo. <br /> <br />
            Estudiante de Sistemas Computacionales en ESCOM IPN. <br />
            Estudiante activo en{" "}
            <a
              href="https://platzi.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Platzi
            </a>
            .
            <br />
            Ajedrecista. <br />
            Atleta. <br />
            <br />
          </p>
          <h3 className="subtitle"> Habilidades </h3>
          <img
            className="college-img"
            src="https://guiauniversitaria.mx/wp-content/uploads/2019/12/ipn_unidad-especializada-en-energi%CC%81a.jpg"
            alt="Amaury"
          />
          <p>
            Conocimiento medio en C++ y JAVA <br />
            Conocimiento alto en C. <br />
            Desarrollador React JS.
            <br />
          </p>
          <h3 className="subtitle"> Proyectos</h3>
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
              Estructuras de datos en C
            </a>
          </p>
        </article>
      </div>
    );
  }
}
