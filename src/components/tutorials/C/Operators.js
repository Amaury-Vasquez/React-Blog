import React from "react";

function Operators() {
  return (
    <article className="article">
      <p className="quote">
        "Un lenguaje de programación es de bajo nivel cuando requiere que
        prestes atencion a lo irrelevante." - Alan J. Perlis.
      </p>
      <h2 className="title tutorial"> Variables y operadores </h2>
      <h3 className="subtitle"> Variables </h3>
      <p>
        Los nombres de variables corresponden a localizaciones de memoria en la
        computadora, cada variable cuenta con un nombre, un valor y un tipo de
        dato. <br />
        Existen distintos tipos de datos, cada uno con diferentes
        características.
      </p>
      <table className="table">
        <tbody>
          <tr className="field table-attribute">
            <td className="row-content"> Tipo de dato </td>
            <td className="row-content"> Asignador de formato </td>
            <td className="row-content"> Memoria requerida </td>
            <td className="row-content"> Rango </td>
            <td className="row-content"> Descripción y uso </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> int </td>
            <td className="table-info table-formatter"> %d</td>
            <td className="table-info"> De 2 a 4 bytes</td>
            <td className="table-info"> -32768 a 32767 </td>
            <td className="table-info">
              Es un tipo de dato al que se le pueden asignar numeros enteros
            </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> long int </td>
            <td className="table-info table-formatter"> %ld</td>
            <td className="table-info"> De 4 a 8 bytes</td>
            <td className="table-info"> -2147483648 a 2147483647 </td>
            <td className="table-info">
              Es un tipo de dato al que se le pueden asignar numeros enteros en
              un rango mucho mas grande
            </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> float </td>
            <td className="table-info table-formatter"> %f</td>
            <td className="table-info"> De 4 a 8 bytes</td>
            <td className="table-info"> -3.4*10^38 a 3.4*10^38 </td>
            <td className="table-info">
              Es un tipo de dato al que se le pueden asignar numeros decimales
            </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> Double </td>
            <td className="table-info table-formatter"> %lf</td>
            <td className="table-info"> De 4 a 8 bytes</td>
            <td className="table-info"> -1.79*10^38 a 1.79*10^38 </td>
            <td className="table-info">
              Es un tipo de dato al que se le pueden asignar numeros decimales
              en mucho mayor rango
            </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> unsigned </td>
            <td className="table-info table-formatter"> %u</td>
            <td className="table-info"> De 2 a 4 bytes</td>
            <td className="table-info"> {32767 * 2} </td>
            <td className="table-info description">
              Entero positivo, solo admite números mayores o iguales a cero,
              puedes usar la palabra reservada unsigned antes de otro tipo de
              dato para hacer que solo admita valores positivos
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="subtitle"> Operadores aritméticos</h3>
      <p>
        Los operadores aritméticos son aquellos que ocupamos para indicarle a la
        computadora que realice una operación, existen de distintos tipos.
      </p>
      <table className="table">
        <tbody>
          <tr className="field table-attribute">
            <td className="row-content"> Operación </td>
            <td className="row-content"> Operador </td>
            <td className="row-content"> Expresión algebraica </td>
            <td className="row-content"> Expresión c </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> suma </td>
            <td className="table-info small table-formatter"> + </td>
            <td className="table-info small"> a + b </td>
            <td className="table-info small"> a + b </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> resta </td>
            <td className="table-info small table-formatter"> -</td>
            <td className="table-info small"> a - b</td>
            <td className="table-info small"> a - b </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> multiplicación </td>
            <td className="table-info small table-formatter"> * </td>
            <td className="table-info small"> ab </td>
            <td className="table-info small"> a * b </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> división </td>
            <td className="table-info small "> / </td>
            <td className="table-info small"> x / y </td>
            <td className="table-info small"> x / y </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> residuo(módulo) </td>
            <td className="table-info small "> % </td>
            <td className="table-info small"> a mod b </td>
            <td className="table-info small"> a % b </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>División de enteros y operador modulo(%) </strong> <br />
        Si tenemos dos enteros a = 17 y b = 3, al dividir a/b, el resultado va a
        ser un número entero, lo que significa que si la operación tiene un
        residuo r {">"} 0, el resultado va a ser el número entero truncado. El
        resultado de la operación c = a / b sería de c = 5. <br />
        El operador residuo(%), devuelve el valor del residuo de una divisón, si
        hacemos r = a % b, entonces r = 2. <br />
      </p>
      <h3 className="subtitle">Suma de dos numeros en C</h3>
      <img
        className="code img-left"
        src="https://i.imgur.com/HVUttAc.png"
        alt="suma"
      />
      <p>
        El programa de la izquierda lee dos números enteros por entrada de
        teclado para posteriormente almacenar su suma en una variable e
        imprimirla. <br />
        La linea 1 muestra un comentario, los comentarios son lineas ignoradas
        por el compilador al momento de compilar, vienen precedidos de los
        caracteres <strong>{"//"} </strong> para comentar una línea, o se pueden
        escribir de la siguiente forma <strong>{"*/ {comentario}*/ "}</strong>
        para comentar mas de una linea. <br /> La linea 5 declara las variables
        que vamos a usar. <br />
        La linea 6 usa la función <strong>scanf()</strong> para leer dos números
        enteros por medio del teclado, esta función viene incluida en el archivo
        de cabecera <strong>stdio.h</strong>. <br />
        La linea 7 ejecuta la operación suma de a + b y la asigna a la variable
        suma. <br />
        La linea 8 imprime el resultado almacenado en suma. <br />
      </p>
      <h3 className="subtitle">Precedencia de operadores</h3>
      <p>
        La precedencia de operadores en C tiene en general las mismas reglas que
        la precedencia de operadores en álgebra: <br />
        <li className="enum"> Operaciones dentro de parentésis. </li>
        <li className="enum"> Multiplicacion, division y residuo. </li>
        <li className="enum"> Suma y resta. </li>
        <li className="enum"> Asignación(=). </li>
      </p>
      <table className="table">
        <tbody>
          <tr className="field table-attribute">
            <td className="row-content"> Operador </td>
            <td className="row-content"> Operación </td>
            <td className="row-content"> Orden de evaluación </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> () </td>
            <td className="table-info "> parentésis </td>
            <td className="table-info">
              {" "}
              Evaluados primero, si están anidados se evalua el parentésis que
              esté más adentro, si están al mismo nivel se evaluan de izquierda
              a derecha
            </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> * / % </td>
            <td className="table-info "> multiplicación, división, residuo </td>
            <td className="table-info">
              {" "}
              Evaluado segundo, si hay más de una se evaluan de izquierda a
              derecha{" "}
            </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> + - </td>
            <td className="table-info "> suma y resta </td>
            <td className="table-info">
              {" "}
              Evaluado tercero, si hay más de una se evaluán de izquierda a
              derecha{" "}
            </td>
          </tr>
          <tr className="field table-attribute">
            <td className="row-header"> = </td>
            <td className="table-info "> asignación </td>
            <td className="table-info"> Evaluado al final </td>
          </tr>
        </tbody>
      </table>
      <h3 className="subtitle"> Comparación y operadores relacionales </h3>
      <p>
        Existen operadores que devuelven un resultado después de evaluar una
        condición, cada uno funciona de una manera diferente y va a devolver un
        valor entero equivalente a 1 en caso de cumplirse o un valor entero
        equivalente a 0 en caso de no cumplirse. <br />
        Estos operadores se llaman operadores comparativos o relacionales(según
        sea el caso) y son los siguientes:
      </p>
      <table className="table">
        <tbody>
          <tr className="field table-attribute small">
            <td className="row-content">
              {" "}
              Operador comparativo o relacional algebraico{" "}
            </td>
            <td className="row-content">
              {" "}
              Operador comparativo o relacional en c{" "}
            </td>
            <td className="row-content"> Ejemplo de uso </td>
            <td className="row-content"> Significado </td>
          </tr>
          <tr className="field table-attribute small">
            <td className="row-header"> = </td>
            <td className="table-info small "> == </td>
            <td className="table-info small">a == b</td>
            <td className="table-info small"> a es igual b</td>
          </tr>
          <tr className="field table-attribute small">
            <td className="row-header"> != </td>
            <td className="table-info small "> != </td>
            <td className="table-info small">a != b</td>
            <td className="table-info small"> a es diferente de b</td>
          </tr>
          <tr className="field table-attribute small">
            <td className="row-header"> {">"} </td>
            <td className="table-info small "> {">"} </td>
            <td className="table-info small"> {"a > b"} </td>
            <td className="table-info small"> a es mayor a b</td>
          </tr>
          <tr className="field table-attribute small">
            <td className="row-header"> {"<"} </td>
            <td className="table-info small "> {"<"} </td>
            <td className="table-info small"> {"a < b"} </td>
            <td className="table-info small"> a es menor a b </td>
          </tr>
          <tr className="field table-attribute small">
            <td className="row-header"> {">="} </td>
            <td className="table-info small "> {">="} </td>
            <td className="table-info small"> {"a >= b"} </td>
            <td className="table-info small"> a mayor o igual a b </td>
          </tr>
          <tr className="field table-attribute small">
            <td className="row-header"> {"<="} </td>
            <td className="table-info small "> {"<="} </td>
            <td className="table-info small"> {"a <= b"} </td>
            <td className="table-info small"> a menor igual a b </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default Operators;
