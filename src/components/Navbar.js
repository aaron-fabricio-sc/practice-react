import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
class navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link to="/badgess" className="Navbar__brand ">
            <img src={logo} className="Navbar__brand-logo"></img>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold"> Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default navbar;
