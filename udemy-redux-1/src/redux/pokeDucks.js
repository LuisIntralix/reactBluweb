import axios from 'axios'

// constantes
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

//Tipos (Casos)
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'

// reducers
export default function pokeReducer(state = dataInicial, action) {

    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            return { ...state, ...action.payload }

        case SIGUIENTE_POKEMONES_EXITO:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }

}


//acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    if (localStorage.getItem('offset=0')) {
        console.log('Datos guardados')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }


    try {
        console.log('Datos desde api')
        //const offset = getState().pokemones.offset
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        console.log(res.data);
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data))

    } catch (error) {
        console.log(error)
    }

}



export const siguientePokemonAccion = () => async (dispatch, getState) => {

    const next = getState().pokemones.next


    if (localStorage.getItem(next)) {
        console.log('Datos guardados siguiente')
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }

    try {
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))

    } catch (error) {
        console.log(error)
    }
}


export const anteriorPokemonAccion = () => async (dispatch, getState) => {
    const previous = getState().pokemones.previous


    if (localStorage.getItem(previous)) {
        console.log('Datos guardados anterior')
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }

    try {
        const res = await axios.get(previous)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))

    } catch (error) {
        console.log(error)
    }

}