import React from 'react';
import './navbar.css';
import './Historia.js'

function Navbar() {
    return (
        <div className = 'menu'>
            <nav className="navbar navbar-light bg-light font-nav">
                <a className="navbar-brand style-font" href="#">Home</a>
                <a className="navbar-brand style-font" href="#History">Historia</a>
                <a className="navbar-brand style-font" href="#">Registro</a>
                <a className="navbar-brand style-font" href="#">Perdidos</a>
            </nav>
        </div>
    )

}

export default Navbar;

