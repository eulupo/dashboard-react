import React from 'react';

let numeros = ['a', 'b', 'c', 'd', 'e', 'f'];

function Categorias() {
    return (
        numeros.map((numero) => {
            return (                
                <div className="col-lg-6 mb-4">
                    <div className="card bg-championes text-white shadow">
                        <div className="card-body">
                        Categoria {numero}
                        </div>
                    </div>
                </div>
            )
        })        
    )
}

export default Categorias;