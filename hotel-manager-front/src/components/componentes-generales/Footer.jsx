import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Esta es para icono estaticos fa
import {faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons'
//Esta es para iconos de marcas fab
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import '../../styles/componentes-generales/footer.css';
import { Link } from "react-router-dom";

export default function Footer () {

    return (
      <footer className="contenedor">
      <div className="content">
          <div className="left box">
              <div className="upper">
                      <div className="topic">Sobre nosotros</div>
                      <p>El Hotel Berlín es un negocio familiar ubicado en La Plata, Huila, que ofrece el servicio 
                        de alojamiento en habitaciones individuales y dobles. Adicionalmente, los clientes pueden 
                        solicitar varios servicios complementarios como  lavandería, alimentación, entre otros. 
                        El hotel cuenta con 22 habitaciones disponibles para ofrecerle el mejor servicio de la ciudad.</p>
              </div>
              <div className="lower">
                      <div className="topic">Contáctanos</div>
                      <div className="phone">
                              <div className="icono-footer contacto">
                                  <FontAwesomeIcon icon={faPhoneVolume} label="&nbsp; &nbsp; +1 76484377"/>
                                  &nbsp; 608 8370229
                              </div>
                      </div>
                      <div className="email">
                              <div className="icono-footer contacto">
                                  <FontAwesomeIcon icon={faEnvelope}/>
                                  &nbsp; hotelberlin.laplata@gmail.com
                              </div>
                      </div>
              </div>
          </div>

          <div className="right box text-decoration-none link-mapa">
              <h4 className="titulo-mapa">Mapa del sitio</h4>
              <div><Link to='/menuprincipal' className="link-mapa">Inicio</Link></div>
              <div><Link to='/reservas' className="link-mapa">Reservas</Link></div>
              <div><Link to='/pagos' className="link-mapa">Pagos</Link></div>
              <div><Link to='/inventario' className="link-mapa">Inventario</Link></div>
              <div><Link to='/reportes' className="link-mapa">Reportes</Link></div>
              <div><Link to='/usuarios' className="link-mapa">Usuarios</Link></div>
              <div className="media-icons">
                      <a href="https://www.facebook.com/hotelberlinlaplatahuila">
                          <div className="icono-footer">
                              <FontAwesomeIcon icon={faFacebook}/>
                          </div>
                      </a>
                      <a href="/">
                          <div className="icono-footer">
                              <FontAwesomeIcon icon={faInstagram}/>
                          </div>
                      </a>
                      <p>Hotel Manager© 2022</p>
              </div>
          </div>
      </div>
  </footer>

    )
}
