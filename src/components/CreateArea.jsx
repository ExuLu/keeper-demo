import React, { useState } from 'react';

function CreateArea(props) {
  // Change to two different changes
  const [inputText, setInputText] = useState({
    title: '',
    content: '',
  });
  const [titleClicked, setTitleClicked] = useState(false);

  // change to arrow function
  function handleChange(e) {
    const { name, value } = e.target;
    setInputText((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }
  function handleClick(e) {
    e.preventDefault();
    props.onClick(inputText);
    setInputText({ ...inputText, title: '', content: '' });
  }

  return (
    <div>
      <form>
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
          value={inputText.content}
          name='content'
          placeholder='Take a note...'
          rows='3'
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
