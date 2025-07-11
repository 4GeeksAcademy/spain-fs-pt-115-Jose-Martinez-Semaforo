import React, { useState } from 'react';
import '../../styles/index.css';

const Semaforo = () => {
    const [luzActiva, setLuzActiva] = useState("red");
    const [mostrarPurpura, setMostrarPurpura] = useState(false);
    const [colorPurpura, setColorPurpura] = useState("#800080"); // Púrpura por defecto

    const coloresCiclo = ["red", "yellow", "green"];

    const cambiarLuz = () => {
        const indiceActual = coloresCiclo.indexOf(luzActiva);
        const proximoIndice = (indiceActual + 1) % coloresCiclo.length;
        setLuzActiva(coloresCiclo[proximoIndice]);
    };

    const generarColorAleatorio = () => {
        const nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColorPurpura(nuevoColor);
    };

    const getClassNameForLight = (colorDeLuz) => {
        let classes = `light ${colorDeLuz}`;
        if (luzActiva === colorDeLuz) {
            classes += ' glow';
        }
        return classes;
    };

    return (
        <div>
            <div className="traffic-light-body">
                <div
                    onClick={() => setLuzActiva("red")}
                    className={getClassNameForLight("red")}
                ></div>
                <div
                    onClick={() => setLuzActiva("yellow")}
                    className={getClassNameForLight("yellow")}
                ></div>
                <div
                    onClick={() => setLuzActiva("green")}
                    className={getClassNameForLight("green")}
                ></div>
                {mostrarPurpura && (
                    <div
                        onClick={() => setLuzActiva("purple")}
                        className={`light purple ${luzActiva === 'purple' ? 'glow' : ''}`}
                        style={{ backgroundColor: colorPurpura }} 
                    ></div>
                )}
            </div>
            <div className="mt-3 d-flex flex-column">
                <button className="btn btn-primary mb-2" onClick={cambiarLuz}>
                    Alternar Color
                </button>
                <button className="btn btn-secondary mb-2" onClick={() => setMostrarPurpura(true)}>
                    Añadir Púrpura
                </button>
                {mostrarPurpura && (
                    <button className="btn btn-info" onClick={generarColorAleatorio}>
                        Color Púrpura Aleatorio
                    </button>
                )}
            </div>
        </div>
    );
};

export default Semaforo;