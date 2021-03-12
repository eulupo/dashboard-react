import React, {useState, useEffect } from 'react';

const apiProducts = 'http://championes.herokuapp.com/api/productos';

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
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>$320,800</td>
                            <td>
                                <ul>
                                    <li>Category 01</li>
                                    <li>Category 02</li>
                                    <li>Category 03</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li><span class="text-danger">Red</span></li>
                                    <li><span class="text-primary">Blue</span></li>
                                    <li><span class="text-success">Green</span></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Doe</td>
                            <td>Fullstack developer</td>
                            <td>$320,800</td>
                            <td>
                                <ul>
                                    <li>Category 01</li>
                                    <li>Category 02</li>
                                    <li>Category 03</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li><span class="text-danger">Red</span></li>
                                    <li><span class="text-primary">Blue</span></li>
                                    <li><span class="text-success">Green</span></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tabla;




    
