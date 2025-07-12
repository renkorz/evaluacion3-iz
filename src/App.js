import React, {use, useState} from "react";
import Formulariopostit from './components/formulariopostit';
import Postit from "./components/postit";
import './App.css';

function App() {
  const [postits, setPostits] = useState([]);
  const [contadorId, setContadorId] = useState([1]);

  const agregarPostit = (texto) => {
    const nuevoPostit ={
      id: contadorId,
      texto: texto
    };
    setPostits([nuevoPostit, ...postits]);
    setContadorId(contadorId + 1);
  };

  const eliminarPostit = (id) => {
    setPostits(postits.filter(postit => postit.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Mis Notas</h1>
      <Formulariopostit agregarPostit={agregarPostit}/>
      <div className="postits-grid">
        {postits.map(postit => (
          <Postit
          key={postit.id}
          id={postit.id}
          texto={postit.texto}
          eliminarPostit={eliminarPostit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;