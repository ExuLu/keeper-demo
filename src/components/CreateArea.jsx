import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  // Change to two different changes
  // const [inputText, setInputText] = useState({
  //   title: '',
  //   content: '',
  // });

  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');

  const [titleClicked, setTitleClicked] = useState(false);

  // Add arrow function
  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setInputText((prevNote) => ({
  //     ...prevNote,
  //     [name]: value,
  //   }));
  // }
  function handleButtonClick(e) {
    e.preventDefault();
    props.onClick({ title: titleInput, content: contentInput });
    setTitleInput('');
    setContentInput('');
  }
  // function handleTitleClick() {
  //   setTitleClicked(true);
  // }

  return (
    <div>
      <form className='create-note'>
        <input
          onClick={() => setTitleClicked(true)}
          // Add arrow function
          onChange={(e) => setTitleInput(e.target.value)}
          value={titleInput}
          name='title'
          placeholder='Title'
        />

        {titleClicked && (
          <textarea
            // Add arrow function
            onChange={(e) => setContentInput(e.target.value)}
            // hidden={!titleClicked && 'true'}
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
