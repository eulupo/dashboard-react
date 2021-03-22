import React from 'react';
import avatar from '../assets/images/dummy-avatar.jpg';

function Topbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
		
			<ul className="navbar-nav ml-auto">
				<li className="mr-2 d-lg-inline text-gray-600 small">
					<a className="nav-link admin-champ" href="http://localhost:3001/usuarios/perfil">Admin</a>
				</li>
				<li><a className="nav-link admin-champ" href="http://localhost:3001/usuarios/salir">
					<i className="fas fa-sign-out-alt"></i>
				</a></li>

			</ul>

		</nav>
    )
}

export default Topbar;