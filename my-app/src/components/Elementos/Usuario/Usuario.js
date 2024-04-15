import React from 'react';

import Card from '../../UI/Card';
import './Usuario.css';

const Usuario = (props) => {
  return (
    <li>
      <Card className='usuario'>
        <div className='usuario-descripcion'>
          <h3>Nombre: {props.nombre} {props.apellido}</h3>
          <div className='usuario-genero'>Género: {props.genero}</div>
          <div className='usuario-edad'>Edad: {props.edad}</div>
        </div>
      </Card>
    </li>
  );
};

export default Usuario;
