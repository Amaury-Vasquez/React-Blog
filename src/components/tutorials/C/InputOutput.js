import React from "react";

function InputOutput() {
  return (
    <article className="article">
      <p className="quote">
        “No te preocupes si no funciona bien. Si todo lo que hizo lo hiciera,
        estarías sin trabajo.” - Mosher’s Law of Software Engineering
      </p>
      <h2 className="title tutorial"> Entrada y salida con formato en C</h2>
      <h3 className="subtitle"> La función scanf() </h3>
      <img
        className="code img-left"
        src="https://i.imgur.com/HWSbpQO.png"
        alt="scanf codigo"
      />
      <p>
        La función <strong>scanf()</strong>, que viene incluida en el archivo de
        cabecera stdio.h, es la función más popular para leer datos dados por el
        usuario. El protótipo de la función en pseudocódigo es el siguiente
        scanf(formato de entrada, variables donde se asignará la entrada), a
        continuación un programa simple donde se leen datos dados por el usuario
        para después imprimirlos. <br />
        Primero declaramos las variables que vamos a estar usando para almacenar
        la entrada. <br />{" "}
      </p>
      <img
        className="code img-right"
        src="https://i.imgur.com/vGE2Ke0.png"
        alt="scanf ejecucion"
      />
      <p>
        La función scanf() recibe en su primer argumento el formato esperado con
        el que va a venir la entrada dada por el usuario, depende del tipo de
        dato que se espere pondremos el identificador correspondiente. <br />
        En la línea 9 leemos un entero y lo almacenamos en la variable a, es
        importante no olvidar poner antes del nombre de la variable la palabra
        reservada <strong>{"&"}</strong>, ya que esta le indica al compilador la
        dirección en memoria de la variable donde se va a almacenar la entrada.{" "}
        <br />
        En la línea 10 mostramos otra forma de usar la función scanf(), el
        especificador de formato es especialmente útil gracias a que podemos
        indicar en una sola línea lo que esperamos recibir en la entrada,
        incluso podemos usar los delimitadores \n o \t en caso de esperar un
        salto de linea o una tabulación (correspondientemente). <br />
        Posteriormente en la línea 11 procedemos a imprimir los valores
        almacenados.
      </p>
      <h3 className="subtitle"> Lectura de cadenas de texto </h3>
      <p>
        En C no existe como tal el tipo de dato string(cadena), lo que se usa
        son arreglos de carácteres para representar la cadena. Declaramos un
        arreglo char string[100] en donde almacenaremos la cadena dada por el
        usuario, puedes dirigirte a la sección{" "}
        <strong>manipulación de cadenas</strong> para profundizar más sobre el
        tema. <br />
        Existen varias formas de leer cadenas de texto en C, entre ellas se
        encuentran las funciones <strong> scanf(), gets(), fgets()</strong>. Las
        cadenas en C tienen que terminar necesariamente con el carácter '
        <strong>\0</strong>' ya que de esta forma le decimos al compilador donde
        está terminando la cadena, al leer la entrada usando cualquiera de las
        funciones mencionadas anteriormente, este carácter es añadido
        automáticamente. <br />
      </p>
      <img
        className="img-left code"
        src="https://i.imgur.com/LoNK5ip.png"
        alt="cadena"
      />
      <p>
        <strong>Leyendo cadenas de texto con scanf() </strong> <br />
        Para leer una cadena de texto usando scanf() el asignador de formato que
        usaremos será <strong>%s</strong>, al leer una cadena de esta forma el
        programa esperará una cadena de texto y se detendrá al momento de
        encontrar un espacio o un salto de línea, en esta situación no es
        necesario usar anteponer la palabra reservada <strong>&</strong> a la
        variable de destino. En caso de que el usuario introduzca más de una
        palabra se generará un error al momento de reconocer la entrada.
      </p>
      <img
        className="img-right code"
        src="https://i.imgur.com/YqE48ru.png"
        alt="cadena"
      />
      <p>
        En el ejemplo de la derecha podemos ver como a pesar de estar
        escribiendo la cadena "hola soy amaury", el programa solo almacena la
        cadena "hola" por la forma de funcionar de la función scanf(). Si la
        usamos de una forma no adecuada podemos generar problemas para escanear
        datos en un futuro dentro del programa.
      </p>
      <h3 className="subtitle">
        {" "}
        Leyendo cadenas de texto con gets() y fgets(){" "}
      </h3>
      <img
        className="code img-left"
        src="https://i.imgur.com/4oNsKcd.png"
        alt="gets code"
      />
      <p>
        La función gets() puede ser usada de forma muy sencilla para leer una
        cadena de texto, esta deja de leer la entrada hasta que se encuentra con
        un salto de línea, el problema que existe con la función gets() es que
        el compilador la considera una función peligrosa, esto se debe a su
        mismo funcionamiento, al esperar un salto de línea puede leer una
        entrada demasiado grande y aún así no detenerse, esto puede generar
        muchos problemas, especialmente a la hora de almacenar la entrada leída.
        Por lo tanto no es recomendable usar la función gets() a la hora de leer
        cadenas.
      </p>
      <img
        className="full-width"
        src="https://i.imgur.com/YbF0Ngh.png"
        alt="gets code"
      />
      <p>
        En su lugar recomendamos usar la función <strong>fgets()</strong>, la
        cuál funciona de una forma muy parecida a la hora de leer la entrada de
        teclado, sin embargo a esta si le podemos asignar un limite de
        carácteres a leer. Generalmente esta función es usada para leer archivos
        de texto, sin embargo podemos especificar que tipo de entrada queremos
        para que en lugar de esperar la entrada de un archivo la espere del
        teclado. El prototipo de la función es el siguiente:{" "}
        <strong>fgets(cadena, limite caracteres, archivo)</strong>.
      </p>
      <img
        className="code img-left"
        src="https://i.imgur.com/KFjlkWC.png"
        alt="fgets"
      />
      <p>
        Al especificar en el argumento que queremos usar el archivo
        stdin(incluido en la cabecera stdio.h), le estamos diciendo al
        compilador que lea del flujo estandar de entrada de archivos, lo cúal
        hará que se espere la entrada del teclado. <br />
        Sin embargo, al leer de esta forma ocasionamos un problema en la cadena,
        al escribir una cadena y terminar con el salto de línea(tecla enter) ,
        el salto de línea queda registrado justo antes del fin de cadena,
        generando un carácter que no queremos en la cadena.
      </p>
      <img
        className="terminal img-right"
        src="https://i.imgur.com/xa2kc4N.png"
        alt="cadenas"
      />
      <p>
        La forma de quitarlo es muy sencilla, nos dirigimos a la penúltima
        casilla de la cadena y colocamos ahí el carácter de fin de cadena "
        <strong>\0</strong>", consulte la sección{" "}
        <strong>manipulación de cadenas</strong> para profundizar más en este
        tema.
      </p>
      <img
        className="code img-left"
        src="https://i.imgur.com/oqC3nBc.png"
        alt="fgets fixed"
      />
      <img
        className="terminal img-right"
        src="https://i.imgur.com/eOZBlF4.png"
        alt="fgets terminal"
      />
      <p>
        De esta forma podremos leer cadenas de forma segura sin preocuparnos por
        el tamaño de la entrada. <br /> <br /> <br /> <br />
      </p>
      <p>
        <strong>Problemas al leer la entrada</strong> <br />
        Muchas veces queremos leer distintos tipos de datos consecutivamente,
        sin embargo, existe un error común que se genera después de leer un
        número. Al momento de leer la entrada, la funcion scanf() espera hasta
        encontrar caracter espacio o fin de linea, después de almacenar la
        entrada en la variable correspondiente, en la entrada se queda el
        caracter espacio o fin de linea, si después queremos leer otro número no
        habrá problema alguno, sin embargo, si queremos leer una cadena se leerá
        de forma errónea la entrada. Para limpiar la entrada y eliminar ese
        carácter, solamente procederemos a usar la función getchar().
      </p>
      <img
        className="code img-left"
        src="https://i.imgur.com/eOZBlF4.png"
        alt="fgets terminal"
      />
      <h3 className="subtitle"> Salida con formato </h3>
      <p>
        <strong> La función printf() </strong> <br />
        La función printf() (incluida en la cabecera stdio.h) es una de las
        funciones usadas para generar salida de texto en terminal, recibe en el
        primer argumento el formato de salida deseado, después las variables a
        imprimir.
      </p>
    </article>
  );
}

export default InputOutput;
