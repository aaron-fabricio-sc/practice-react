import React from "react";

import "../components/styles/BadgesList.css";
class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
              ></img>
              <div>
                <p className="nombre">
                  {badge.firstName} {badge.lastName}
                </p>
                <div>
                  <span></span> <p className="text-info">{badge.twitter}</p>
                </div>
                <p className="trbajo">{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
