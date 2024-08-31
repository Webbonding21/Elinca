import React, { useState } from 'react';
import '../css/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <a href="/" className="logo">
                <img src="logo.png" alt="Elinca Electrónica" />
            </a>
            <nav>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="/" onClick={toggleMenu}>Inicio</a></li>
                    <li><a href="/servicios" onClick={toggleMenu}>Servicios</a></li>
                    <li><a href="/proyectos" onClick={toggleMenu}>Proyectos</a></li>
                    <li><a href="/contacto" onClick={toggleMenu}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
