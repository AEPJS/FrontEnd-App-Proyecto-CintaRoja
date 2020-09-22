import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Registro from "./Registro";

import "../Assets/hero.css";

function Hero() {
  return (
    <div className="row fixed-height" id="home">
      <div className="col-7 jumbotron-height px-0">
        <div className="jumbotron jumbotron-fluid jumbotron-height jumbotron-content">
          <div className="container">
            <h1 className="display-4">¿Perdiste a tu mejor amigo?</h1>
            <p className="lead">
              !Te ayudaremos a encontrarlo! Registra sus datos en nuestro portal
              para que la comunidad se una a tu búsqueda
            </p>
          </div>
        </div>
      </div>
      <div className="col-5 pos_formulario App px-0" id="registro">
        <Registro />
      </div>
    </div>
  );
}

export default Hero;
