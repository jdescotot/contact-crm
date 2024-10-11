// src/components/Dashboard/FAT004/MarketAnalysis.js
import React from 'react';

const MarketAnalysis = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Sección III - Análisis del Mercado</h3>
      <div className="input-group">
        <label>¿Cuál es su mercado objetivo?</label>
        <textarea
          name="mercadoObjetivo"
          value={formData.mercadoObjetivo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>¿Quiénes son los principales competidores de la industria y cómo se diferencia de ellos?</label>
        <textarea
          name="competidores"
          value={formData.competidores}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>¿Cuál es la ubicación actual o propuesta para su negocio?</label>
        <textarea
          name="ubicacion"
          value={formData.ubicacion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>¿La ubicación influenciará su capacidad de atraer clientes?</label>
        <select
          name="influenciaUbicacion"
          value={formData.influenciaUbicacion}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  );
};

export default MarketAnalysis;
