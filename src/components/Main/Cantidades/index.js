import React, {useState, useEffect } from 'react';
import Metricas from './Metricas';

const apiProducts = 'http://championes.herokuapp.com/api/productos';
const apiUsers = 'http://championes.herokuapp.com/api/usuarios';

function Cantidades() {

    const [users, setUsers] = useState(0);
    const [products, setProducts] = useState(0);

    useEffect(() => {
        fetch(apiProducts)
            .then(res => res.json())
            .then(data => setProducts(data.count))

    }, [])

    useEffect(() => {
        fetch(apiUsers)
            .then(res => res.json())
            .then(data => setUsers(data.count))

    }, [])

    return (  
        <div className="row">
            <Metricas
                    
                titulo='Total de usuarios'
                cifra= {users}
                icono= 'fas fa-user-check fa-2x text-gray-300'
                color="card border-left-warning shadow h-100 py-2"
            />    
            <Metricas
                    
                titulo='Total de productos'
                cifra= {products}
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