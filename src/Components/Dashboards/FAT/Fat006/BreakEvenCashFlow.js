// src/components/Dashboard/FAT006/BreakEvenCashFlow.js
import React from 'react';

const BreakEvenCashFlow = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3>Análisis de Punto de Equilibrio y Flujo de Caja</h3>
      <div className="input-group">
        <label>Costos Fijos</label>
        <input
          type="number"
          name="fixedCosts"
          value={formData.fixedCosts || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Precio de Venta por Unidad</label>
        <input
          type="number"
          name="salesPricePerUnit"
          value={formData.salesPricePerUnit || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Costo Variable por Unidad</label>
        <input
          type="number"
          name="variableCostPerUnit"
          value={formData.variableCostPerUnit || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Flujo de Caja Neto</label>
        <input
          type="number"
          name="netCashFlow"
          value={formData.netCashFlow || ''}
          onChange={handleChange}
          required
        />
      </div>
      {/* Additional break-even and cash flow fields */}
    </div>
  );
};

export default BreakEvenCashFlow;
