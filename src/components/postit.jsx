import React from "react";
import '../styles/App.css';

function PostIt({ title, description, important, onDelete }) {
    const backgroundColor = important ? '#EC7063' : '#FFFFCC';

    return (
        <div className="postit"
            style={{
                backgroundColor,
                aspectRatio: '1 / 1', // Mantiene el cuadrado
                width: '100%',        // Se adapta al espacio
                maxWidth: '250px',    // Limita el tamaño en pantalla
                boxShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                borderRadius: '10px',
                wordBreak: 'break-word',
                position: 'relative',
                padding: '1rem'
            }}
        >
            {/* Botón para eliminar el post-it */}
            <button 
                onClick={ onDelete } 
                className="btn-close position-absolute" 
                style={{top: '10px', right: '10px'}} 
                aria-label="Eliminar"
            />

            {/* Título */}
            {title && <h4 className="mb-2" style={{fontSize: '2rem'}}>{title}</h4>}

            {/* Descripción */}
            <p style={{ fontSize: '1.2rem', marginBottom: 0}}>{description}</p>
        </div>
    )
}

export default PostIt;