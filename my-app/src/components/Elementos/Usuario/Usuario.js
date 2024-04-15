import React from 'react';

import Card from '../../UI/Card';
import './Usuario.css';

const Usuario = (props) => {
  return (
    <li>
      <Card className='usuario'>
        <div className='usuario-descripcion'>
          <h3>{props.nombre} {props.apellido}</h3>
          <div className='usuario-genero'>{props.genero}</div>
          <div className='usuario-edad'>{props.edad}</div>
        </div>
      </Card>
    </li>
  );
};

export default Usuario;
