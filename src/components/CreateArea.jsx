import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [titleClicked, setTitleClicked] = useState(false);

  function handleButtonClick(e) {
    e.preventDefault();
    props.onClick({ title, content });
    setTitle('');
    setContent('');
  }

  return (
    <div>
      <form className='create-note'>
        <input
          onClick={() => setTitleClicked(true)}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name='title'
          placeholder='Title'
        />

        {titleClicked && (
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
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
