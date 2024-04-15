import React from "react";

import './NuevaRenta.css';
import Card from '../UI/Card';
import RentaForm from "./RentaForm/RentaForm";

const NuevaRenta = (props) => {
    
    const guardaRentaHandler = (rentaIngresada) => {
        props.onAgregarRenta(rentaIngresada);
    };

    return (
        <Card className="nueva-renta">
            <RentaForm onGuardarRenta={guardaRentaHandler}/>
        </Card>
    )
}

export default NuevaRenta;