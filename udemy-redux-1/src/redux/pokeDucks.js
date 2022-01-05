import axios from 'axios'

// constantes
const dataInicial = {
    array: [],
    offset: 0
}

//Tipos (Casos)
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'

// reducers
export default function pokeReducer(state = dataInicial, action) {

    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            return { ...state, array: action.payload }


        default:
            return state
    }

}


//acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
    try {
        const {offset} = getState().pokemones
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit=20')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })


    } catch (error) {
        console.log(error)
    }

}


//Prueba de acciones
export const obtenerPokemonesEspecificoAccion = (param) => async (dispatch, getState) => {
    try {

        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=' + param + '&limit=20')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })


    } catch (error) {
        console.log(error)
    }

}


