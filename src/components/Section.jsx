import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../css/Section.css';
import 'animate.css';

const Section = ({ number, title, content, image, reverse, color, textcolor, titlecolor }) => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true, // La animación se ejecutará una vez
        threshold: 0.2, // El 40% del elemento debe estar visible para activar la animación
    });

    const getStyledTitle = (title) => {
        const [firstWord, ...rest] = title.split(' ');
        return (
            <>
                <span style={{ color: titlecolor, fontWeight: 'bold' }}>{firstWord}</span>
                {' '}{rest.join(' ')}
            </>
        );
    };

    return (
        <section 
            ref={sectionRef} 
            style={{ 
                backgroundColor: color, 
                color: textcolor,
                opacity: sectionInView ? 1 : 0, // Control de visibilidad
                transition: 'opacity 0.5s ease-out' // Transición suave para la visibilidad
            }} 
            className={`section ${reverse ? 'reverse' : ''}`}
        >
            <div className={`section-number animate__animated ${sectionInView ? 'animate__fadeInLeft' : ''}`}>
                <span style={{opacity: sectionInView ? 1 : 0, color: titlecolor }}>{number}</span>
            </div>
            <div className={`section-content animate__animated ${sectionInView ? 'animate__fadeInUp' : ''}`}>
                <h2>{getStyledTitle(title)}</h2>
                <p>{content}</p>
            </div>
            {image && (
                <div className={`section-image animate__animated ${sectionInView ? 'animate__fadeInRight' : ''}`}>
                    <img src={image} alt={title} />
                </div>
            )}
        </section>
    );
};

export default Section;
