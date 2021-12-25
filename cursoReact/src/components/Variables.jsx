import React from 'react'

const Variables = () => {

const saludo = 'Hola desde constante';
const imagen = 'https://carlosazaustre.es/images/react-vite/logo-vite.png';

    return (
        <div>
            <h2>Nuevo componente {saludo} </h2>
            <img src={imagen} alt="" />
        </div>
    )
}

export default Variables
