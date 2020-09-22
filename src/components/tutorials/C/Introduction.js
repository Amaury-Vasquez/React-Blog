import React from "react";

function Introduction() {
  return (
    <article className="article">
      <p className="quote">
        "Si siempre haces lo que es fácil y escoges el camino de menor
        dificultad, jamás estarás afuera de tu zona de confort. Las grandes
        cosas no vienen de las zonas de confort. ” ― Roy T. Bennett, The Light
        in the Heart
      </p>
      <h2 className="title tutorial"> Introduccion a la programacion en C </h2>
      <p>
        C es un <strong>lenguaje de compilado</strong>, lo cuál signfica que
        antes de ejecutarse, tiene que pasar por un <strong>interprete </strong>
        que traduzca las instrucciones escritas en texto a código máquina. Una
        de las ventajas que tienen los lenguajes compilados es que ofrecen un
        mayor rendimiento a la hora de ejecución. <br />
      </p>
      <p>
        <strong>Compilacion en windows</strong> <br />
        Sugerimos seguir el siguiente enlace para poder iniciar el proceso de
        compilacion en windows:
        <a
          href="https://platzi.com/tutoriales/1189-algoritmos/2524-compilar-hola-platzeritos-en-c-desde-windows-10/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"  platzi/compilacionWindows"}
        </a>{" "}
        <br />
        <strong>Compilacion en GNU Linux </strong> <br />
        El proceso de compilación en un sistema operativo GNU Linux es muy
        fácil, la mayoría de distribuciones ya vienen con el compilador
        instalado. Para el proceso de compilacion lo primero que tienes que
        hacer es abrir una terminal. <br />
        Una vez abierta le terminal tienes que moverte a la carpeta donde se
        encuentre el archivo que desees compilar, en mi caso se encuentra en
        Documents/Tutorials/C. <br />
        <strong>Seguimos las siguientes instrucciones:</strong>
      </p>
      <img
        className="img-right terminal"
        src="https://i.imgur.com/fcJvyns.png"
        alt="compilation process"
      />
      <p className="instructions">
        <strong>cd Documents/Tutorials/C</strong> <br />
        <strong>ls</strong>
        <br />
        <strong>cat main.c</strong>
        <br />
        <strong>gcc main.c -o main</strong>
        <br />
        <strong>./main</strong>
        <br />
      </p>
      <p>
        El comando <strong>cd</strong> sirve para cambiar de directorio dentro
        de la terminal. <br />
        <strong>ls</strong> muestra los archivos actuales dentro del directorio.
        <br />
        <strong>cat</strong> imprime el contenido del archivo dentro de la
        consola.
        <br />
        <strong>gcc</strong> es el comando usado para compilar los archivos con
        terminación .c, el indicador -o sirve para nombrar el archivo ejecutable
        que se genera después del proceso de compilación. <br />
        <strong>./</strong> Ejecuta el archivo indicado.
      </p>
      <h3 className="subtitle"> Tu primer programa en C </h3>
      <img
        className="code img-left"
        src="https://i.imgur.com/ywdpwPG.png"
        alt="HelloWorld.c"
      />
      <p>
        Este es un programa simple que muestra las líneas necesarias para
        imprimir un <strong>hola mundo</strong>, como hemos mencionado
        anteriormente, los programas escritos en C deben de ser compilados antes
        de poder ejecutarse, el código en si mismo no hace nada. Para poder
        compilar existen diferentes métodos que abordaremos enseguida. <br />
        Para escribir el código se puede usar cualquier editor de texto, sin
        embargo, recomiendo mucho usar <strong> visual studio code </strong>
        debido a que es un excelente editor, además de contar con una terminal
        integrada. <br />
        Para gente que no está familiarizada con los lenguajes de programación
        esas líneas podrían parecer un poco confusas, sin embargo, es bastante
        sencillo en realidad. <br />
        <strong>La directiva de proprocesador #include</strong> <br />
        Las líneas que inician con # son reconocidas por el preprocesador antes
        de iniciar la compilación, la linea uno le está indicando al
        preprocesador que incluya los contenidos de la biblioteca stdio.h
        (standar input/output), esta biblioteca incluye información usada por el
        compilador a la hora de usar funciones, tales como{" "}
        <strong>printf()</strong>. <br />
        <strong>Declaracion de salida</strong> <br />
        La función <strong>printf()</strong> es la función usada para que el
        programa genere una salida en terminal, el delimitador "\n" sirve para
        generar un salto de línea en la salida de texto. Se pueden usar
        distintos printf dentro de los programas, el printf que se use
        continuará donde se haya detenido el anterior.
      </p>
    </article>
  );
}

export default Introduction;
