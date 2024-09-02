import React from 'react';
import ArticleCard from './ArticleCard';
import data from '../../public/index.js';
import '../css/AllArticles.css';
import { useInView } from 'react-intersection-observer';
import Header from './Header.jsx';

const AllArticles = () => {
    const { articulos } = data;

    return (
        <section className="all-articles-section">
            <Header backgroundColor="#000fdd" />
            <h2 className="all-articles-title animate__animated animate__fadeInUp">Todos los Artículos</h2>
            <div className="all-articles-container">
                {articulos.map((article, index) => {
                    const { ref, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.1,
                    });

                    const animationClass = inView ? 'animate__fadeInUp' : '';

                    return (
                        <div
                            key={article.id}
                            ref={ref}
                            className={`article-wrapper animate__animated ${animationClass}`}
                        >
                            <ArticleCard
                                id={article.id}
                                title={article.title}
                                content={article.content}
                                img={article.img}
                                usuario={article.usuario}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AllArticles;
