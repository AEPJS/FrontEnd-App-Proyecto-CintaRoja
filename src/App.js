import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Navbar from "./Components/Navbar";
import Historia from "./Components/Historia";
import Hero from "./Components/Hero";
import Registrodelete from "./Registrodelete";
import Perdidos from "./Components/Perdidos";

function App() {
  return (
    <React.Fragment>
      <div className="menu">
        <Navbar />
      </div>
      <div className="container-fluid">
        <Hero />
      </div>
      <br></br>
      <div className="container" id="History">
        <Historia />
      </div>
      <div className="container-fluid" id="perdidos">
        <h1 className="titulo_nosotros">¿Los has visto?</h1>
      </div>
      <div className="container-fluid ">
        <div className="row centered-content">
          <Perdidos />
        </div>
      </div>
      <div className="" id="encontrados">
        <div className="container col-12">
          <h1 className="titulo_nosotros">¿Encontraste a tu mascota?</h1>
        </div>
        <div className="col-12 centrar">
          <Registrodelete />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
