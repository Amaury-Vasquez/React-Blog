import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class CTutorial extends Component {
  state = { activeComponent: null };
  render() {
    return (
      <div className="content">
        <article className="article">
          <p className="quote">
            “Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.” – Martin Fowler
          </p>
          <br />
          <h2 className="title about"> About this tutorial </h2>
          <img
            className="book-img"
            src="https://images-na.ssl-images-amazon.com/images/I/91goMjzrVUL.jpg"
            alt="Deitel && Deitel"
          ></img>
          <p>
            {" "}
            All content will be based mainly in this book: "Deitel, P., &
            Deitel, H. (2012). C: How to Program, 7th Edition (7th ed.).
            Prentice Hall." We highly recommend to read it in order to
            understand better how C language works. <br />
            Back in the day when i was learning to program, i often needed a
            hand to get to know what i did not knew, i tried to include all
            features of C that im aware of so you do not have to struggle the
            way i did. <br />
            Hope you enjoy the content, and, above all things, have fun learning
            how to code!
          </p>
          <br />
          <h2 className="title about"> About C Programming Language </h2> <br />
          <h3 className="subtitle"> History </h3>
          <img
            className="ritchie-img"
            src="https://hipertextual.com/archivo/wp-content/uploads/2014/05/que-es-unix.jpg"
            alt="Dennis Ritchie"
          />
          <p>
            C evolved from two previous languages (BCPL and B.BCPL), it was
            created in 1972 by Dennis Ritchie at bell laboratories of AT&T. C
            initially became widely known as the development language of the
            UNIX operating system. Many of today’s leading operating systems are
            written in C and/or C++. <br />
            It is a language built for performance, is commonly used to build
            operating systems, real time systems, embedded systems and
            communication systems. <br />
            Due to the rapid extension of C over various types of computers,
            there were many variations similar but incompatible, this became a
            problem for developers that needed to develop code capable of
            running in several platforms. <br />
            This led to C standarization in 1989 approved as ANSIX3.159-1989 in
            the US through the
            <strong> American National Standards Institute (ANSI).</strong>
          </p>
          <h3 className="subtitle"> Content </h3>
          {/* <img
            className="c-programming"
            src="https://www.technotification.com/wp-content/uploads/2018/08/is-c-programming-still-worth-learning.png"
            alt="c programming"
          /> */}
          <p>
            <ol>
              <Link>
                <li>Introduction to C programming</li>
              </Link>

              <Link>
                <li>Structured Program Development</li>
              </Link>
              <Link>
                <li>C Program Control</li>
              </Link>
              <Link>
                <li>C Functions</li>
              </Link>
              <Link>
                <li>c arrays</li>
              </Link>
              <Link>
                <li>c pointers</li>
              </Link>
              <Link>
                <li>c characters and strings</li>
              </Link>
              <Link>
                <li>c formatted input and output </li>
              </Link>
              <Link>
                <li>
                  c structures, unions, bit manipulations and enumerations
                </li>
              </Link>
              <Link>
                <li>c file processing</li>
              </Link>
              <Link>
                <li>c data structures</li>
              </Link>
              <Link>
                <li>c preprocessor</li>
              </Link>
              <Link>
                <li>other c topics</li>
              </Link>
            </ol>
          </p>
        </article>
      </div>
    );
  }
}
