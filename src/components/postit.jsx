import React from "react";

function Postit({id, texto, eliminarPostit}) {
    return (
        <div className="postit">
            <p>{texto}</p>
            <button className="btn-eliminar" onClick={() => eliminarPostit(id)}>X</button>
        </div>
    );
}

export default Postit;