// src/components/Dashboard/FAT003/AnalysisResults.js
import React from 'react';

const AnalysisResults = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Sección III - Análisis y Resultados</h3>
      <div className="input-group">
        <label>Total de Fortalezas</label>
        <input
          type="number"
          name="totalFortalezas"
          value={formData.totalFortalezas}
          onChange={handleChange}
          disabled
        />
      </div>
      <div className="input-group">
        <label>Total de Debilidades</label>
        <input
          type="number"
          name="totalDebilidades"
          value={formData.totalDebilidades}
          onChange={handleChange}
          disabled
        />
      </div>
      <div className="input-group">
        <label>¿Piensa que tiene las características necesarias y habilidades suficientes para iniciar su propio negocio?</label>
        <select
          name="tieneHabilidadesNecesarias"
          value={formData.tieneHabilidadesNecesarias}
          onChange={handleChange}
        >
          <option value="">Seleccione</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="input-group">
        <label>Puntos débiles</label>
        {formData.debilidadesYSoluciones.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              name={`debilidad${index}`}
              value={item.debilidad}
              onChange={(e) => handleChange(e, index, 'debilidadesYSoluciones', 'debilidad')}
              placeholder="Debilidad"
            />
            <input
              type="text"
              name={`solucion${index}`}
              value={item.solucion}
              onChange={(e) => handleChange(e, index, 'debilidadesYSoluciones', 'solucion')}
              placeholder="Solución"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisResults;
