import { useState } from 'react'
import './App.css'
import Pokemones from './components/Pokemones'
import { Provider } from 'react-redux'
import generateStore from './redux/store'

function App() {

const store = generateStore()

  return (
    <div>
      <Provider store={store}>
        <Pokemones></Pokemones>
      </Provider>

    </div>
  )
}

export default App
