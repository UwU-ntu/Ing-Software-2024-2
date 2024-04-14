import React from "react";

import './NuevaRenta.css';
import RentaForm from "./RentaForm/RentaForm";

const NuevaRenta = (props) => {
    
    const guardaRentaHandler = (rentaIngresada) => {
        const rentas = { 
            ...rentaIngresada
        };
        props.onAgregarRenta(rentas);
    };

    return (
        <div className="nueva-renta">
            <RentaForm onGuardarRenta={guardaRentaHandler} />
        </div>
    )
}

export default NuevaRenta;