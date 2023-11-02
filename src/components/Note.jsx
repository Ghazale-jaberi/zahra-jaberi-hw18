import React, { useState } from 'react';
import save from '../assets/save.png';
import next from '../assets/Vector.png';

const Note = ({ onSaveData }) => {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');

  const handleSave = () => {
    if (titleValue.length > 3 && contentValue.length > 3) {
      const note = { title: titleValue, content: contentValue };
      const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
      existingNotes.push(note);

      localStorage.setItem('notes', JSON.stringify(existingNotes));
      onSaveData();
    } else {
      if (titleValue.length <= 3) {
        setTitleError('Title must be at least 4 characters long.');
      } else {
        setTitleError('');
      }

      if (contentValue.length <= 3) {
        setContentError('Content must be at least 4 characters long.');
      } else {
        setContentError('');
      }
    }
  };

  return (
    <div className='part2'>
      <div className='flex justify-between p-5 m-5 part2'>
        <div className='btn4'>
          <button><img src={next} alt="" /></button>
        </div>
        <div className='btn5'>
          <button onClick={handleSave}>
            <img src={save} alt="" />
          </button>
        </div>
      </div>
      <input
        type="text"
        className='title mx-5'
        placeholder='    Title'
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <input
        type="text"
        className='paragraph mx-5 mt-3'
        placeholder='  Type something...'
        value={contentValue}
        onChange={(e) => setContentValue(e.target.value)}
      />
      <div className="error-message">
        {titleError && <p>{titleError}</p>}
        {contentError && <p>{contentError}</p>}
      </div>
    </div>
  );
}

export default Note;
