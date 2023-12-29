import React, { useEffect, useState } from 'react';
import { Avisocomponents } from './Avisocomponents';

export const Pruebascomponents = () => {
    const [usuario, setusuario] = useState("Maxi Torales");
    const [fecha, setfecha] = useState("01-09-1998");
    const [contador, setcontador]= useState(0);

    const modusuario = e => {

        setusuario(e.target.value);

    }

    const cambiarfecha = e => {
        setfecha(new Date().toLocaleDateString());


    }

useEffect(() => {

console.log("holamundo");
setcontador(contador+1);
console.log("has modificado");
}, [usuario]);

    return (
        <div>
             <strong className={ contador >=20 ? 'label label-green':'label'}>{usuario}</strong>
            <strong className='label'>{usuario}</strong>
            <strong className='label'>{fecha}</strong>
            <h1>Use Effect</h1>

            <p>
                <input type='text'
                    onChange={modusuario}
                    placeholder='cambiar el nombre'
                ></input>

                <button onClick={cambiarfecha}>cambiar fecha</button>
            </p>

            {usuario == "maxi" && <Avisocomponents></Avisocomponents>}
        </div>
    )
}
