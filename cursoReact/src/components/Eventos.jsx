import React from 'react'
import { Fragment } from 'react'
import { useState } from 'react'

const Eventos = () => {

    const [texto,setTexto] = useState('Texto por defecto')


    const eventoClick = () => {
        setTexto('Cambiando el texto...')
    }

    

    return (
        <Fragment>
            <hr/>
            <h2>{ texto }</h2>
            <button onClick={() => eventoClick()}>Click</button>
        </Fragment>
    )
}

export default Eventos
