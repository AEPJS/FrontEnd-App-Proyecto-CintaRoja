import React from "react";
import "../Assets/historia.css";

function App() {
  return (
    <div className="App">
      <div id="historia">
        <h1 className="titulo_nosotros"> ¿Quienes somos?</h1>
        <p className="fuente_nosotros">
          Somos una Comunidad dedicada a ayudarte en esos momentos dificiles;
          aquí puedes publicar la foto y datos de tu mascota perdida
        </p>
        <p className="fuente_nosotros">
          Solo te pedimos una cosa a cambio, ayudanos a mantener el órden.
          Cuando encuentres a tu amigo, ayúdanos borrándolo de la base de datos,
          solo necesitas introducir el ID de su targeta en el formulario de la
          sección al final de la página
        </p>
      </div>
    </div>
  );
}

export default App;
