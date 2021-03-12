import React from 'react';
import Heading from './Heading';
import Cantidades from './Cantidades/index';
import Ultimo from './Ultimo';
import Categoria from './Categoria/index';
import Tabla from './Tabla/index'

function Main() {
    return (
        <div className="container-fluid">
            <Heading/>

            
            <Cantidades/>

            <div className="row">
                <Ultimo/>
                <Categoria/>
            </div>

            <h1 class="h3 mb-2 text-gray-800">Listado de Productos</h1>

            <div class="card shadow mb-4">
                <Tabla/>
            </div>
            
        </div>
    )
}

export default Main;