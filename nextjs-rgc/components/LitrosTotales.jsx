import {useState} from 'react'

export default function LitrosTotales({text,mycolor}) {
    
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-20px",
            color: `${mycolor}`
          }}>
            <h3>{text.toUpperCase()}</h3>
        </div>
    )
}

LitrosTotales.defaultProps = {
    text:'Valor indefinido',
    mycolor:'#003F80'
}