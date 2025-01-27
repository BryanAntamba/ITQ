// Importa los estilos CSS para la aplicación
import './App.css'
// Importa el componente Formulario
import { Formulario } from './components/Formulario'
// Importa el componente Home
import { Home } from './components/Home'
// Importa el hook useState para manejar el estado
import { useState } from 'react'
function App() {
  // Define un estado llamado "user" con un valor inicial de un array vacío
  // "setUser" es la función que se utiliza para actualizar el estado
  const [user,setUser]=useState([])

  return (
    <>
    {/* Contenedor principal de la aplicación */}
      <div className='App'>
        {
          // Si el estado "user" está vacío (no tiene elementos), muestra el componente Formulario
          !user.length > 0
          ?<Formulario setUser={setUser}/>
           // Si el estado "user" tiene elementos, muestra el componente Home
          : <Home user={user} setUser={setUser}/>
        }
      </div>
    </>
  )
}
// Exporta el componente App como el componente principal de la aplicación
export default App
