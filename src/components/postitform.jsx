import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap'

function PostItForm ({ onAdd }) {
    const [title, setTitle] = useState ('');
    const [description, setDescription] = useState('');
    const [important, setImportant] = useState('');
    const [error, setError] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();

        if (description.trim() === ''){
            setError(true);
            return;
        }
        
        const newNote = {
            title,
            description,
            important
        };

        onAdd(newNote);

        setTitle('');
        setDescription('');
        setImportant(false);
        setError(false)
    };

    return (
        <div className="mb-4">
            <Form onSubmit={ handleSumbit } className="bg-light p-3 rounded">
                {error && <Alert variant="danger">La descripción es obligatoria.</Alert>}

                <Form.Group className="mb-2">
                    <Form.Label>Título (opcional)</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>Descripción *</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Escribe algo..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="Importante"
                    checked={important}
                    onChange={(e) => setImportant(e.target.checked)}
                />
            </Form.Group>

            <Button type="submit" variant="dark">
                Agregar Nota
            </Button>
        </Form>
    </div>
    );
}

export default PostItForm;