import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: '',
    content: '',
  });
  const [titleClicked, setTitleClicked] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputText((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }
  function handleButtonClick(e) {
    e.preventDefault();
    props.onClick(inputText);
    setInputText({ ...inputText, title: '', content: '' });
  }
  function handleTitleClick() {
    setTitleClicked(true);
  }

  return (
    <div>
      <form className='create-note'>
        <input
          onClick={handleTitleClick}
          onChange={handleChange}
          value={inputText.title}
          name='title'
          placeholder='Title'
        />

        <textarea
          onChange={handleChange}
          hidden={!titleClicked && 'true'}
          value={inputText.content}
          name='content'
          placeholder='Take a note...'
        />

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
