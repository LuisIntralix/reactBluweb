import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {
  const [tarea, setTarea] = useState('')
  const [conjuntoTareas, setConjuntoTareas] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState(null)

  const agregarTarea = (e) => {
    e.preventDefault()

    if (!tarea.trim()) {
      setError('Escribe algo...')
      return
    }

    setConjuntoTareas([
      ...conjuntoTareas,
      { id: nanoid(5), nombreTarea: tarea }
    ])

    setTarea('')
    setError(null)
  }


  const eliminarTarea = id => {
    //console.log(id)
    const arrayFiltrado = conjuntoTareas.filter(item => item.id !== id)
    setConjuntoTareas(arrayFiltrado)
  }

  const editarTarea = item => {
    setModoEdicion(true)
    setTarea(item.nombreTarea)
    setId(item.id)
  }


  const editar = e => {
    e.preventDefault()
    if (!tarea.trim()) {
      setError('No lo puedes dejar vacío')
      return
    }

    const arrayEditado = conjuntoTareas.map(
      item => item.id === id ? { id: id, nombreTarea: tarea } : item
    )

    setConjuntoTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId('')
    setError(null)


  }


  return (
    <div className="container mt-5">
      <h1 className='text-center'>CRUD Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">

            {

              conjuntoTareas.length === 0 ? (
                <li className="list-group-item">No hay tareas</li>
              ) : (


                conjuntoTareas.map(item => (

                  <li className="list-group-item" key={item.id}>
                    <span className="lead">  {item.nombreTarea} </span>
                    <button className="btn btn-danger btn-sm float-right mx-2" style={{ float: 'right' }} onClick={() => eliminarTarea(item.id)}>Eliminar</button>
                    <button className="btn btn-warning btn-sm float-right mx-2" style={{ float: 'right' }} onClick={() => editarTarea(item)}>Editar</button>
                  </li>

                ))

              )

            }

          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
            }
          </h4>
          <form onSubmit={modoEdicion ? editar : agregarTarea}>

            {
              error ? (<span className="text-danger">{error}</span>) : null
            }


            <input type="text" className="form-control mb-2"
              placeholder='Ingrese tarea'
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />

            {
              modoEdicion ? (

                <button className="btn btn-warning btn-block" type='submit'>
                  Editar
                </button>
              ) : (
                <button className="btn btn-dark btn-block" type='submit'>
                  Agregar
                </button>
              )
            }


          </form>
        </div>
      </div>
    </div>
  )
}

export default App
