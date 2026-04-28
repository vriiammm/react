


export default function tarjeta({documento, apellido, nombres, alumno}) {
    return (
        <div className="Tarjeta"
        style={
            {flexDirection: "column", border: "1px solid black", margin: "10px", padding: "10px", backgroundColor: alumno ? "lightgreen" : "lightcoral",
            color : alumno ? "darkgreen" : "darkred"
        }}
        >
        
            <h2
            >{documento}</h2>
            <h3>{apellido}, {nombres}</h3>
        </div>
    )
}