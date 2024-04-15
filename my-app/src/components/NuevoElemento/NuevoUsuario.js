import React from "react";

import './NuevoUsuario.css';
import Card from '../UI/Card';
import UsuarioForm from "./UsuarioForm/UsuarioForm";

const NuevoUsuario = (props) => {
    
    const guardaUsuarioHandler = (usuarioIngresado) => {
        props.onAgregarUsuario(usuarioIngresado);
    };

    return (
        <Card className="nuevo-usuario">
            <UsuarioForm onGuardarUsuario={guardaUsuarioHandler}/>
        </Card>
    )
}

export default NuevoUsuario;