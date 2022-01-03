import React from 'react'
import { useState } from 'react'

const Formulario = () => {

    const [fruta, setFruta] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [ConjuntoFrutas, setConjuntoFrutas] = useState([{ mifruta: 'Platano', midescripcion: 'Es genial' }])
    const guardarDatos = (e) => {
        e.preventDefault()

        if (!fruta.trim()) {
            console.log('Está vacío fruta')
            return
        }

        if (!descripcion.trim()) {
            console.log('Está vacío descripción')
            return
        }

        console.log('procesando datos...' + fruta + descripcion)
        e.target.reset()
        setFruta('')
        setDescripcion('')
        setConjuntoFrutas([...ConjuntoFrutas, { mifruta: fruta, midescripcion: descripcion }])

    }



    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <input type="text"
                    placeholder='Ingrese fruta'
                    className='form-control mb-2'
                    onChange={(e) => setFruta(e.target.value)} />

                <input type="text"
                    placeholder='Ingrese descripción'
                    className='form-control mb-2'
                    onChange={e => setDescripcion(e.target.value)} />

                <button className="btn btn-primary btn-block" type='submit'>Agregar</button>
            </form>

            <h2>Listas</h2>

            <ul>
            {
                ConjuntoFrutas.map((item, index) => (
                    <li key={index}>
                        FRUTA: {item.mifruta} , DESC: {item.midescripcion} 
                    </li>
                ))
            }
            </ul>




        </div>
    )
}

export default Formulario
