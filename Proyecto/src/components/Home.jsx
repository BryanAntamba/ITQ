// Importa los estilos para la página Home
import "./Home.css";
// Importamos las imagen especificando las rutas donde estan cada una
import bryan from "../img/bryan.jpg";
import edison from "../img/edison.jpg";
import erick from "../img/erick.jpg";
import jonathann from "../img/jonathann.jpg";
import Esteban from "../img/esteban.jpg";

// Componente funcional 'Home' que recibe las propiedades 'user' y 'setUser'
export function Home({ user, setUser }) {
    // Define una función para manejar el cierre de sesión
    const handleLogout = () => {
        // Resetea el estado del usuario a un arreglo vacío
        setUser([]);
    };
    // Array de objetos que contiene la información de las imágenes y descripciones de los integrantes
    const images = [
        { 
            // Ruta de la imagen
            src: bryan, 
            // Texto alternativo para accesibilidad
            alt: "Bryan Justin Antamba Enriquez", 
            description: "Nombre: Bryan Justin Antamba Enriquez\nEdad: 21 años\nCarrera: Desarrollo de Software\nDescripción: Me gusta la tecnología y el deporte." 
        },
        { 
            src: edison, 
            alt: "Edison Jhosue Proaño Peñafiel", 
            description: "Nombre: Edison Jhosue Proaño Peñafiel\nEdad: 29 años\nCarrera: Desarrollo de Software\nDescripción: Programador aspirante a Junior, versátil dentro de cualquier campo y amante de Zell." 
        },
        { 
            src: erick, 
            alt: "Erick Santiago Mejía Hernández", 
            description: "Nombre: Erick Santiago Mejía Hernández\nEdad: 19 años\nCarrera: Desarrollo de Software\nDescripción: Me gusta la tecnología, jugar videojuegos y escuchar música." 
        },
        { 
            src: jonathann, 
            alt: "Jonathan Jair Pardo Gomez", 
            description: "Nombre: Jonathan Jair Pardo Gomez\nEdad: 19 años\nCarrera: Desarrollo de Software\nDescripción: Me gustan mucho los videojuegos y aspiro a viajar por muchos países." 
        },
        { 
            src: Esteban, 
            alt: "Esteban Alejandro Sánchez Plaza", 
            description: "Nombre: Esteban Alejandro Sánchez Plaza\nEdad: 19 años\nCarrera: Desarrollo de Software\nDescripción: Asociativo, colaborativo, me gusta escuchar música." 
        }
    ];
    // Estructura JSX que define el diseño del componente
    return (
        <section>
            {/* Encabezado con una barra de navegación */}
            <header>
                <nav>
                    <ul>
                        <li>
                            {/* Enlace a la sección 'Inicio' */}
                            <a href="#Home">Inicio</a>
                        </li>
                        <li>
                            {/* Enlace a la sección 'Nosotros' */}
                            <a href="#Home">Nosotros</a>
                        </li>
                        <li>
                            {/* Enlace a la sección 'Presentación' */}
                            <a href="#Home">Presentación</a>
                        </li>
                        <li>
                            {/* Enlace a la sección 'Grupo 2' */}
                            <a href="#Home">Grupo 2</a>
                        </li>
                        <li>
                            {/* Botón para cerrar sesión que llama a 'handleLogout' al hacer clic */}
                            <button className="boton1" onClick={handleLogout}>
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* Sección para mostrar un saludo personalizado al usuario */}
            <div className="usuario">
                <h1 className="Principal1">¡Hola</h1>
                {/* Inserta dinámicamente el nombre del usuario */}
                <h1 className="Principal2">{user}!</h1>
            </div>
            {/* Galería de imágenes con descripciones */}
            <div className="gallery">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        {/* Imagen de cada integrante */}
                        <img src={image.src} alt={image.alt} className="gallery-image" />
                        {/* Descripción formateada con <pre> para respetar los saltos de línea */}
                        <pre className="gallery-description">{image.description}</pre>
                    </div>
                ))}
            </div>
        </section>
    );
}
