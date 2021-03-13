import React from 'react';
import Productos from './Productos';

function Tabla() {
    return (
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Categoria</th>
                            <th>Talles</th>
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