import React, { useState } from 'react';

function CreateArea(props) {
  const [inputText, setInputText] = useState({});
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
          onChange={handleChange}
          value={inputText.title}
          name='title'
          placeholder='Title'
        />
        <textarea
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
