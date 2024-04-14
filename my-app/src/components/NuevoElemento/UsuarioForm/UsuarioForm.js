import React, { useState } from "react";

import "./UsuarioForm.css";

const UsuarioForm = (props) => {
  const [nombreIngresado, setNombreIngresado] = useState("");
  const [apellidoIngresado, setApellidoIngresado] = useState("");
  const [generoIngresado, setGeneroIngresado] = useState("");
  const [edadIngresada, setEdadIngresada] = useState("");

  const cambioNombreHandler = (event) => {
    setNombreIngresado(event.target.value);
  };

  const cambioApellidoHandler = (event) => {
    setApellidoIngresado(event.target.value);
  };
  
  const cambioGeneroHandler = (event) => {
    setGeneroIngresado(event.target.value);
  };

  const cambioEdadHandler = (event) => {
    setEdadIngresada(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const usuario = {
      nombre: nombreIngresado,
      apellido: apellidoIngresado,
      genero: generoIngresado,
      edad: edadIngresada, 
    };

    if(
      nombreIngresado === "" ||
      generoIngresado === "" ||
      apellidoIngresado === "" || 
      edadIngresada === ""
    ){
      alert("¡¡¡Hay Campos vacíos!!!");
      return;
    }

    props.onGuardarUsuario(usuario);
    setNombreIngresado("");
    setApellidoIngresado("");
    setGeneroIngresado("");
    setEdadIngresada("0");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="nuevo-usuario__controls">
        <div className="nuevo-usuario__control">
          <label>Nombre: </label>
          <input
            type="text"
            value={nombreIngresado}
            onChange={cambioNombreHandler}
          />
        </div>
        <div className="nuevo-usuario__control">
          <label>Apellido: </label>
          <input
            type="text"
            value={apellidoIngresado}
            onChange={cambioApellidoHandler}
          />
        </div>
        <div className="nuevo-usuario__control">
          <label>Género: </label>
          <input
            type="text"
            value={generoIngresado}
            onChange={cambioGeneroHandler}
          />
        </div>
        <div className="nuevo-usuario__control">
          <label>Edad: </label>
          <input
            type="number"
            value={edadIngresada}
            onChange={cambioEdadHandler}
          />
        </div>
        <div className="nuevo-usuario__actions">
          <button type="submit">Agregar Usuario</button>
        </div>
      </div>
    </form>
  );
};

export default UsuarioForm;
