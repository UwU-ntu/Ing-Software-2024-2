import React, { useState } from 'react';

import './Peliculas.css';
import Card from '../UI/Card';
import NuevaPelicula from '../NuevoElemento/NuevaPelicula';
import Pelicula from './Pelicula/Pelicula'

const Peliculas = (props) => {

    const [peliculas, setPeliculas] = useState(props.peliculas);

    const anadirPeliculaHandler = (nuevaPelicula) => {
        setPeliculas((peliculasAnteriores) => {
            return [... peliculasAnteriores, nuevaPelicula]
        });
    }

    if(peliculas.length === 0){
        return(
            <h2>Todavía no hay peliculas</h2>
        );
    }

    return (
        <div>
            <Card classname="peliculas">
                <NuevaPelicula
                    onAgregarPelicula={anadirPeliculaHandler}
                />
            </Card>
            <ul classname="lista-peliculas">
                {peliculas.map((pelicula) => (
                    <Pelicula
                        nombre={pelicula.nombre}
                        genero={pelicula.genero}
                        anio={pelicula.anio}
                        director={pelicula.director}
                        inventario={pelicula.inventario}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Peliculas;