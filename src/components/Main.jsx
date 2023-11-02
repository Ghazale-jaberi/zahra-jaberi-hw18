import React, { useState } from "react";
import Modal from "../components/Modal";
import logo from "../assets/1.png";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const foundNote = storedNotes.find((note) => note.title === searchTitle);

    if (foundNote) {
      setSearchResult("Exists");
    } else {
      setSearchResult("Not Exists");
    }
  };

  return (
    <div>
      <div className="flex gap-5 p-10 h-[100vh] justify-between">
        <h1 className="text">Notes</h1>
        <div className="flex gap-2">
          <input
          className="inputs"
            type="text"
            placeholder="  Search by title..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button className="btn1" onClick={handleSearch}>
            🔍
          </button>
        </div>
        <div className="">
          <button className="btn2" onClick={() => setIsModalOpen(true)}>
            ❕
          </button>
          {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </div>
      </div>
      <div className="img">
        <img src={logo} alt="logo" />
        <p>Create your first note!</p>
        {searchResult && <p>{`Search result: ${searchResult}`}</p>}
      </div>
    </div>
  );
};

export default Main;
