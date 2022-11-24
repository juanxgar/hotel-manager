import React from 'react';
import PropTypes from "prop-types";
import '../../styles/componentes-generales/card.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardMenuPrincipal({imageSource, title, text, url}) {
  return(
    <div className='card-menu'>
      <div className="card h-100 text-center bg-light animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body">
          <h3 className="card-title-title">{title}</h3>
          <p className="card-text text-secondary">
            {text}
          </p>
          <Button variant='outline-secondary' className='button-link' >
            <Link to={url} className='button-link'>Ir a {title} </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

CardMenuPrincipal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};
