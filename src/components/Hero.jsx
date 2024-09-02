import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../css/Hero.css';
import 'animate.css';
import Header from './Header';

const Hero = () => {
    // Utiliza el hook `useInView` para observar si el logo entra en la vista
    const { ref: logoRef, inView: logoInView } = useInView({
        triggerOnce: true, // La animación solo se ejecutará una vez
        threshold: 0.5, // El 50% del logo debe estar visible para activar la animación
    });

    return (
        <section style={{backgroundImage: 'url("hero.jpg")'}} className="hero">
            <Header backgroundColor={'rgba(0, 0, 0, 0)'} />
            <div className="hero-content">
                <p className={`title ${logoInView ? 'animate__animated animate__fadeInUp animate__slow' : ''}`}>LÍDERES EN <b>AUTOMATIZACIÓN</b>  Y <b>ROBÓTICA</b> INDUSTRIAL</p>
                <img 
                    ref={logoRef}
                    className={`hero-logo ${logoInView ? 'animate__animated animate__fadeInRight animate__slow' : ''}`} 
                    src="logof.png" 
                    alt="Elinca Electrónica" 
                    id="hero-logo"
                />
            </div>
        </section>
    );
};

export default Hero;
