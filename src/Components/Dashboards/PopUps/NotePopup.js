// src/components/Dashboard/NotePopus/NotePopup.js
import React from 'react';
import '../../../Styles/Dashboards/PopUps/NotePopup.css';

const NotePopup = ({ note, onClose }) => {
  return (
    <div className="note-popup-overlay" onClick={onClose}>
      <div className="note-popup" onClick={(e) => e.stopPropagation()}>
        <h2>Notas del Cliente</h2>
        <p>{note}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default NotePopup;
