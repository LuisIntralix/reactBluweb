import React from 'react'
import { Fragment } from 'react'

const Contador = () => {

    const [contador,setContador] = React.useState(0)



    return (
        <Fragment>
            <h2>Contador</h2>
            <h3> Nuestro número aumentado : {contador}  </h3>
            <h4>
                {
                    (contador > 2) ? 'Es mayor a 2' : 'Es menor a 2'
                }
            </h4>
            <button onClick={() => setContador(contador+1)}>Aumentar</button>
        </Fragment>
    )
}

export default Contador
