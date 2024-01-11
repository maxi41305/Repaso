import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Panelcontrol = () => {
    return (
        <div>
            <h1>panel de control</h1>


            <nav>
                <ul>
                    <li>
                        <NavLink to='/panel/inicio'>inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/panel/crear-articulo'>crear articulo</NavLink>
                    </li>
                    <li>
                        <NavLink to='/panel/gestion-usuario'>gestion de usuario</NavLink>
                    </li>
                    <li>
                        <NavLink to='/panel/acerca-de'>a acerca de </NavLink>
                    </li>
                </ul>

            </nav>

            <div>

                <Outlet>

                </Outlet>
            </div>
        </div>
    )
}
