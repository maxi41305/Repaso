import React, { useEffect } from 'react'

export const Avisocomponents = () => {

    useEffect(() => {
        
        
        alert("montado");
        
        return () =>{
            alert("componente desmontado");
        };

    }, []);


    return (
        <div>

            <h1>Hola Maxi</h1>
            <button>aviso</button>

        </div>
    )
}
