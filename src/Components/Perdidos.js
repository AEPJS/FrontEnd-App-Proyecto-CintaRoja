import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cards from "./Cards";

function Perdidos() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    axios
      .get("https://database-proyecto-cintaroja.herokuapp.com/api/v1/mascotas/")
      .then((result) => {
        console.log(result.data);
        setMascotas(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (mascotas.length === 0) {
    return <h1> Cargando...</h1>;
  } else {
    const listCardMascotas = mascotas.map((mascota) => {
      return (
        <Cards
          idMascotas={mascota._id}
          fotoMascotas={mascota.Foto}
          nombreMascotas={mascota.nombre}
          especieMascotas={mascota.Especie}
          razaMascota={mascota.Raza}
          rasgosMascota={mascota.Rasgos}
          fechaMascota={mascota.Fecha}
          zonaMascota={mascota.Zona}
        />
      );
    });
    return listCardMascotas;
  }
}

export default Perdidos;
