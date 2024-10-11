// src/components/Dashboard/FAT004/ContactInfo.js
import React from 'react';

const ContactInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Sección I - Información de Contacto</h3>
      <div className="input-group">
        <label>Nombre del Contacto</label>
        <input
          type="text"
          name="nombreContacto"
          value={formData.nombreContacto}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Nombre del Asesor Asignado (para uso interno)</label>
        <input
          type="text"
          name="nombreAsesor"
          value={formData.nombreAsesor}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Nivel de la empresa (para uso interno)</label>
        <select
          name="nivelEmpresa"
          value={formData.nivelEmpresa}
          onChange={handleChange}
        >
          <option value="">Seleccione</option>
          <option value="Emprendimiento">Emprendimiento</option>
          <option value="Micro">Micro</option>
          <option value="Pequeña">Pequeña</option>
          <option value="Mediana">Mediana</option>
        </select>
      </div>
    </div>
  );
};

export default ContactInfo;
