import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../Inicio';
import { Articulo } from '../Articulo';
import { Contactos } from '../Contactos';
import { Error } from '../Error';
import { Persona } from '../Persona';
import { Panelcontrol } from '../Panelcontrol';

import { Acerca } from '../Panel/Acerca';
import { Gestion } from '../Panel/Gestion';
import { Crear } from '../Panel/Crear';


export const Routerprinicipal = () => {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <NavLink to="/Inicio"
            className={  ({isActive}) => isActive ? "activado" : ""} >inicio</NavLink>
          </li>
          <li>
            <NavLink to="/Article" className={  ({isActive}) => isActive ? "activado" : ""} >articulo</NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className={  ({isActive}) => isActive ? "activado" : ""} >contacto</NavLink>
          </li>
          <li>
            <NavLink to="/Panel" className={  ({isActive}) => isActive ? "activado" : ""} >pqnel de control</NavLink>
          </li>
        </ul>
      </nav>

      {/*cargando componentes*/}
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/inicio' element={<Inicio></Inicio>}></Route>
        <Route path='/Article' element={<Articulo></Articulo>}></Route>
        <Route path='/Contacto' element={<Contactos></Contactos>}></Route>
        <Route path='/Persona/:nombre/:apellido' element={<Persona></Persona>}></Route>
        <Route path='/Persona' element={<Persona></Persona>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
        <Route path='/redirigir' element={<Navigate to="/Persona/maxi/TORALES"></Navigate>}></Route>
        <Route path='/panel/*' element={<Panelcontrol ></Panelcontrol>}>

        <Route path='crear-articulo' element={<Acerca></Acerca>}></Route>
        <Route path='crear-articulo' element={<Crear></Crear>}></Route>
        <Route path='gestion-usuario' element={<Gestion></Gestion>}></Route>
        <Route path='acerca-de' element={<Acerca></Acerca>}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}
