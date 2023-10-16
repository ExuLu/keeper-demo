import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import uniqid from 'uniqid';

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(inputText) {
    setNotes([...notes, inputText]);
  }
  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addNote} />
      {notes.map((note, index) => (
        <Note
          key={uniqid()}
          id={index}
          title={note.title}
          content={note.content}
          onClick={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
