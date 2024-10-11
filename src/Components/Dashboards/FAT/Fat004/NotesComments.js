// src/components/Dashboard/FAT004/NotesComments.js
import React from 'react';

const NotesComments = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Sección VI - Notas y Comentarios</h3>
      <div className="input-group">
        <label>Notas y Comentarios</label>
        <textarea
          name="notasComentarios"
          value={formData.notasComentarios}
          onChange={handleChange}
        />
      </div>
      <div className="signature-group">
        <label>Firma del Emprendedor</label>
        <input
          type="text"
          name="firmaEmprendedor"
          value={formData.firmaEmprendedor}
          onChange={handleChange}
        />
      </div>
      <div className="signature-group">
        <label>Firma del Asesor</label>
        <input
          type="text"
          name="firmaAsesor"
          value={formData.firmaAsesor}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default NotesComments;
