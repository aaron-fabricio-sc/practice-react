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
          <img
            src="https://scontent.flpb2-2.fna.fbcdn.net/v/t1.0-1/p200x200/102788405_1554612481367516_754221753454806839_o.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_ohc=WvS8JvYNhUcAX-e9EyJ&_nc_ht=scontent.flpb2-2.fna&_nc_tp=6&oh=d8d981c255bfb60e6e2aeb6a042b0246&oe=5F4A2506"
            className="badge_avatar"
          ></img>
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
