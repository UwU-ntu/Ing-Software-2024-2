import React, { useState } from "react";

import "./RentaForm.css";

const RentaForm = (props) => {
  const [peliculaIngresada, setPeliculaIngresada] = useState("");
  const [usuarioIngresado, setUsuarioIngresado] = useState("");
  const [fechaIngresada, setFechaIngresada] = useState(new Date());
  const [diasIngresados, setDiasIngresados] = useState(0);

  const cambioPeliculaHandler = (event) => {
    setPeliculaIngresada(event.target.value);
  };

  const cambioUsuarioHandler = (event) => {
    setUsuarioIngresado(event.target.value);
  };

  const cambioFechaHandler = (event) => {
    setFechaIngresada(new Date(event.target.value));
  };

  const cambioDiasHandler = (event) => {
    setDiasIngresados(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const renta = {
      pelicula: peliculaIngresada,
      usuario: usuarioIngresado,
      fecha: fechaIngresada,
      dias: diasIngresados,
    };

    if(
      peliculaIngresada === "" ||
      usuarioIngresado === "" ||
      fechaIngresada === "" || 
      diasIngresados === ""
    ){
      alert("¡¡¡Hay Campos vacíos!!!");
      return;
    }

    props.onGuardarRenta(renta);
    setPeliculaIngresada("");
    setUsuarioIngresado("");
    setFechaIngresada(new Date());
    setDiasIngresados(0);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="nueva-renta__controls">
        <div className="nueva-renta__control">
          <label>Pelicula: </label>
          <input
            type="text"
            value={peliculaIngresada}
            onChange={cambioPeliculaHandler}
          />
        </div>
        <div className="nueva-renta__control">
          <label>Usuario: </label>
          <input
            type="text"
            value={usuarioIngresado}
            onChange={cambioUsuarioHandler}
          />
        </div>
        <div className="nueva-renta__control">
          <label>Fecha: </label>
          <input
            type="date"
            value={fechaIngresada}
            onChange={cambioFechaHandler}
          />
        </div>
        <div className="nueva-renta__control">
          <label>Días: </label>
          <input
            type="number"
            value={diasIngresados}
            onChange={cambioDiasHandler}
          />
        </div>
        <div className="nueva-renta__actions">
          <button type="submit">Agregar Renta</button>
        </div>
      </div>
    </form>
  );
};

export default RentaForm;
