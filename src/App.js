import React, { useState } from "react";
import PostItForm from './components/PostItForm';
import PostItList from './components/PostItList';
import './styles/App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const deleteNote = (index) => {
    const updateNotes = [...notes];
    updateNotes.splice(index, 1);
    setNotes(updateNotes);
  };

  return (
    <div className="App container-fluid py-4">
      <h1 className='text-center mb-4 title'>Mis Notas</h1>
      <PostItForm onAdd={addNote} />
      <PostItList notes={notes} onDelete={deleteNote}/>
    </div>
  )
}

export default App;