import React, {useState, useEffect } from 'react';

const apiProducts = 'http://championes.herokuapp.com/api/productos';

function Categorias() {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch(apiProducts)
            .then(res => res.json())
            .then(data => setCategorias(data.countByCategory)) 
    }, [])

    return (
        <div>
            {
              categorias.map((categoria, i) => {
                return (
                  <div className="col-lg-6 mb-4 categoria" key={i}>
                    <div className="card bg-championes text-white shadow" >
                      <div className="card-body" >
                        <h6>Categoría: <strong>{categoria.categoria}</strong></h6>
                        <p>Productos: {categoria.cantidad} </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
      )   
}

export default Categorias;