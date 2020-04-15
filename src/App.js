import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Historia from './Historia';

function App() {
  return (
    <div className="App">
      <div ClassName = 'menu'> 
        <Navbar/>
      </div>
      <div className= 'img-perros'>
      <img src = 'https://estag.fimagenes.com/img/4/3/B/Y/7/3BY7_900.jpg' className= 'img-perro' alt='img'/>
      </div>
      <div id='History'>
      <Historia/>
      </div>
      <div>
        {/* <Registro/> */}
      </div>

    </div>
  );
}

export default App;
