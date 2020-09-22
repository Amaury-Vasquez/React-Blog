import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AboutC() {
  return (
    <article className="article">
      <p className="quote">
        “Cualquier persona puede escribir código que una computadora pueda
        entender, un buen programador escribe código que los{" "}
        <strong>humanos puedan entender</strong>.” – Martin Fowler
      </p>
      <br />
      <h2 className="title tutorial"> Acerca del tutorial </h2>
      <img
        className="book-img"
        src="https://images-na.ssl-images-amazon.com/images/I/91goMjzrVUL.jpg"
        alt="Deitel && Deitel"
      ></img>
      <p>
        Todo el contenido será basado principalmente en el siguiente libro:
        "Deitel, P., & Deitel, H. (2012). C: How to Program, 7th Edition (7th
        ed.). Prentice Hall." Recomiendo leerlo para poder entender de una mejor
        manera como funciona C. <br />
        Cuando estaba aprendiendo a programar, a menudo necesitaba ayuda para
        saber sobre que temas desconocía, teniendo en cuenta esto, intenté
        incluir todas las características del lenguaje sobre las que estoy
        conciente. <br />
        Espero que disfrutes del contenido y, sobre todas las cosas,
        <strong>disfrutes aprendiendo a programar</strong> .
      </p>
      <br />
      <h2 className="title about">
        {" "}
        Acerca del lenguaje de programación C{" "}
      </h2>{" "}
      <br />
      <h3 className="subtitle"> Historia </h3>
      <img
        className="ritchie-img"
        src="https://hipertextual.com/archivo/wp-content/uploads/2014/05/que-es-unix.jpg"
        alt="Dennis Ritchie"
      />
      <p>
        C evolucionó de dos lenguajes previos (BCPL and B.BCPL), fue creado en
        1972 por <strong>Dennis Ritchie</strong> en los Laboratorios Bell de
        AT&T. Inicialmente, C fue conocido globalmente como el lenguaje de
        desarrollo del sistema operativo <strong>UNIX</strong> . La mayoría de
        los sistemas operativos más populares están escritos ya sea en C o C++.
        <br />
        Es un lenguaje creado para generar un buen <strong>rendimiento</strong>,
        es comunmente usado para sistemas operativos, sistemas embebidos,
        sistemas de tiempo real y sistemas de comunicación. <br />
        Gracias a la rápida extensión de C en diferentes tipos de computadoras,
        existieron diferentes versiones del lenguaje que eran similares, pero
        incompatibles en los diferentes sistemas, esto se volvió un problema
        para los desarrolladores que necesitaban crear software capaz de
        ejecutarse en diferentes plataformas. <br />
        Esto llevo a la <strong>estandarización del lenguaje</strong> en 1989
        aprobada por en los Estados Unidos a través de el{" "}
        <strong>Instituto Nacional Estadounidense de Estándares</strong> (más
        conocido como ANSI por sus siglas en inglés).
      </p>
    </article>
  );
}

export default AboutC;
