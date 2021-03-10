import React from 'react';
import style from './assets/style.css'
import logo from './assets/championes-logo.svg'

function Sidebar() {
    return (
        <div className="admin navbar-nav  sidebar sidebar-dark accordion" id="accordionSidebar">
            <img src={logo} alt="logo del sitio"></img>

            <div className="administracion">
                <div className="productos">
                    <h3>Administrar Productos</h3>
                    <ul>
                        <li><a href="http://localhost:3001/admin/productos/listado">Ver todos</a></li>
                        <li><a href="http://localhost:3001/admin/productos/crear">Nuevo producto</a></li>
                    </ul>
                </div>
            
                <div className="usuarios">
                    <h3>Administrar Usuarios</h3>
                    <ul>
                        <li><a href="http://localhost:3001/admin/usuarios/listado">Ver todos</a></li>
                        <li><a href="#">Nuevo admin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;