import React, { useState } from "react";
import "./App.css"; 
import Note from "./components/Note.jsx";
import Main from "./components/Main";
import Home from "./components/Home";
import NoNotes from "./components/NoNotes";
const App = () => {
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
  const [showNoteComponent, setShowNoteComponent] = useState(false); 

  const handleAddNote = () => {
    setShowNoteComponent(true);
  };
  const [showNoNotes, setShowNoNotes] = useState(false);

  const handleSearchClick = () => {
    setShowNoNotes(true);
  };
  return (
    <div className="App">
      <div>
        {showNoteComponent ? <Home /> : <Main />}{" "}
        {/* showNoteComponent */}
      </div>

      <div className="fixed btn3 right-10">
        <button
          className="bg-blue-500 text-white  "
          onClick={handleAddNote} // 
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
