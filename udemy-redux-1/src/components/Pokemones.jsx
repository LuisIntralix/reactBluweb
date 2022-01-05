import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, obtenerPokemonesEspecificoAccion } from '../redux/pokeDucks'


const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.array)

        /*Se ejecuta después de pintar todo el componente*/
        useEffect(() => {
            //console.log('UseEffect')
            dispatch(obtenerPokemonesAccion())

        }, [])



    return (
        <div>
            Lista de pokemones
            <hr />
            <button onClick={() => dispatch(obtenerPokemonesAccion())} >Cargar pokemones</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Pokemones
