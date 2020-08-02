import React from "react";

import "./styles/Badges.css";
import { Link } from "react-router-dom";
import astronautas from "../images/astronauts.svg";
import logoplatzi from "../images/platziconf-logo.svg";

function Home() {
  return (
    <React.Fragment>
      <div className="Badges">
        <div className="Badges__heroHome">
          <div className="Badges__container-Home ">
            <div className="h-100 w-50 d-flex flex-column align-items-center justify-content-center">
              <div>
                <img src={logoplatzi}></img>
              </div>
              <h2 className="text-white">Crea tu Propio Badge</h2>
              <Link to="/badgess" className="btn btn-info">
                Empieza ahora
              </Link>
            </div>
            <div className="h-100 w-50 d-flex align-items-center justify-content-center">
              <div>
                <img src={astronautas} className="imgHome"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
