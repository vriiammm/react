import Tarjeta from "./Tarjeta";


export default function Listado({ personas }) {
    return (
        <div>
            <h1 cla>Componente listado</h1>
            <div className="Listado">
                {personas.map((persona, index) =>
                    <Tarjeta
                        documento={persona.documento}
                        apellido={persona.apellido}
                        nombres={persona.nombres}
                    />
                )}

            </div>

        </div>
    )
}