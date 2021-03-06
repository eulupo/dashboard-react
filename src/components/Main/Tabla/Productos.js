import React, {useState, useEffect } from 'react';

const apiProducts = 'http://championes.herokuapp.com/api/productos';

function Productos() {
    
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch(apiProducts)
            .then(res => res.json())
            .then(data => setProductos(data.products))  
    }, [])


    return (
        <>
            {
                productos.map((producto, i) => {
                    return (
                        <tr key={i}>
                            <td>{producto.producto}</td>
                            <td className="display-none">{producto.descripcion}</td>
                            <td>${producto.precio}</td>
                            <td className='display-none'>{producto.categoria}</td>
                            <td className='display-none'>
                                <ul className="lista-championes">
                                    {
                                        producto.talles.map((talle, i) => <li className="item-championes" key={i}>{talle.talle}</li>)
                                    }
                                </ul>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )        
}

export default Productos;