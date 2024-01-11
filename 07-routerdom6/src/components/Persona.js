import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    //valores por defecto en parameametros
    const { nombre = "maxi", apellido = "torales" } = useParams();

    const navegar = useNavigate();

    const enviar = (e) => {
        
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
let url = `/Persona/${nombre}/${apellido}`;
  
navegar(url);

}
    return (
        <div>

            <h1>persona: {nombre}</h1>
            <h1>apellido: {apellido}</h1>
            <form onSubmit={enviar}>
                <input type='text' name='nombre'></input>
                <input type='text' name='apellido'></input>
                <input type='submit' name='enviar' value="enviar"></input>
            </form>
        </div>
    )
}
