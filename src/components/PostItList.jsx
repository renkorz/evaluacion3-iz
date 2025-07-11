import React from "react";
import PostIt from './PostIt';
import { Row, Col } from 'react-bootstrap';

function PostItList({ notes, onDelete}) {
    return (
        <Row>
            {notes.map((note, index) =>
                <Col
                    key={index}
                    xs={12} // 1 por fila en celulares (responsive automático)
                    sm={6}
                    md={4}
                    lg={3} // 4 por fila pantalla grande
                    className="mb-4 d-flex justify-content-center"
                >
                    <PostIt
                        title={note.title}
                        description={note.description}
                        important={note.important}
                        onDelete={() => onDelete(index)} // función para eliminar el PostIt
                    />
                </Col>
            )}
        </Row>
    );
}

export default PostItList;