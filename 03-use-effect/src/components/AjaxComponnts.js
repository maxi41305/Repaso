import React, { useEffect, useState } from 'react'





export const AjaxComponnts = () => {

    const [usuarios, setusuario] = useState([]);
    const [cargando, setcargando] = useState(true);
    const [error, seterror] = useState("");
    const setUsuarioEstatico = () => {
        setusuario([
            { "id": 1, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" },
            { "id": 2, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://reqres.in/img/faces/9-image.jpg" },
            { "id": 3, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "https://reqres.in/img/faces/10-image.jpg" },
        ])
    }


    const getusuarioajax = () => {
        fetch("https://reqres.in/api/users?page=2")
            .then(respuesta => respuesta.json())
            .then(resultado_final => {
                setusuario(resultado_final.data);
            },
                error => {
                    console.log(error);
                }

            )
    }

    const getusuarioaawind = async () => {

        
try{

    setTimeout(async () => {
    alert("hola");

    const peticion = await fetch("https://reqres.in/api/users?page=1");
    const { data } = await peticion.json();
    console.log(data);

    setusuario(data);
    setcargando(false);

}, 2000);
    
}catch(error){
seterror(error.message);
console.log(error)
}



    }

    useEffect(() => {
        // setUsuarioEstatico();
        //getusuarioajax();
        getusuarioaawind();
    }, []);



    if (cargando == true) {
        return (

            <div className='cargando'>
                cargando...
            </div>
        )

    } else {

        return (


            <div>
                <h2>listado de usuarios ajax</h2>

                <ol className='usuario'>

                    {

                        usuarios.map(usuario => {
                            return <li>

                                <img src={usuario.avatar} width="100px" ></img>
                                {usuario.id} {usuario.first_name}

                            </li>

                        })
                    }

                </ol>

            </div>
        )
    }



}
