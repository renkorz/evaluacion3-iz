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

  return (
    <>
    <div className="app-container">
      <h1>Post-It Simulator!</h1>
      <Formulariopostit agregarPostit={agregarPostit} />
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