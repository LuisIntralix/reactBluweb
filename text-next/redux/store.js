import {createStore, combineReducers, applyMiddleware, compose} from 'redux'   
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//Siempre llamar a todos los reducers
import pokeReducer from './pokeDucks'

const rootReducer = combineReducers({
    //Agregar los reducers
    pokemones : pokeReducer
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}