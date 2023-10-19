import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { PropTypes } from '@mui/material';

// prettier-ignore

function Note({
  onClick, id, title, content,
}) {
  function deleteNote() {
    onClick(id);
  }

  return (
    <div
      className="note"
      id={id}
    >
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        type="button"
        onClick={deleteNote}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

Note.propTypes = {
  onClick: PropTypes.function.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
