// src/components/Dashboard/FAT006/Section2Data.js
import React from 'react';

const Section2Data = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      section2: {
        ...formData.section2,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <h3>Sección 2 - Datos Adicionales</h3>
      <div className="input-group">
        <label>Campo 1: Descripción del Campo</label>
        <input
          type="text"
          name="campo1"
          value={formData.section2.campo1 || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Campo 2: Descripción del Campo</label>
        <input
          type="number"
          name="campo2"
          value={formData.section2.campo2 || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Campo 3: Descripción del Campo</label>
        <input
          type="text"
          name="campo3"
          value={formData.section2.campo3 || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Campo 4: Descripción del Campo</label>
        <input
          type="text"
          name="campo4"
          value={formData.section2.campo4 || ''}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add additional fields as needed */}
    </div>
  );
};

export default Section2Data;
