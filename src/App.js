import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import Navbar from './Navbar';
import Historia from './Historia';
import Cards from './Cards'
import Registro from './Registro'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

  function App() {
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
      axios.get('https://database-proyecto-cintaroja.herokuapp.com/api/v1/mascotas/')
        .then((result) => {
          console.log(result.data);
          setMascotas(result.data);
        }).catch((err) => {
          console.log(err);
        });
    }, []);
    
    const render = () => {
      if (mascotas.length === 0) {
        return <h1> Cargando...</h1>
      } else {
        const listCardMascotas = mascotas.map((mascota) => {
          return <Cards 
          idMascotas={mascota._id}
          fotoMascotas={mascota.Foto} 
          nombreMascotas={mascota.nombre} 
          especieMascotas ={mascota.Especie}
          razaMascota={mascota.Raza} 
          rasgosMascota={mascota.Rasgos}
          fechaMascota={mascota.Fecha}
          zonaMascota={mascota.Zona} />
        });
        return listCardMascotas
      }
    }

    return (
      <div className="App">
        <div ClassName='menu'>
          <Navbar />
        </div>
        <div className='img-perros row'>
          <img src='https://estag.fimagenes.com/img/4/3/B/Y/7/3BY7_900.jpg' className='img-perro' alt='img' />
          <div>
            <Registro />
          </div>
        </div>
        <br></br>
        <div id='History'>
          <Historia />
        </div>
        <div className='row'>
          {render()}
        </div>
      </div>
    );
  }

  export default App;
