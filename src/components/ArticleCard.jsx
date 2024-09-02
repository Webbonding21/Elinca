import React from 'react';
import PropTypes from 'prop-types';
import '../css/ArticleCard.css'; // Importa los estilos para la tarjeta

const ArticleCard = ({ id, title, content, img, usuario }) => {

    const handleClick = () => {
        window.location.href = `/article/${id}/${title}`;
    };

    return (
        <div className="article-card" onClick={handleClick}>
            <img src={img} alt={`Imagen de ${title}`} className="article-card-img" />
            <div className="article-card-content">
                <h3 className="article-card-title">{title}</h3>
                <p className="article-card-usuario">Por: {usuario}</p>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    usuario: PropTypes.string.isRequired,
};

export default ArticleCard;
