import React from "react";

import './NuevaPelicula.css';
import Card from '../UI/Card';
import PeliculaForm from "./PeliculaForm/PeliculaForm";

const NuevaPelicula = (props) => {
    
    const guardaPeliculaHandler = (peliculaIngresada) => {
        props.onAgregarPelicula(peliculaIngresada);
    };

    return (
        <Card className="nueva-pelicula">
            <PeliculaForm onGuardarPelicula={guardaPeliculaHandler}/>
        </Card>
    )
}

export default NuevaPelicula;