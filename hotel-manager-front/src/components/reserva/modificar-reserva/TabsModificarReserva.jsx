import React from "react";
import {Tabs, Tab} from 'react-bootstrap';
import FormularioModificarReservacion from '../modificar-reserva/FormularioModificarReservacion';
import FormularioModificarInfoCliente from '../modificar-reserva/FormularioModificarInfoCliente';
import '../../../styles/modificarReserva.css';


export default function TabsModificarReserva() {

    return (
        <div className='tab-style'>
        <Tabs
            defaultActiveKey="info-reserva"
            transition={true}
            id="noanim-tab-example"
            className="mb-3"
        >
            <Tab eventKey="info-reserva" title="Información reserva">
                <FormularioModificarReservacion/>
            </Tab>
            <Tab eventKey="profile" title="Información Cliente">
            <FormularioModificarInfoCliente/>
            </Tab>
        </Tabs>
        </div>
    )
}
