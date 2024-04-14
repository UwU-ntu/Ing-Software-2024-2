import React from "react";

import './NuevaPelicula.css';
import PeliculaForm from "./PeliculaForm/PeliculaForm";

const NuevaPelicula = (props) => {
    
    const guardaPeliculaHandler = (peliculaIngresada) => {
        const peliculas = { 
            ...peliculaIngresada
        };
        props.onAgregarPelicula(peliculas);
    };

    return (
        <div className="nueva-pelicula">
            <PeliculaForm onGuardarPelicula={guardaPeliculaHandler} />
        </div>
    )
}

export default NuevaPelicula;