import React from 'react';
import PropTypes from 'prop-types';
import '../css/ArticleCard.css'; // Importa los estilos para la tarjeta

const ArticleCard = ({ title, content, img, usuario, ref }) => {
    return (
        <div className="article-card" ref={ref}>
            <img src={img} alt={`Imagen de ${title}`} className="article-card-img" />
            <div className="article-card-content">
                <h3 className="article-card-title">{title}</h3>
                <p className="article-card-text">{content}</p>
                <p className="article-card-usuario">Por: {usuario}</p>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    usuario: PropTypes.string.isRequired,
    ref: PropTypes.object,
};

export default ArticleCard;
