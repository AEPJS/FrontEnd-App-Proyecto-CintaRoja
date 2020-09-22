import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

import "../Assets/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <a className="navbar-brand" href="#">
        <img
          className="logo_navbar"
          src="https://image.flaticon.com/icons/png/512/64/64431.png"
          alt="La imagen no existe o cambió su ubicación"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Router>
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <Link
              className="nav-item nav-link"
              to="#History"
              scroll={(el) => {
                const yCoordinate =
                  el.getBoundingClientRect().top + window.pageYOffset;
                const yOffset = -80;
                window.scrollTo({
                  top: yCoordinate + yOffset,
                  behavior: "smooth",
                });
              }}
            >
              Nosotros
            </Link>
            <Link
              className="nav-item nav-link"
              to="#perdidos"
              scroll={(el) => {
                const yCoordinate =
                  el.getBoundingClientRect().top + window.pageYOffset;
                const yOffset = -80;
                window.scrollTo({
                  top: yCoordinate + yOffset,
                  behavior: "smooth",
                });
              }}
            >
              Perdidos
            </Link>
            <a className="nav-item nav-link " href="#registro">
              Registro
            </a>
            <a className="nav-item nav-link " href="#encontrados">
              ¿Ya encontraste a tu mascota?
            </a>
          </Router>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
