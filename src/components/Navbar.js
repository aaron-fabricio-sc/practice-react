import React from "react";
import "./styles/Navbar.css";
import logo from "../images/badge-header.svg";
class navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a href="/" className="Navbar__brand ">
            <img src={logo} className="Navbar__brand-logo"></img>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold"> Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default navbar;
