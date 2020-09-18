import React from "react";

import "./styles/index.css";

function ListItem({ info, onClick }) {
  return (
    <li className="list-item" onClick={onClick}>
      {info}
    </li>
  );
}

export default ListItem;
