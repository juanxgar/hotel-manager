import React from 'react'
import '../../../styles/reservas/lineaTiempo.css';
import { Col, Row } from 'react-bootstrap';

export default function LineaTiempo({ubicacion}) {
    return(
        <div>
            <Row>
                <Col sm={2} className='pos-cir'>
                    {ubicacion==='habitaciones' &&
                        <div id='circulo'></div>
                    }
                    {ubicacion==='cliente' &&
                        <div id='circulo2'></div>
                    }
                    <p className='texto'>&nbsp; Seleccion</p>
                </Col>
                <Col sm={8} className='linea'>	
                    <hr size="50" />
                </Col>
                <Col sm={2} className='pos-cir'>
                {ubicacion==='habitaciones' &&
                        <div id='circulo2'></div>
                    }
                    {ubicacion==='cliente' &&
                        <div id='circulo'></div>
                    }
                    <p className='texto'>&nbsp; Datos</p>
                </Col>
            </Row>
        </div>
    )
}
