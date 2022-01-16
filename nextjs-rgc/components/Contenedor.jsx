export default function Contenedor({children}) {
    return (
        <div style={{
            background: 'white',          
            paddingTop: '20px',
            paddingRight: '20px',
            paddingBottom: '20px',
            paddingLeft: '30px',
            marginTop: '20px',
            marginRight: '20px',
            marginBottom: '20px',
            marginLeft: '20px',
            borderRadius: '12px',
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px'
          }}>
            {children}
        </div>
    )
}
