import React from 'react';
import PropTypes from 'prop-types';
import '../css/ServiceCard.css'; // Importa los estilos para la tarjeta

const ServiceCard = ({ title, content, img, ref }) => {
    return (
        <div className="service-card" ref={ref}>
            <div className="service-card-images">
                <img src={img[0]} alt={`${title} 1`} className="service-card-img img1" />
                <img src={img[1]} alt={`${title} 2`} className="service-card-img img2" />
                <img src={img[2]} alt={`${title} 3`} className="service-card-img img3" />
            </div>
            <div className="service-card-content">
                <h3 className="service-card-title">{title}</h3>
                <p className="service-card-text">{content}</p>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.arrayOf(PropTypes.string).isRequired,
    ref: PropTypes.object,
};

export default ServiceCard;
