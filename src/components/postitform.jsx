import React, { useState } from "react";

function PostItForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [important, setImportant] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim() === '') {
            setError(true);
            return;
        }

        const newNote = {
            title,
            description,
            important
        };

        onAdd(newNote);

        // Limpiar los campos
        setTitle('');
        setDescription('');
        setImportant(false);
        setError(false);
    };

    return (
        <div className="mb-4">
            <form onSubmit={handleSubmit} className="bg-light p-3 rounded">
                {error && (
                    <div className="alert alert-danger">La descripción es obligatoria.</div>
                )}
                
                <div className="mb-2">
                    <label className="form-label">Título (opcional)</label>
                    <input type="text" className="form-control" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div className="mb-2">
                    <label className="form-label">Descripción *</label>
                    <textarea className="form-control" rows="2" placeholder="Escribe algo..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="important" checked={important} onChange={(e) => setImportant(e.target.checked)}/>
                    <label className="form-check-label" htmlFor="important">
                        Importante
                    </label>
                </div>

                <button type="submit" className="btn btn-dark">
                    Agregar Nota
                </button>
            </form>
        </div>
    )
}

export default PostItForm;