// src/components/Dashboard/FAT006/OperationalData.js
import React from 'react';

const OperationalData = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3>Datos Operativos</h3>
      <div className="input-group">
        <label>Inventario Promedio</label>
        <input
          type="number"
          name="averageInventory"
          value={formData.averageInventory || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Ventas Totales</label>
        <input
          type="number"
          name="totalSales"
          value={formData.totalSales || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Promedio de Cuentas por Cobrar (DSO)</label>
        <input
          type="number"
          name="dso"
          value={formData.dso || ''}
          onChange={handleChange}
          required
        />
      </div>
      {/* Additional operational data fields */}
    </div>
  );
};

export default OperationalData;
