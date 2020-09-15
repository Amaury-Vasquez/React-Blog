import React from "react";

import "./styles/index.css";

class Icon extends React.Component {
  const image = this.props.image;

  render() {
    return <span className="text-icon"></span>;
  }
}

export default Icon;
