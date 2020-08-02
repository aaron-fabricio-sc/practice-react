import React from "react";
import imgnot from "../images/404.jpg";

function Notfound() {
  return (
    <React.Fragment>
      <div className="m-auto">
        <img src={imgnot}></img>
      </div>
    </React.Fragment>
  );
}

export default Notfound;
