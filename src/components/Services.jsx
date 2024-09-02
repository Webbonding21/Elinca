import React from 'react';
import ServiceCard from './ServiceCard'; // Asegúrate de que la ruta sea correcta
import data from '../../public/index.js'; // Importa los servicios
import '../css/Services.css'; // Si deseas agregar estilos adicionales
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const { servicios } = data;
    const isMobile = window.innerWidth <= 768; // Detecta si el ancho de la pantalla es de 768px o menos

    return (
        <section className="services-section">
            <h2 className="services-title animate__animated animate__fadeInUp">Nuestros Servicios</h2>
            <div className="services-container">
                {servicios.map((service, index) => {
                    const { ref, inView } = useInView({
                        triggerOnce: true, // Solo activa la animación una vez
                        threshold: 0.1, // Ajusta el umbral según sea necesario
                    });

                    // Alterna las animaciones basadas en la visibilidad y tamaño de pantalla
                    let animationClass = '';
                    if (inView) {
                        if (isMobile) {
                            animationClass = 'animate__fadeInUp';
                        } else {
                            animationClass = index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight';
                        }
                    }

                    return (
                        <div
                            key={service.id}
                            ref={ref}
                            className={`service-wrapper animate__animated ${animationClass}`}
                        >
                            <ServiceCard
                                title={service.title}
                                content={service.content}
                                img={service.imgs} // Asegúrate de que coincida con la propiedad en ServiceCard
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
