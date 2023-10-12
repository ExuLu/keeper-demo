import React from 'react';

function Note(props) {
    
  function handleClick() {
    props.onClick(props.id);
  }

  return (
    <div className='note' key={props.key} id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
