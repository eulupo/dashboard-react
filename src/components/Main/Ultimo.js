import React, {useState, useEffect } from 'react';

const apiProducts = 'http://championes.herokuapp.com/api/productos';

function Ultimo() {

    const [imagen, setImagen] = useState(undefined);
    const [descripcion, setDescripcion] = useState('');
    const [id, setId] = useState(undefined);

    useEffect(() => {
        fetch(apiProducts)
            .then(res => res.json())
            .then(data => {
                setImagen(data.products[data.products.length - 1].imagen)
            })

    }, [])

    useEffect(() => {
        fetch(apiProducts)
            .then(res => res.json())
            .then(data => {
                setDescripcion(data.products[data.products.length - 1].descripcion)
            })

    }, [])

    useEffect(() => {
        fetch(apiProducts)
            .then(res => res.json())
            .then(data => {
                setId(data.products[data.products.length - 1].id)
            })

    }, [])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold">Último producto en base de datos</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '15rem'}} src={'http://localhost:3001/img/uploads/productimage/' + imagen} alt="ultimo producto"/>
                    </div>
                    <p>{descripcion}</p>
                    <a className="color-championes" target="_blank" rel="nofollow" href={"http://championes.herokuapp.com/productos/detalle/" + id}>Detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default Ultimo;