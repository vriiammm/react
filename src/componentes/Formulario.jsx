import { useState } from 'react';

export default function Formulario() {

const [documento, setDocumento] = useState("");
const [apellido, setApellido] = useState("");
const [nombres, setNombres] = useState("");
const [rol, setRol] = useState("");

    const hanlderSubmit = (e) => {
        e.preventDefault();
        console.log({documento, apellido, nombres, rol});
    }
    return (
        <div className="Formulario">
            <h1>Componente Formulario</h1>
            <form onSubmit={hanlderSubmit}>

                <input type="text" 
                placeholder="Documento" 
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                />

                <input type="text" 
                placeholder="Apellidos" 
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                />
                
                <input type="text" 
                placeholder="Nombres" 
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                />
                <select 
                value={rol}
                onChange={(e) => setRol(e.target.value)}


                >
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}