import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(inputText) {
    console.log(inputText);
    setNotes([...notes, inputText]);
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
      {/* <Note key={1} title='Note title' content='Note content' /> */}
      <Footer />
    </div>
  );
}

export default App;
