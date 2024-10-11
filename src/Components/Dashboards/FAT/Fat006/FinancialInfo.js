// src/components/Dashboard/FAT006/FinancialInfo.js
import React from 'react';

const FinancialInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3>Información Financiera</h3>
      <div className="input-group">
        <label>Ingresos (Revenue)</label>
        <input
          type="number"
          name="revenue"
          value={formData.revenue || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Costos de los Bienes Vendidos (COGS)</label>
        <input
          type="number"
          name="cogs"
          value={formData.cogs || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Gastos Operativos (OPEX)</label>
        <input
          type="number"
          name="opex"
          value={formData.opex || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Activos Totales</label>
        <input
          type="number"
          name="totalAssets"
          value={formData.totalAssets || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Pasivos Totales</label>
        <input
          type="number"
          name="totalLiabilities"
          value={formData.totalLiabilities || ''}
          onChange={handleChange}
          required
        />
      </div>
      {/* Additional financial info fields */}
    </div>
  );
};

export default FinancialInfo;
