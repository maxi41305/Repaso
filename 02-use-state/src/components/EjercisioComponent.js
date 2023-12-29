import React, { useState } from 'react';
import PropsTypes from "prop-types";

export const EjercisioComponent = ({ year }) => {

    const [yearnow, setYearnow] = useState(year);

    const siguiente = e => {

        setYearnow(yearnow + 1);
    }
    const anterios = e => {

        setYearnow(yearnow - 1);
    }
    const cambiaYear = e => {
        let dato = parseInt(e.target.value);


if(Number.isInteger(dato)){
    setYearnow(dato);
}else{

    setYearnow(year);
}
        
    }

    return (


        <div>
            <h1> State con Maxi TORALES</h1>
            <strong>
                {yearnow}
            </strong>

            <p>
                <button onClick={siguiente}>SIGUIENTE</button>
                <button onClick={anterios}>ANTERIOS</button>
            </p>
            <input
                onChange={cambiaYear}
            >

            </input>
        </div>
    )
}

EjercisioComponent.PropsTypes = {

    year: PropsTypes.number.isRequired
}
