import React, { useEffect, useState } from 'react';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleDeleteClick = (noteIndex) => {
    setNoteToDelete(noteIndex);
    setShowDeleteModal(true);
  };

 const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

  const handleDelete = () => {
    if (noteToDelete !== null) {
      const updatedNotes = [...notes];
      updatedNotes.splice(noteToDelete, 1);
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }
    setShowDeleteModal(false);
  };

  const handleKeep = () => {
    setShowDeleteModal(false);
  };

  return (
    
      <div className="part3">
        <div className="flex gap-5 p-10 h-[100vh] justify-between">
          <h1 className="text">Notes</h1>
          <div className="">
            <button className="btn1 mx-3">🔍</button>

            <button className="btn2">❕</button>
          </div>
          <div className="fixed btn3 right-10">
          {/* <button
            className="w-10 h-10 bg-white-500 rounded-full text-2xl"
          >
            +
          </button> */}
        </div>
        </div>
      <ul className="flex flex-col items-center w-2/4 px-5 gap-5 text-center justify-center overflow-y-auto list overflow-y-auto">
        {notes.map((note, index) => (
          <li key={index} className="border border-white text-white" style={{ backgroundColor: getRandomColor() }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDeleteClick(index)}>🗑️</button>
          </li>
        ))}
      </ul>

      {/*  delete */}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content gap-3">
            <p className='text-black '>Are you sure you want to delete?</p>
            <button className='mx-3' onClick={handleDelete}>Delete</button>
          
            <button onClick={handleKeep}>Keep</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteList;
