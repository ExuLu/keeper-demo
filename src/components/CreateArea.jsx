import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  // Change to two different changes
  const [inputText, setInputText] = useState({
    title: '',
    content: '',
  });
  const [titleClicked, setTitleClicked] = useState(false);

  // Add arrow function
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
          // Add arrow function
          onChange={handleChange} 
          value={inputText.title}
          name='title'
          placeholder='Title'
        />

        <textarea
          // Add arrow function
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
