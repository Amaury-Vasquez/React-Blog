import React, { useState } from "react";

import ListItem from "./ListItem";
import "./styles/index.css";

function Content({ list, callback }) {
  function createList() {
    return list.map((li, i) => (
      <ListItem info={li} key={i} onClick={() => callback(i)} />
    ));
  }

  const [display, setDisplay] = useState("active");
  const [contentList] = useState(createList());

  function hideShow() {
    setDisplay(display === "active" ? "content-list" : "active");
  }

  return (
    <div className="center">
      <button className="btn content-button" onClick={hideShow}>
        contenido
      </button>
      <div className={display}>{contentList}</div>
    </div>
  );
}

export default Content;
