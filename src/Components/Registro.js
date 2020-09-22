import React, { useState } from "react";
import axios from "axios";
import "../Assets/registro.css";

function Formulario() {
  const [Foto, setFoto] = useState("");
  const [nombre, setNombre] = useState("");
  const [Especie, setEspecie] = useState("");
  const [Raza, setRaza] = useState("");
  const [Rasgos, setRasgos] = useState("");
  const [Fecha, setFecha] = useState("");
  const [Zona, setZona] = useState("");

  const onChangeInput = (event) => {
    console.log(event.target.value);
    console.log(event.target.id);
    const nombrePromp = event.target.id;
    switch (nombrePromp) {
      case "Foto":
        setFoto(event.target.value);
        break;
      case "nombre":
        setNombre(event.target.value);
        break;
      case "Especie":
        setEspecie(event.target.value);
        break;
      case "Raza":
        setRaza(event.target.value);
        break;
      case "Rasgos":
        setRasgos(event.target.value);
        break;
      case "Fecha":
        setFecha(event.target.value);
        break;
      case "Zona":
        setZona(event.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("SE SUBMTEO");
    const body = {
      Foto: Foto,
      nombre: nombre,
      Especie: Especie,
      Raza: Raza,
      Rasgos: Rasgos,
      Fecha: Fecha,
      Zona: Zona,
    };

    console.log(body);

    axios
      .post(
        "https://database-proyecto-cintaroja.herokuapp.com/api/v1/mascotas/",
        body
      )
      .then((result) => {
        console.log(result);
        alert("¡Tu mascota se ha registrado!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("No funcionó");
      });
  };

  return (
    <div>
      <form className="m-2" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Foto -Agrega un link que diriga a una imagen-</label>
          <input
            type="text"
            className="form-control"
            id="Foto"
            onChange={onChangeInput}
            value={Foto}
          />
        </div>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            onChange={onChangeInput}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Especie</label>
          <input
            type="text"
            className="form-control"
            id="Especie"
            onChange={onChangeInput}
            value={Especie}
          />
        </div>
        <div className="form-group">
          <label>Raza</label>
          <input
            type="text"
            className="form-control"
            id="Raza"
            onChange={onChangeInput}
            value={Raza}
          />
        </div>
        <div className="form-group">
          <label>Rasgos</label>
          <input
            type="text"
            className="form-control"
            id="Rasgos"
            onChange={onChangeInput}
            value={Rasgos}
          />
        </div>
        <div className="form-group">
          <label>Fecha</label>
          <input
            type="Date"
            className="form-control"
            id="Fecha"
            onChange={onChangeInput}
            value={Fecha}
          />
        </div>
        <div className="form-group">
          <label>Zona</label>
          <input
            type="text"
            className="form-control"
            id="Zona"
            onChange={onChangeInput}
            value={Zona}
          />
        </div>
        <button type="submit">Registra tu mascota</button>
      </form>
    </div>
  );
}

export default Formulario;
