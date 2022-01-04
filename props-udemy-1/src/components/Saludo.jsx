import React from 'react'

const Saludo = (props) => {

    return (
        <div>
            <h2>Saludando a {props.persona}</h2>
            <h4>Edad: {props.edad}</h4>
        </div>
    )
}

export default Saludo
