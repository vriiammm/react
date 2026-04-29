import { useState } from 'react';
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import './App.css';

const personasDefault = [
    {documento:"48354997", apellido:"Mancilla", nombres:"Benjamin", alumno: true, curso: "1ro", division: "1ra"},
    {documento:"48689022", apellido:"Rodriguez", nombres:"Brian", alumno: false, curso: "2do", division: "2da"},
    {documento:"48354503", apellido:"Suares", nombres:"Ezequiel", alumno: true, curso: "3ro", division: "3ra"},
    {documento:"48354750", apellido:"Villaroel", nombres:"Elio", alumno: false, curso: "4to", division: "4ta"}

];

export default function App() {
  const [personas, setPersonas] = useState(personasDefault);
  const guardar = (persona) => {

    console.log(persona);

    let nuevasPersonas = [...personas];
    nuevasPersonas.push(persona);
    setPersonas(nuevasPersonas);
  }
  return (
    <div className='App'>
      <h1>
      Componente App
      </h1>

      <div className='Contenedor'>

      <Formulario
      guardar = {(persona) => guardar (persona)}
      />
      <Listado
        personas = {personas}
      />


    </div>
    </div>
  )
}