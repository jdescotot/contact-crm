// src/components/Dashboard/FAT006/GeneralInfo.js
import React from 'react';

const GeneralInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      generalInfo: {
        ...formData.generalInfo,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <h3>Información General</h3>
      <div className="input-group">
        <label>Nombre de la Empresa</label>
        <input
          type="text"
          name="companyName"
          value={formData.generalInfo.companyName || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          value={formData.generalInfo.date || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Asesor Asignado</label>
        <input
          type="text"
          name="advisorName"
          value={formData.generalInfo.advisorName || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Nivel de la Empresa</label>
        <select
          name="businessLevel"
          value={formData.generalInfo.businessLevel || ''}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Emprendimiento">Emprendimiento</option>
          <option value="Micro">Micro</option>
          <option value="Pequeña">Pequeña</option>
          <option value="Mediana">Mediana</option>
        </select>
      </div>
      <div className="input-group">
        <label>Ubicación de la Empresa</label>
        <input
          type="text"
          name="businessLocation"
          value={formData.generalInfo.businessLocation || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Industria o Sector</label>
        <input
          type="text"
          name="industry"
          value={formData.generalInfo.industry || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Año de Establecimiento</label>
        <input
          type="number"
          name="establishmentYear"
          value={formData.generalInfo.establishmentYear || ''}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default GeneralInfo;
