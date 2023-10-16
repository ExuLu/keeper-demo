import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');

  const [titleClicked, setTitleClicked] = useState(false);

  function handleButtonClick(e) {
    e.preventDefault();
    props.onClick({ title: titleInput, content: contentInput });
    setTitleInput('');
    setContentInput('');
  }

  return (
    <div>
      <form className='create-note'>
        <input
          onClick={() => setTitleClicked(true)}
          onChange={(e) => setTitleInput(e.target.value)}
          value={titleInput}
          name='title'
          placeholder='Title'
        />

        {titleClicked && (
          <textarea
            onChange={(e) => setContentInput(e.target.value)}
            value={contentInput}
            name='content'
            placeholder='Take a note...'
          />
        )}

        <Zoom in={titleClicked && true}>
          <Fab onClick={handleButtonClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
