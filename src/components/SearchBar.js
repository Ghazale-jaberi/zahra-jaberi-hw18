import React, { useEffect, useState } from 'react';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

 


  return (
    
       
       <div>
           <input className="" type="text" placeholder="  Food Recipe" />

      <ul className="flex flex-col items-center w-2/4 px-5 gap-5 text-center justify-center overflow-y-auto list overflow-y-auto">
        {notes.map((note, index) => (
          <li key={index} className="border border-white text-white" style={{ backgroundColor: getRandomColor() }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>

   
    </div>
  );
}

export default NoteList;
