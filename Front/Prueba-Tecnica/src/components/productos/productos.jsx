import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import React from 'react';
import './productos.css';

const Productos = () => {

    const { dataHoteles, setDataHoteles } = useContext(dataContext);

    return dataHoteles.map((producto) => {
        return (
            <div className="card" key={producto.id_hoteles}>
                
                <div className="textCard">
                    <h3>{producto.ubicacion}</h3>
                    <h4>{producto.capacidad}</h4>
                </div>
                <button onClick={() => comprarProducto(producto)}>Agregar</button>

            </div>
            
        );
    });
};

export default Productos