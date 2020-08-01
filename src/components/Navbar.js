import React from "react";
import logo from "../images/badge-header.svg";
class navbar extends React.Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={logo}></img>
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold"> Conf</span>
        </a>
      </div>
    );
  }
}

export default navbar;
