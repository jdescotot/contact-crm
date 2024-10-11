// src/components/Dashboard/FAT004/FinancialAnalysis.js
import React from 'react';

const FinancialAnalysis = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Sección V - Análisis Financiero</h3>
      <div className="input-group">
        <label>¿Cuál es el costo de iniciar y operar su negocio?</label>
        <textarea
          name="costoOperacion"
          value={formData.costoOperacion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>¿Necesita un préstamo para iniciar su empresa?</label>
        <select
          name="necesitaPrestamo"
          value={formData.necesitaPrestamo}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="input-group">
        <label>Si su respuesta es SI, favor especifique</label>
        <textarea
          name="detallesFinancieros"
          value={formData.detallesFinancieros}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FinancialAnalysis;
