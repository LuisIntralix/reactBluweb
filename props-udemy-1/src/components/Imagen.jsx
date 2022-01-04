import React from 'react'

const Imagen = (props) => {
    return (
        <div>
            <img src={props.url} className='mr-3' alt="..." />
        </div>
    )
}

export default Imagen
