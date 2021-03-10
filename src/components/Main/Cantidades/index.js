import React from 'react';
import Metricas from './Metricas';
import detalles from './detallesMetricas';

function Cantidades() {
    return (
        detalles.map((metrica, i) => {
            return (
            <Metricas
                
            titulo= {metrica.titulo}
            cifra= {metrica.cifra}
            icono= {metrica.icono + ' text-gray-300'}
            color= {"card border-left-" + metrica.color + " shadow h-100 py-2"}
            key= {i}
            />
            )
    }))
}

export default Cantidades;