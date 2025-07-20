import React, {useState} from "react";
import Formulariopostit from './components/formulariopostit';
import Postit from "./components/postitdev";
import './App.css';

function App() {
  const [postits, setPostits] = useState([]);

  const agregarPostit = (titulo, texto, importante) => {
    const nuevoPostit = {
      id: Date.now(),
      titulo,
      texto,
      importante
    };
    setPostits([...postits, nuevoPostit]); // Esto hace que se añada al final de la lista de postit
  };

  const eliminarPostit = (id) => {
    setPostits(postits.filter(postit => postit.id !== id));
  };

  // FUNCION PARA INTEGRAR API Y OBTENER RECETAS ALEATORIAS
const obtenerReceta = async () => {
  try {
    const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const datos = await respuesta.json();

    if (datos.meals && datos.meals.length > 0) {
      const receta = datos.meals[0];
      const titulo = receta.strMeal;
      const texto = receta.strInstructions ? receta.strInstructions.slice(0, 250) + '...' : "Sin instrucciones disponibles.";
      const importante = false;

      agregarPostit(titulo, texto, importante);
    } else {
      console.error("No se encontró receta válida.");
    }
  } catch (error) {
    console.error("Error al obtener receta:", error);
  }
};

  return (
    <>
    <div className="app-container">
      <h1>Post-It Simulator!</h1>
      <Formulariopostit agregarPostit={agregarPostit} />
      
      {/* BOTON RECETA */}
      <div className="contenedor-receta">
        <button className="boton-receta" onClick={obtenerReceta}>Ver receta aleatoria. </button>
      </div>
      
      <div className="postits-grid">
        {postits.map(postit => (
          <Postit 
            key={postit.id} 
            id={postit.id} 
            titulo={postit.titulo}
            texto={postit.texto} 
            importante={postit.importante}
            eliminarPostit={eliminarPostit} 
          />
        ))}
      </div>
    </div>
        <footer className="pie-pagina">
      &copy; 2025 Iñaki Zárate. Todos los derechos reservados.
    </footer>
    </>
  );
}

export default App;