import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {unPokeDetalleAccion, obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion } from '../redux/pokeDucks'
import Detalle from './Detalle'


const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)


    return (
        <div className='row'>

            <div className="col-md-6">

                <h3>Lista de pokemones</h3>

                <br />

                <div className='d-flex justify-content-around '>

                    {
                        pokemones.length === 0 && <button className='btn btn-dark' onClick={() => dispatch(obtenerPokemonesAccion())} >Cargar pokemones</button>

                    }

                    {
                        next && <button className='btn btn-dark' onClick={() => dispatch(siguientePokemonAccion())} >Siguiente pokemones</button>

                    }

                    {
                        previous && <button className='btn btn-dark' onClick={() => dispatch(anteriorPokemonAccion())} >Anterior pokemones</button>

                    }

                </div>

                <ul className='list-group mt-3'>
                    {
                        pokemones.map(item => (
                            <li key={item.name} className='list-group-item'>{item.name}
                                <button className="btn btn-dark btn-sm float-right" onClick={() => dispatch(unPokeDetalleAccion(item.url))}>
                                    Info
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="col-md-6">
                <h3>Detalle pokemon</h3>
                <Detalle/>
            </div>

        </div>
    )
}

export default Pokemones
