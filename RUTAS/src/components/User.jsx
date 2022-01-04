import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    //console.log(useParams());
    const { id } = useParams();

    const [pueblo, setPueblo] = useState([])

    /*Se ejecuta después de pintar todo el componente*/
    useEffect(() => {
        //console.log('UseEffect')
        obtenerDatos()
    }, [])

    /* Se obtiene datos de una api */
    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/'+id)
        const user = await data.json()
        //console.log(user)
        setPueblo(user)
    }



    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>
        </div>
    )
}

export default User
