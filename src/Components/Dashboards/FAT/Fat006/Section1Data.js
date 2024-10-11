// src/components/Dashboard/FAT006/Section1Data.js
import React, { useState } from 'react';

const Section1Data = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Example Validation Logic
    let newErrors = { ...errors };
    if (value === '') {
      newErrors[name] = 'Este campo es obligatorio';
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);

    setFormData({
      ...formData,
      section1: {
        ...formData.section1,
        [name]: value,
      },
    });
  };

  const isFieldInvalid = (fieldName) => errors[fieldName];

  return (
    <div>
      <h3>Sección 1 - Datos Iniciales</h3>
      <div className="input-group">
        <label>Campo 1: Descripción del Campo</label>
        <input
          type="text"
          name="campo1"
          value={formData.section1.campo1 || ''}
          onChange={handleChange}
          required
        />
        {isFieldInvalid('campo1') && <span className="error">{errors['campo1']}</span>}
      </div>
      <div className="input-group">
        <label>Campo 2: Descripción del Campo</label>
        <input
          type="number"
          name="campo2"
          value={formData.section1.campo2 || ''}
          onChange={handleChange}
          required
        />
        {isFieldInvalid('campo2') && <span className="error">{errors['campo2']}</span>}
      </div>
      <div className="input-group">
        <label>Campo 3: Descripción del Campo</label>
        <input
          type="text"
          name="campo3"
          value={formData.section1.campo3 || ''}
          onChange={handleChange}
          required
        />
        {isFieldInvalid('campo3') && <span className="error">{errors['campo3']}</span>}
      </div>
      <div className="input-group">
        <label>Campo 4: Descripción del Campo</label>
        <input
          type="text"
          name="campo4"
          value={formData.section1.campo4 || ''}
          onChange={handleChange}
          required
        />
        {isFieldInvalid('campo4') && <span className="error">{errors['campo4']}</span>}
      </div>
      {/* Add additional fields as needed */}
    </div>
  );
};

export default Section1Data;
