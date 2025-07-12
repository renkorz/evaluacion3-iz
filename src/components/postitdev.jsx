import React from 'react';

function Postit({ id, titulo, texto, importante, eliminarPostit }) {
    return (
        <div className={`postit ${importante ? 'importante' : ''}`}>
            <button className="btn-eliminar" onClick={() => eliminarPostit(id)}>X</button>
            <h2 className="titulo-postit">{titulo}</h2>
            <p className="descripcion-postit">{texto}</p>
        </div>
    );
}

export default Postit;