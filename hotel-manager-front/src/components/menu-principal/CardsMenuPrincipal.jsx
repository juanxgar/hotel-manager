import React from 'react';
import Card from './CardMenuPrincipal';
import reserva from '../../assets/images-menu/reserva.jpg';
import pago from '../../assets/images-menu/pago.jpg';
import inventario from '../../assets/images-menu/inventario.jpg';
import reportes from '../../assets/images-menu/reportes.png';
import usuarios from '../../assets/images-menu/usuarios.jpg';
import '../../styles/componentes-generales/card.css';

export default function CardsMenuPrincipal() {

    const cards = [
        {
          id: 1,
          title: "Reservas",
          image: reserva,
          url: "/reservas",
          text: 'Hacer reservas de habitaciones'
        },
        {
          id: 2,
          title: "Pago",
          image: pago,
          url: "/pago",
          text:"Realizar pago de servicios prestados" 
        },
        {
          id: 3,
          title: "Inventario",
          image: inventario,
          url: "/inventario",
          text: 'Gestionar inventario de productos'
        },
        {
            id: 4,
            title: "Reportes",
            image: reportes,
            url: "/reportes",
            text: 'Analizar la gestión del hotel'
          },
          {
            id: 5,
            title: "Usuarios",
            image: usuarios,
            url: "/usuarios",
            text: 'Gestionar usuarios de empleados'
          }
      ];

  return(
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
        {cards.map(({ title, image, text, id, url }) => (
            <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={text} url={url}/>
            </div>
        ))}
        </div>
    </div>
  );
}
