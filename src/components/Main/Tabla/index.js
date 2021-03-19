import React from 'react';
import Productos from './Productos';
import './assets/style.css';

function Tabla() {
    return (
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th className='display-none'>Descripcion</th>
                            <th>Precio</th>
                            <th className='display-none'>Categoria</th>
                            <th className='display-none'>Talles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Productos/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tabla;