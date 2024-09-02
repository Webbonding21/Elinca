import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard'; // Asegúrate de importar correctamente
import { Link } from 'react-router-dom';
import '../css/ArticleScreen.css'; // Crea y vincula un archivo CSS para estilos personalizados
import Header from './Header';

const ArticleScreen = ({ articles }) => {
    const { id } = useParams(); // Obtiene el id de la URL
    const article = articles.find(article => article.id === parseInt(id)); // Encuentra el artículo actual
    const otherArticles = articles.filter(article => article.id !== parseInt(id)); // Filtra los demás artículos

    if (!article) {
        return <h2>Artículo no encontrado</h2>;
    }

    return (
        <div className="article-screen">
            <Header backgroundColor="rgba(0, 0, 0, 0.8)" />
            <div className="article-content">
                <img className="article-img" src={article.img} alt="" />
                <h1>{article.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: article.content }} />                
                <p className="article-usuario">Por: {article.usuario}</p>
            </div>
            <div className="sidebar">
                <h3>Otros Artículos</h3>
                {otherArticles.map(otherArticle => (
                    <Link key={otherArticle.id} to={`/article/${otherArticle.id}`}>
                        <ArticleCard 
                            id={otherArticle.id}
                            title={otherArticle.title} 
                            content={otherArticle.content} 
                            img={otherArticle.img} 
                            usuario={otherArticle.usuario} 
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ArticleScreen;
