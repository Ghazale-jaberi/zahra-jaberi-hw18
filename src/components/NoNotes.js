import React from "react";
import delImg from "../assets/cuate.png"
function NoNotes() {
  return (
    <div className="part4">
      <input className="" type="text" placeholder="  Food Recipe" />
      <img src={delImg} alt={delImg} />
      <p>File not found. Try searching again.</p>
    </div>
  );
}


export default NoNotes;
