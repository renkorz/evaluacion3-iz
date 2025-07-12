import React, {useState} from "react";

function Formulariopostit({agregarPostit}) {
    const [texto, setTexto] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if(texto.trim() === '') return;
        agregarPostit(texto);
        setTexto('');
    };

    return (
        <form className="form-postit" onSubmit={manejarEnvio}>
            <textarea placeholder="Escribe tu post-it aquí." value={texto} onChange={(e) => setTexto(e.target.value)} rows={3}/>
            <button type="sumbit">Agregar</button>
        </form>
    );
}

export default Formulariopostit;