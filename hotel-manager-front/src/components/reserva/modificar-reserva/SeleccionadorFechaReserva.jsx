import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import {Container, Row, Col } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import { registerLocale} from  "react-datepicker";
import '../../../styles/modificarReserva.css';
import es from 'date-fns/locale/es';
registerLocale('es', es);

const SeleccionardorFechaReserva = () => {
    

    

    const [selectedDate, setSelectedDate] = useState(null);
    return(
        
            <Container>
                <div className='date-picker'>
                <Row>
                    <Col sm={1}>
                        <FontAwesomeIcon icon={faCalendarDay} />
                    </Col>
                    <Col sm={8}> 
                        <DatePicker 
                            selected={selectedDate} 
                            onChange={date => setSelectedDate(date)}//Permite obtener la fecha seleccionada
                            dateFormat = 'yyyy-mm-dd' //Define el formato
                            locale='es'
                            minDate = {new Date ()}
                            /* maxDate = {new Date ()}*/
                            /* filterDate = {date => date.getDay === 6 && date.getDay === 0 }*/
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
            
                        />
                    </Col>
                </Row>
                </div>
            </Container>
    
    );

}

export default SeleccionardorFechaReserva;