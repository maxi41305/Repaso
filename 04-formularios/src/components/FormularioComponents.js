import React, { useState } from 'react'




export const FormularioComponents = () => {

    const [usuario, setUsuario] = useState({});


    const cambiarDatos = e => {

        let nameinput = e.target.name;
        let usuario_modificar = usuario;

      
        setUsuario(estado_previo =>({

                ...estado_previo,
                [nameinput]: e.target.value
        
        })
        );

    }
    const conseguirDatoFormulario = e => {
        e.preventDefault();
        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            biografia: datos.biografia.value,
            enviar: datos.enviar.value
        }

        console.log(datos);
        setUsuario(usuario);

    }

    return (
        <div>
            <h1>Formularios con react maxi</h1>

            {usuario.enviar && usuario.biografia.length >= 1 && (

                <div className='info_usuarion label babel-green'>

                    {usuario.nombre},
                    {usuario.apellido},
                    {usuario.biografia},
                    {usuario.genero}

                </div>


            )}


            <form onSubmit={conseguirDatoFormulario}>
                <input onChange={cambiarDatos} name='nombre' type='text' placeholder='nombre'></input>
                <input onChange={cambiarDatos} name='apellido' type='text' placeholder='apellido'></input>
                <select onChange={cambiarDatos} name='genero'>
                    <option value={"hombre"}>hombre</option>
                    <option value={"mujer"}>mujer</option>
                </select>

                <textarea onChange={cambiarDatos} name='biografia' type='text' placeholder='biografia'></textarea>
                <input onChange={cambiarDatos} type='submit' value="Enviar" name='enviar'></input>

            </form>

        </div>
    )
}
