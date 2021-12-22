import React from 'react'
import './menu.css' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const Menu = () => {
    return (
        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
            <ul class="nav flex-column text-white w-100">
                <a href="#" className="nav-link h3 text-white my-2">
                MCGA
                </a>
                <li href="#" className="nav-link">
                    <span className="mx-2">Principal</span>
                </li>
                <li href="#" className="nav-link">
                    <span className="mx-2">Gestionar</span>
                </li>
                <li href="#" className="nav-link">
                    <span className="mx-2">Contacto</span>
                </li>
            </ul>
        </div>
    )
}

export default Menu