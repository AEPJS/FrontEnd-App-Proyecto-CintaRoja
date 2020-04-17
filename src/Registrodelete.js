import React, { useState } from 'react';
import axios from 'axios';

function Registrodelete() {
    const [id, setId] = useState('');

    const onChangeInput = (event) => {
        //console.log(event);
        //console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.id);
        setId(event.target.value);

    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('SE SUBMTEO');
        const body = {
            _id: id
        }


        console.log(body);

        axios.delete(`https://database-proyecto-cintaroja.herokuapp.com/api/v1/mascotas/${id}`)
            .then((result) => {
                console.log(result);
                alert('¡Tu mascota se ha borrado de la base de datos!');
                window.location.reload();
            }).catch((err) => {
                console.log(err.response.data);
                alert('No funcionó');
            });

    }

    return (
        <form className="m-5" onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label>Ingrese su ID para dar de baja su mascota</label>
                <input type="text" className="form-control" id="id" onChange={onChangeInput} value={id} />
            </div>
            <button type='submit' >Borrar tu mascota</button>
        </form>
    )


}
export default Registrodelete;



