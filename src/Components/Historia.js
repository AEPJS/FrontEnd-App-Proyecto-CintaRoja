import React from "react";
import "../App.css";

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
        {/*<p>Dicen que a través de la mirada se pueden trasmitir muchas cosas, en esta ocasión podremos ver todo el sufrimiento que transmite la mirada varios perritos que fueron abandonados a su suerte y que fueron marcados por el sufrimiento e indiferencia.</p>
         */}{" "}
      </div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
