import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import './App.css';

const personas = [
    {documento:"48689022", apellido:"Mancilla", nombres:"Benjamin", alumno: true},
    {documento:"48689033", apellido:"Rodriguez", nombres:"Brian", alumno: false},
    {documento:"48689055", apellido:"Suares", nombres:"Ezequiel", alumno: true},
    {documento:"48689555", apellido:"Villaroel", nombres:"Elio", alumno: false}

];

export default function App() {
  return (
    <div className='App'>
      <h1>
      Componente App
      </h1>

      <div className='Contenedor'>

      <Formulario />
      <Listado
        personas = {personas}
      />


    </div>
    </div>
  )
}