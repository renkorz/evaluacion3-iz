import React from "react";
import PostIt from "./PostIt";

function PostItList({ notes, onDelete }) {
    return (
        <div className="container">
            <div className="row justify-content-start">
                {notes.map((note, index) => (
                    <div 
                        key={index} 
                        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                        sstyle={{ display: 'flex', justifyContent: 'center' }}>

                        <PostIt 
                            title={note.title} 
                            description={note.description} important={note.important} onDelete={() => onDelete(index)}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostItList;