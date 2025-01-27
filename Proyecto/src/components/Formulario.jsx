// Importa el archivo CSS llamado "Formulario.css" para aplicar estilos al componente.
import "./Formulario.css"
// Importa el hook `useState` de React, que permite manejar estados dentro del componente.
import { useState } from "react"
// Declara y exporta una función llamada `Formulario`, que es un componente de React. 
// Recibe como propiedad (`prop`) una función `setUser` para actualizar el estado del usuario en un componente padre.
export function Formulario({setUser}){
    // Define un estado llamado `nombre`, inicializado como una cadena vacía. 
    // `setNombre` es la función que se usa para actualizar el valor de `nombre`.
    const [nombre, setNombre]=useState("")
    // Define un estado llamado `contraseña`, inicializado como una cadena vacía. 
    // `setContraseña` se usa para actualizar el valor de `contraseña`.
    const [contraseña,setContraseña]=useState("")
    // Define un estado llamado `error`, inicializado como `false`.
    // `setError` se usa para actualizar el mensaje o estado de error.
    const [error,setError]=useState(false)
    // Define un array con los nombres permitidos para iniciar sesión.
    const nombresPermiso = ["Bryan", "Edison", "Erick", "Esteban", "Jonathan"];
    // Define una constante que almacena la contraseña válida.
  const contraseñaPermiso = "12345";

  // Evita que el formulario realice un recargo de la página al enviarse.
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (nombre.trim() === "" || contraseña.trim() === "") {
          // Si los campos de nombre o contraseña están vacíos, muestra un mensaje.
            setError("Por favor, llena todos los campos.");
            return;
          }
      
          if (!nombresPermiso.includes(nombre)) {
            // Si el nombre ingresado no está en la lista de nombres permitidos, muestra un mensaje.
            setError("Nombre no permitido");
            return;
          }
           // Si la contraseña ingresada no coincide con la contraseña válida, muestra un mensaje.
          if (contraseña !== contraseñaPermiso) {
            setError("Contraseña incorrecta");
            return;
          }
          // Limpia el error si todo está correcto
          setError("");
          // Actualiza el estado del usuario en el componente padre
          setUser([nombre]);
        };
      

    return(
        <section>
          {/* Título del formulario */}
            <h1 className="titulo">ITQ Login</h1>
            {/* Contenedor del formulario */}
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="contenedor">
                    <h1 className="nombre">Nombre:</h1>
                    {/* Campo para ingresar el nombre */}
                <input type="text" placeholder="Nombre Usuario..." value={nombre} onChange={e=>setNombre(e.target.value)}/>
                <h1 className="contraseña">Contraseña:</h1>
                {/* Campo para ingresar la contraseña */}
                <input type="password" placeholder="Contraseña..." value={contraseña} onChange={e=>setContraseña(e.target.value)}/>
                {/* Botón de envío */}
                <button className="botonLogin">Iniciar Sesion</button>
                </div>
            </form>
            {/* Muestra errores si existen */}
            {error && <p>Campos incorrectos</p>}
        </section>
    )
}