import React from 'react'
import './App.css'

function Cards(props) {
    console.log(props)
    return (
        <div className="card fix">
            <img className="card-img-top img-cards" src={props.fotoMascotas} alt="img_perro" />
            <div className="card-body card_font">
                <h5 className="card-title">{props.nombreMascotas}</h5>
                <p className="card-text "> ID: {props.idMascotas}
                    <br></br> Especie: {props.especieMascotas} <br></br> {props.razaMascota} <br></br> {props.rasgosMascota}
                    <br></br>{props.fechaMascota} <br></br>{props.zonaMascota}</p>
            </div>
        </div>
    )

}

export default Cards;