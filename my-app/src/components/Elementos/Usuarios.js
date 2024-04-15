import React, { useState } from 'react';

import './Usuarios.css';
import Card from '../UI/Card';
import NuevoUsuario from '../NuevoElemento/NuevoUsuario';
import Usuario from './Usuario/Usuario'

const Usuarios = (props) => {

    const [usuarios, setUsuarios] = useState(props.usuarios);

    const anadirUsuarioHandler = (nuevoUsuario) => {
        setUsuarios((usuariosAnteriores) => {
            return [... usuariosAnteriores, nuevoUsuario]
        });
    }

    if(usuarios.length === 0){
        return(
            <h2>Todavía no hay usuarios</h2>
        );
    }

    return (
        <div>
            <Card classname="usuarios">
                <NuevoUsuario
                    onAgregarUsuario={anadirUsuarioHandler}
                />
            </Card>
            <ul classname="lista-usuarios">
                {usuarios.map((usuario) => (
                    <Usuario
                        nombre={usuario.nombre}
                        apellido={usuario.apellido}
                        genero={usuario.genero}
                        edad={usuario.edad}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Usuarios;