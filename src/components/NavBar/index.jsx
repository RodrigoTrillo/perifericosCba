import React from "react";
import CartWidget from "../CartWidget";
import '../NavBar/navbar.css'
import {NavLink} from 'react-router-dom';

export const NavBar = ()=>{
    return(
        <div className="container-navBar">
            <nav className="nav">
                <div className="brand">
                    <NavLink to='/'>Perifericos Cba</NavLink>
                </div>
                <ul className="navList">
                    <li> <NavLink className="navLink" to='/'>Home</NavLink> </li>
                    <li> <NavLink className="navLink" to='/categoria/auris'>Auriculares</NavLink> </li>
                    <li> <NavLink className="navLink" to='/categoria/teclado'>Teclados</NavLink> </li>
                    <li> <NavLink className="navLink" to='/todo'>Todos los productos</NavLink> </li>
                    <div>
                        <CartWidget/>
                    </div>
                </ul>
            </nav>
        </div>
    )
}