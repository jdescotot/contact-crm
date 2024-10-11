// src/components/Dashboard/FAT004/SalesStrategy.js
import React from 'react';

const SalesStrategy = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Sección IV - Estrategia de Ventas</h3>
      <div className="input-group">
        <label>¿Cuál será su estrategia de precios?</label>
        <textarea
          name="estrategiaPrecios"
          value={formData.estrategiaPrecios}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>¿Cuáles serán sus canales de distribución?</label>
        <textarea
          name="canalesDistribucion"
          value={formData.canalesDistribucion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>¿Cómo piensa promocionar su negocio? ¿Ha desarrollado un plan de mercadotecnia?</label>
        <textarea
          name="promocionNegocio"
          value={formData.promocionNegocio}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default SalesStrategy;
