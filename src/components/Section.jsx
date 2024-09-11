import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../css/Section.css';
import 'animate.css';

const Section = ({ number, title, content, image, reverse, color, textcolor, titlecolor }) => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const imageRef = useRef(null);
    const [shadowColor, setShadowColor] = useState('rgba(0, 0, 0, 0.2)'); // Estado para guardar el color de la sombra
    const isMobile = window.innerWidth <= 768;

    const getStyledTitle = (title) => {
        const [firstWord, ...rest] = title.split(' ');
        return (
            <>
                <span style={{ color: titlecolor, fontWeight: 'bold' }}>{firstWord}</span>
                {' '}{rest.join(' ')}
            </>
        );
    };

    const handleMouseMove = (e) => {
        const image = imageRef.current;
        const { left, top, width, height } = image.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const rotateX = (y - 0.5) * 30;
        const rotateY = (x - 0.5) * -30;

        const shadowX = (x - 0.5) * 50;
        const shadowY = (y - 0.5) * 50;

        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        image.style.boxShadow = `${shadowX}px ${shadowY}px 50px ${shadowColor}`;
    };

    const handleMouseLeave = () => {
        const image = imageRef.current;
        image.style.transform = 'rotateX(0deg) rotateY(0deg)';
        image.style.boxShadow = `0px 10px 30px ${shadowColor}`; // Mantiene la sombra con el color de la imagen
    };

    useEffect(() => {
        // Cargar la imagen y extraer su color predominante usando un canvas
        const img = new Image();
        img.src = image;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);

            const { data } = ctx.getImageData(0, 0, img.width, img.height);
            let r = 0, g = 0, b = 0;
            const pixelCount = img.width * img.height;

            for (let i = 0; i < data.length; i += 4) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
            }

            r = Math.floor(r / pixelCount);
            g = Math.floor(g / pixelCount);
            b = Math.floor(b / pixelCount);

            // Guardar el color de la sombra basado en el color promedio de la imagen
            setShadowColor(`rgba(${r}, ${g}, ${b}, 0.5)`);
        };
    }, [image]);

    return (
        <section 
            ref={sectionRef} 
            style={{ 
                backgroundColor: color, 
                color: textcolor,
                opacity: sectionInView ? 1 : 0,
                transition: 'opacity 0.5s ease-out'
            }} 
            className={`section ${reverse ? 'reverse' : ''}`}
        >
            <div className={`section-number animate__animated ${sectionInView ? (isMobile ? 'animate__fadeInUp' : 'animate__fadeInLeft') : ''}`}>
                <span style={{opacity: sectionInView ? 1 : 0, color: titlecolor }}>{number}</span>
            </div>
            <div className={`section-content animate__animated ${sectionInView ? (isMobile ? 'animate__fadeInUp' : 'animate__fadeInUp') : ''}`}>
                <h2>{getStyledTitle(title)}</h2>
                <p>{content}</p>
            </div>
            {image && (
                <div 
                    className={`section-image animate__animated ${sectionInView ? (isMobile ? 'animate__fadeInUp' : 'animate__fadeInRight') : ''}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img ref={imageRef} src={image} alt={title} />
                </div>
            )}
        </section>
    );
};

export default Section;
