import React from 'react';
import '../css/Clientes.css'; // Importa los estilos para el componente
import data from '../constants/index.js'; // Importa los datos de los clientes

const Clientes = () => {
    const { clientes } = data;

    // Divide los clientes en dos grupos
    const halfIndex = Math.ceil(clientes.length / 2);
    const firstHalf = clientes.slice(0, halfIndex);
    const secondHalf = clientes.slice(halfIndex);

    // Duplica los clientes en cada fila
    const duplicatedFirstHalf = [...firstHalf, ...firstHalf];
    const duplicatedSecondHalf = [...secondHalf, ...secondHalf];

    return (
        <section className="clientes-section">
            <h2 className="clientes-title">Nuestros Clientes</h2>
            <div className="clientes-slider">
                <div className="clientes-row first-row">
                    {duplicatedFirstHalf.map((cliente, index) => (
                        <div key={index} className="cliente-item">
                            <img src={cliente.logo} alt={cliente.name} className="cliente-logo" />
                        </div>
                    ))}
                </div>
                <div className="clientes-row second-row">
                    {duplicatedSecondHalf.map((cliente, index) => (
                        <div key={index} className="cliente-item">
                            <img src={cliente.logo} alt={cliente.name} className="cliente-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clientes;
