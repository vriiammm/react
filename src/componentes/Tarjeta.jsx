


export default function tarjeta({documento, apellido, nombres}) {
    return (
        <div className="Tarjeta">
            <h1>
                Componente Tarjeta
            </h1>
            <h2>{documento}</h2>
            <h3>{apellido}, {nombres}</h3>
        </div>
    )
}