import React from 'react';

import './FiltroVistas.css';

const FiltroVistas = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };


  return (
    <div className='filtro-vistas'>
      <div className='filtro-vistas__control'>
        <label>Seleccionar Vista</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='SampleView'>Seleccionar Vista</option>
          <option value='Usuarios'>Usuarios</option>
          <option value='Peliculas'>Peliculas</option>
          <option value='Rentas'>Rentas</option>
        </select>
      </div>
    </div>
  );
};

export default FiltroVistas;