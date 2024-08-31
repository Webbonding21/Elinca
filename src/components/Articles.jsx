import React from 'react';
import ArticleCard from './ArticleCard';
import data from '../constants/index.js';
import '../css/Articles.css';
import { useInView } from 'react-intersection-observer';

const Articles = () => {
    const { articulos } = data;

    return (
        <section className="articles-section">
            <h2 className="articles-title animate__animated animate__fadeInUp">Artículos Recientes</h2>
            <div className="articles-container">
                {articulos.slice(0, 3).map((article, index) => {
                    const { ref, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.1,
                    });

                    const animationClass = inView ? (index % 2 === 0 ? 'animate__fadeInUp' : 'animate__fadeInDown') : '';

                    return (
                        <div
                            key={article.id}
                            ref={ref}
                            className={`article-wrapper animate__animated ${animationClass}`}
                        >
                            <ArticleCard
                                title={article.title}
                                content={article.content}
                                img={article.img}
                                usuario={article.usuario}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="view-more-container">
                <a href="/articles" className="view-more-button">Ver Más</a>
            </div>
        </section>
    );
};

export default Articles;
