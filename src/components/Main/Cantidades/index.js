import React, {useState, useEffect } from 'react';
import Metricas from './Metricas';

const apiProducts = 'http://championes.herokuapp.com/api/productos';
const apiUsers = 'http://championes.herokuapp.com/api/usuarios';

function Cantidades() {

    const [usuarios, setUsuarios] = useState(0);
    const [productos, setProductos] = useState(0);

    useEffect(() => {
        fetch(apiProducts)
            .then(res => res.json())
            .then(data => setProductos(data.count))

    }, [])

    useEffect(() => {
        fetch(apiUsers)
            .then(res => res.json())
            .then(data => setUsuarios(data.count))

    }, [])

    return (  
        <div className="row">
            <Metricas
                    
                titulo='Total de usuarios'
                cifra= {usuarios}
                icono= 'fas fa-user-check fa-2x text-gray-300'
                color="card border-left-warning shadow h-100 py-2"
            />    
            <Metricas
                    
                titulo='Total de productos'
                cifra= {productos}
                icono= 'fas fa-clipboard-list fa-2x text-gray-300'
                color="card border-left-primary shadow h-100 py-2"
                />    
            <Metricas
                    
                titulo='Total de categorias'
                cifra= {2}
                icono= 'fas fa-shapes fa-2x text-gray-300'
                color="card border-left-success shadow h-100 py-2"
                />    

        </div>  
    )
}

export default Cantidades;