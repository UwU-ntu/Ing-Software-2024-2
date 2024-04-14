import React, { useState } from "react";

import "./PeliculaForm.css";

const PeliculaForm = (props) => {
  const [nombreIngresado, setNombreIngresado] = useState("");
  const [generoIngresado, setGeneroIngresado] = useState("");
  const [anioIngresado, setAnioIngresado] = useState("");
  const [directorIngresado, setDirectorIngresado] = useState("");
  const [inventarioIngresado, setInventarioIngresado] = useState("");

  const cambioNombreHandler = (event) => {
    setNombreIngresado(event.target.value);
  };

  const cambioGeneroHandler = (event) => {
    setGeneroIngresado(event.target.value);
  };

  const cambioAnioHandler = (event) => {
    setAnioIngresado(event.target.value);
  };

  const cambioDirectorHandler = (event) => {
    setDirectorIngresado(event.target.value);
  };

  const cambioInventarioHandler = (event) => {
    setInventarioIngresado(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const pelicula = {
      nombre: nombreIngresado,
      genero: generoIngresado,
      anio: anioIngresado,
      director: directorIngresado,
      inventario: inventarioIngresado,
    };

    if(
      nombreIngresado === "" ||
      generoIngresado === "" ||
      anioIngresado === "" || 
      directorIngresado === "" ||
      inventarioIngresado === ""
    ){
      alert("¡¡¡Hay Campos vacíos!!!");
      return;
    }

    props.onGuardarPelicula(pelicula);
    setNombreIngresado("");
    setGeneroIngresado("");
    setAnioIngresado("");
    setDirectorIngresado("");
    setInventarioIngresado("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="nueva-pelicula__controls">
        <div className="nueva-pelicula__control">
          <label>Nombre: </label>
          <input
            type="text"
            value={nombreIngresado}
            onChange={cambioNombreHandler}
          />
        </div>
        <div className="nueva-pelicula__control">
          <label>Género: </label>
          <input
            type="text"
            value={generoIngresado}
            onChange={cambioGeneroHandler}
          />
        </div>
        <div className="nueva-pelicula__control">
          <label>Año: </label>
          <input
            type="text"
            value={anioIngresado}
            onChange={cambioAnioHandler}
          />
        </div>
        <div className="nueva-pelicula__control">
          <label>Director: </label>
          <input
            type="text"
            value={directorIngresado}
            onChange={cambioDirectorHandler}
          />
        </div>
        <div className="nueva-pelicula__control">
          <label>Inventario: </label>
          <input
            type="text"
            value={inventarioIngresado}
            onChange={cambioInventarioHandler}
          />
        </div>
        <div className="nueva-pelicula__actions">
          <button type="submit">Agregar Pelicula</button>
        </div>
      </div>
    </form>
  );
};

export default PeliculaForm;
