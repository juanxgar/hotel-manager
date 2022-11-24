import React from 'react';
import Sidebar from '../components/componentes-generales/Sidebar';
import BarraNavegacion from '../components/componentes-generales/BarraNavegacion';
import Footer from '../components/componentes-generales/Footer';
import { Row, Col } from 'react-bootstrap';
import ReporteOcupacion from '../components/reportes/ReporteOcupacion';
import ReporteProveniencia from '../components/reportes/ReporteProveniencia';
import ReporteReservasPorMes from '../components/reportes/ReporteReservasPorMes';
import ReporteDestino from '../components/reportes/ReporteDestino';

export default function Reportes() {
  return (
    <div>
        <Sidebar />
        <BarraNavegacion />
        <Row style={{marginLeft: '100px', marginTop:'30px'}}>
                <Col style={{marginLeft:'100px', marginBottom: '120px', marginTop:'40px'}}>
                    <ReporteOcupacion />
                </Col>
                <Col>
                    <ReporteProveniencia />
                </Col>
            </Row>
            <Row style={{marginLeft: '100px', marginTop:'30px'}}>
                <Col style={{marginLeft:'100px', marginBottom: '140px', marginTop:'40px'}}>
                    <ReporteReservasPorMes />
                </Col>
                <Col>
                    <ReporteDestino />
                </Col>
            </Row>
        <Footer />
    </div>
  )
}
