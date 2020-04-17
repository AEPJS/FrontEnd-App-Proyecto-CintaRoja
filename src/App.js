import 'bootstrap/dist/css/bootstrap.min.css';
import jquery from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import Navbar from './Navbar';
import Historia from './Historia';
import Cards from './Cards'
import Registro from './Registro'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Registrodelete from './Registrodelete'
import Perdidos from './Perdidos'

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
          especieMascotas={mascota.Especie}
          razaMascota={mascota.Raza}
          rasgosMascota={mascota.Rasgos}
          fechaMascota={mascota.Fecha}
          zonaMascota={mascota.Zona} />
      });
      return listCardMascotas
    }
  }

  return (
    <React.Fragment>
      <div className='menu'>
        <Navbar />
      </div>
      <div className='hero container-fluid row'>
        <h2 className='titulo_abs col-lg-8 my-4 pos_formulario App'>¿Perdiste a tu mejor amigo? Te ayudamos a encontrarlo</h2>
        <img src='https://estag.fimagenes.com/img/4/3/B/Y/7/3BY7_900.jpg' className='col-lg-8 col-xs-12' alt='img' />
        <div className='col-lg-4 col-xs-12 pos_formulario App'  id='registro'>
          <Registro />
        </div>
      </div>
      <br></br>
      <div className='container' id='History'>
        <Historia />
      </div>
      <div className='container-fluid' id='perdidos'>
        <h1 className='titulo_nosotros'>¿Los has visto?</h1>
      </div>
      <div className='row container-fluid mx-5'>
        {render()}
      </div>
      <div className='row' id='encontrados'>
        <div className='container col-12' id='perdidos'>
          <h1 className='titulo_nosotros'>¿Encontraste a tu mascota?</h1>
        </div>
        <div className='col-12 centrar'>
        <Registrodelete />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
