import React from 'react';

import Card from '../../UI/Card';
import './Pelicula.css';

const Pelicula = (props) => {
  return (
    <li>
      <Card className='pelicula'>
        <div className='pelicula-descripcion'>
          <h3>{props.nombre}</h3>
          <div className='pelicula-genero'>Género: {props.genero}</div>
          <div className='anio'>Año: {props.anio}</div>
          <div className='renta-fecha'>Director: {props.director}</div>
          <div className='inventario'>{props.inventario} disponibles</div>
        </div>
      </Card>
    </li>
  );
};

export default Pelicula;
