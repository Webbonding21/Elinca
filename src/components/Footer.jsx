import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import '../css/Footer.css';
import logo from '../../public/logo.png'; // Asegúrate de que el logo esté en la carpeta correcta

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <a href="/">
                    <img src={logo} alt="Elinca Electrónica" className="footer-logo" />
                    </a>
                    <p>
                        Somos líderes en automatización y robótica industrial, comprometidos en brindar soluciones innovadoras para mejorar la eficiencia de nuestros clientes.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2>Enlaces Rápidos</h2>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/servicios">Servicios</a></li>
                        <li><a href="/proyectos">Proyectos</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h2>Síguenos</h2>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
                {/* Nueva sección de contacto */}
                <div className="footer-section contact">
                    <h2>Contacto</h2>
                    <p><b>Teléfono:</b> +123 456 7890</p>
                    <p><b>Email:</b> contacto@elinca.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Elinca Electrónica. Todos los derechos reservados.</p>
                <p className="credit">Esta página fue hecha por <a href="https://webbonding.onrender.com" target="_blank" rel="noopener noreferrer">Web Bonding</a>.</p>
            </div>
        </footer>
    );
};

export default Footer;
