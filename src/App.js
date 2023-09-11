import './App.css';
import freeCodeCampLogo from './imagenes/logo-freecodecamp.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'> 
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-listas-principal'>
        <h1>My To Do List</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
