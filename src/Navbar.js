import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jquery from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './navbar.css';
import './Historia.js'

function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light font-nav">
                <a className="navbar-brand" href="#">
                    <img className="logo_navbar" src="https://image.flaticon.com/icons/png/512/64/64431.png" alt="La imagen no existe o cambió su ubicación"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav container-fluid font-nav">
                    <a className="navbar-brand style-font" href="#">Home</a>
                    <a className="navbar-brand style-font" href="#History">Nosotros</a>
                    <a className="navbar-brand style-font" href="#registro">Registro</a>
                    <a className="navbar-brand style-font" href="#perdidos">Perdidos</a>
                    <a className="navbar-brand style-font" href="#encontrados">¿Ya lo encontraste?</a>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;

