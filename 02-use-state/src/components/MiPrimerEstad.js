import React, {useState} from 'react';


export const MiPrimerEstad = () => {

    
    
    /*let nombre = "maxi";
*/
    const Cambiarnombre = (e, nombre) => {

        setnombre(nombre);
    }


const [ nombre, setnombre ] = useState("Maxi Torales");

console.log(nombre);
    return (

        <div>
            <h3>componente: mi primer estado</h3>
            <strong>
                {nombre}
            </strong>
            <br></br>
            <button onClick={e => Cambiarnombre(e, "fransisco")}>cambiar nombre por fran</button>
            <br></br>
            <input type='text' onKeyDown={e => Cambiarnombre(e, e.target.value)} ></input>
        </div>
    )
}
