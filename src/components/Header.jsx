import React, { useState } from 'react';
import '../css/Header.css';

const Header = ({ backgroundColor }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header" style={{ backgroundColor }}>
            <a href="/" className="logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/elinca-c86fe.appspot.com/o/Logo.png?alt=media&token=25fcbd3f-e18b-4aaf-940f-d2bb3a7a62ac" alt="Elinca Electrónica" />
            </a>
            <nav>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="/" onClick={toggleMenu}>Inicio</a></li>
                    <li><a href="#services" onClick={toggleMenu}>Servicios</a></li>
                    <li><a href="/proyectos" onClick={toggleMenu}>Proyectos</a></li>
                    <li><a href="/contacto" onClick={toggleMenu}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
