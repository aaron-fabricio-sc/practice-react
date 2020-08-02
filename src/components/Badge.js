import React from "react";

import logo from "../images/badge-header.svg";

import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={logo} alt=""></img>
        </div>
        <div className="badge_section-name">
          <img src={this.props.logo} className="badge_avatar"></img>
          <h3>
            {" "}
            {this.props.name} <br /> {this.props.lastName}
          </h3>
        </div>
        <div className="badge_section-info">
          <h3>{this.props.carrere}</h3>
          <p>@{this.props.twitter}</p>
        </div>
        <div className="badge_footer ">
          <p>#PLATZICONF</p>
        </div>
      </div>
    );
  }
}

export default Badge;
