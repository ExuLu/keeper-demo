/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { PropTypes, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea({ onClick }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [titleClicked, setTitleClicked] = useState(false);

  function createNote(e) {
    e.preventDefault();
    onClick({ title, content });
    setTitle('');
    setContent('');
    setTitleClicked(false);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick={() => setTitleClicked(true)}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name="title"
          placeholder="Title"
        />

        {titleClicked && (
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            name="content"
            placeholder="Take a note..."
          />
        )}

        <Zoom in={titleClicked && true}>
          <Fab onClick={createNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

CreateArea.propTypes = {
  onClick: PropTypes.function.isRequired,
};
export default CreateArea;
