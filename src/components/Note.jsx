import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ onClick, id, title, content }) {
  function deleteNote() {
    onClick(id);
  }

  return (
    <div className="note" id={id}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={deleteNote}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
