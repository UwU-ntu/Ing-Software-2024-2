import React from 'react';

import Card from '../../UI/Card';
import './Renta.css';

const Renta = (props) => {
  return (
    <li>
      <Card className='renta'>
        <div className='renta-descripcion'>
          <h3>{props.pelicula}</h3>
          <h3>{props.usuario}</h3>
          <div className='renta-fecha'>Rentada el {props.fecha}</div>
          <div className='renta-dias'>Rentada por {props.dias} días</div>
        </div>
      </Card>
    </li>
  );
};

export default Renta;
