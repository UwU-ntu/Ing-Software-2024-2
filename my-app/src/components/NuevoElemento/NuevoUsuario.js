import React from "react";

import './NuevoUsuario.css';
import UsuarioForm from "./UsuarioForm/UsuarioForm";

const NuevoUsuario = (props) => {
    
    const guardaUsuarioHandler = (usuarioIngresado) => {
        const usuarios = { 
            ...usuarioIngresado
        };
        props.onAgregarUsuario(usuarios);
    };

    return (
        <div className="nuevo-usuario">
            <RentaForm onGuardarUsuario={guardaUsuarioHandler} />
        </div>
    )
}

export default NuevoUsuario;