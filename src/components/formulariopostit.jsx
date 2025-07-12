import React, { useState } from 'react';

function Formulariopostit({ agregarPostit }) {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [importante, setImportante] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (titulo.trim() === '' || texto.trim() === '') return;

        agregarPostit(titulo, texto, importante);
        setTitulo('');
        setTexto('');
        setImportante(false);
    };

    return (
        <form className="form-postit" onSubmit={manejarEnvio}>
        <input type="text" placeholder="Título." value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <input type="text" placeholder="Descripción." value={texto} onChange={(e) => setTexto(e.target.value)} />
        <label className="checkbox-label">
            <input type="checkbox" checked={importante} onChange={() => setImportante(!importante)}/> Importante! </label>
            <button type="submit">Agregar</button>
        </form>
    );
}

export default Formulariopostit;
