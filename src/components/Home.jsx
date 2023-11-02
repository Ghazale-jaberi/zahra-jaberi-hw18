import React, { useState } from 'react';
import Note from './Note';
import NoteList from './NoteList';

const App = () => {
  const [isDataSaved, setIsDataSaved] = useState(false);

  const handleSaveData = () => {
   
    localStorage.setItem('savedData', 'Your saved data here');

    setIsDataSaved(true);
  }

  return (
    <div className="App">
      {isDataSaved ? <NoteList /> : <Note onSaveData={handleSaveData} />}
      {/* {isDataSaved || <button onClick={handleSaveData}>Save Data</button>} */}
    </div>
  );
}

export default App;
