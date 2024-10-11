// src/components/Dashboard/FAT004/BusinessIdea.js
import React from 'react';

const BusinessIdea = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Sección II - Su Idea: Defina su Negocio</h3>
      <div className="input-group">
        <label>¿Cuál es su idea de negocio?</label>
        <textarea
          name="ideaNegocio"
          value={formData.ideaNegocio}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>¿Por qué ha elegido ese rubro?</label>
        <textarea
          name="motivoRubro"
          value={formData.motivoRubro}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>¿Cuáles son los productos o servicios de su empresa?</label>
        <textarea
          name="productosServicios"
          value={formData.productosServicios}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default BusinessIdea;
