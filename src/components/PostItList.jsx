import React from "react";
import PostIt from "./PostIt";
import '../styles/App.css';

function PostItList({ notes, onDelete }) {
    return (
        <div className="postit-grid">
            {notes.map((note, index) => (
                <PostIt
                    key={index}
                    title={note.title}
                    description={note.description}
                    important={note.important}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </div>
    );
}

export default PostItList;