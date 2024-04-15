import React, { useState } from 'react';

import './Rentas.css';
import Card from '../UI/Card';
import NuevaRenta from '../NuevoElemento/NuevaRenta';
import Renta from './Renta/Renta'

const Rentas = (props) => {

    const [rentas, setRentas] = useState(props.rentas);

    const anadirRentaHandler = (nuevaRenta) => {
        setRentas((rentasAnteriores) => {
            return [... rentasAnteriores, nuevaRenta]
        });
    }

    if(rentas.length === 0){
        return(
            <h2>Todavía no hay rentas</h2>
        );
    }

    return (
        <div>
            <Card classname="rentas">
                <NuevaRenta
                    onAgregarRenta={anadirRentaHandler}
                />
            </Card>
            <ul classname="lista-rentas">
                {rentas.map((renta) => (
                    <Renta
                        pelicula={renta.pelicula}
                        usuario={renta.usuario}
                        fecha={renta.fecha}
                        dias={renta.dias}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Rentas;