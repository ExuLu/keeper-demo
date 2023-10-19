/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState([]);
  const [key, setKey] = useState(1);

  function addNote(inputText) {
    setNotes([...notes, { ...inputText, key }]);
    setKey((k) => k + 1);
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
          key={note.key}
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
