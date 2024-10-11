// src/components/Dashboard/FAT006/MarketGrowthData.js
import React from 'react';

const MarketGrowthData = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3>Datos de Mercado y Crecimiento</h3>
      <div className="input-group">
        <label>Tasa de Crecimiento de Ingresos</label>
        <input
          type="number"
          name="revenueGrowthRate"
          value={formData.revenueGrowthRate || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Tasa de Crecimiento de Ganancias</label>
        <input
          type="number"
          name="earningsGrowthRate"
          value={formData.earningsGrowthRate || ''}
          onChange={handleChange}
          required
        />
      </div>
      {/* Additional market and growth data fields */}
    </div>
  );
};

export default MarketGrowthData;
