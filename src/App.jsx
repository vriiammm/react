import Listado from './componentes/Listado';
import './App.css';

const personas = [
    {documento:"48689022", apellido:"Gomez", nombres:"Maria"},
    {documento:"48689033", apellido:"rodriguez", nombres:"Maria"},
    {documento:"48689055", apellido:"suares", nombres:"Maria"},
    {documento:"48689555", apellido:"Quipe", nombres:"Maria"}

];

export default function App() {
  return (
    <div className='App'>
      <h1>
        Componente App
        </h1>
      <Listado
        personas = {personas}
      />
    </div>
  )
}