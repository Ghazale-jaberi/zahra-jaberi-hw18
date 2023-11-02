import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Designed By Ghazale-jbr</h2>
        <h2>App Version = 1.0.0</h2>
        <button onClick={onClose}>✖️</button>
      </div>
    </div>
  );
};

export default Modal;
