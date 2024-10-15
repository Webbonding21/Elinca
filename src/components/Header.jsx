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
                <img src="https://firebasestorage.googleapis.com/v0/b/elinca-c86fe.appspot.com/o/logo_elinca_final.png?alt=media&token=a0e2ab27-075a-4396-9588-4293b22c382b" alt="Elinca Electrónica" />
            </a>
            <nav>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <div style={{backgroundColor: 'white', paddingTop:'3px', paddingRight:'3px', paddingLeft:'3px'}} className="globalseo-select globalseo-lang-selector-wrapper globalseo-exclude">
                        <details role="group">
                            <summary role="button" className="globalseo-lang-selector-loading">
                                <svg className="globalseo-lang-selector-loading-icon" width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            </svg>
                            </summary>
                        </details>
                    </div>
                    <li><a href="/" onClick={toggleMenu}>Inicio</a></li>
                    <li><a href="/articles" onClick={toggleMenu}>Artículos</a></li>
                    <li><a href="/proyectos" onClick={toggleMenu}>Proyectos</a></li>
                    <li><a href="/contacto" onClick={toggleMenu}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
