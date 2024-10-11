// src/components/Dashboard/CompanyInfo.js
import React from 'react';

const CompanyInfo = ({ formData, handleChange }) => {
  return (
    <div className="company-info">
      <h3>Información de la Empresa</h3>
      <div className="input-group">
        <label>No. de Registro de la Empresa</label>
        <input
          type="text"
          name="noRegistroEmpresa"
          value={formData.noRegistroEmpresa}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>No. Asesor Técnico</label>
        <input
          type="text"
          name="noAsesorTecnico"
          value={formData.noAsesorTecnico}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Nombre de la Empresa</label>
        <input
          type="text"
          name="nombreEmpresa"
          value={formData.nombreEmpresa}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Nombre del Propietario</label>
        <input
          type="text"
          name="nombrePropietario"
          value={formData.nombrePropietario}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
