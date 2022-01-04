import { useState } from 'react'
import './App.css'
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'

function App() {

  return (
    <div className="container mt-5">
      <h1>Proyecto desde 0</h1>
      <hr />
      <Saludo persona={'Luis'} edad={30} />
      <Saludo persona='Ignacio' edad={20}/>
      <Saludo persona='Pedro' edad={15}/>
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario url='https://picsum.photos/64' persona={'Luis'} descripcion={'ffffff'} ></Comentario>
      <Comentario url='https://picsum.photos/64' persona={'Juanito'} descripcion={'sssssssss'} ></Comentario>
      <Comentario url='https://picsum.photos/64' persona={'Pedro'} descripcion={'dddddddddd'} ></Comentario>
      <hr />
    </div>
  )
}

export default App
