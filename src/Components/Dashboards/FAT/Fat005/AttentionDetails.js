// src/components/Dashboard/AttentionDetails.js
import React from 'react';

const AttentionDetails = ({ formData, handleChange }) => {
  return (
    <div className="attention-details">
      <h3>Detalles de Atención y Firma</h3>
      <div className="input-group">
        <label>Tipo de Servicio Brindado</label>
        <input
          type="text"
          name="tipoServicio"
          value={formData.tipoServicio}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Fecha de Atención</label>
        <input
          type="date"
          name="fechaAtencion"
          value={formData.fechaAtencion}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Día</label>
        <input
          type="text"
          name="dia"
          value={formData.dia}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Tiempo de Atención</label>
        <input
          type="text"
          name="tiempoAtencion"
          value={formData.tiempoAtencion}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={formData.hora}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Lugar de Atención</label>
        <div className="checkbox-group">
          {['cdeMipyme', 'enEmpresa', 'virtual', 'llamada'].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name={`lugarAtencion.${item}`}
                checked={formData.lugarAtencion[item]}
                onChange={handleChange}
              />
              {item.replace(/([A-Z])/g, ' $1')}
            </label>
          ))}
        </div>
      </div>
      <div className="input-group">
        <label>Acuerdos / Fecha de la Próxima Reunión</label>
        <textarea
          name="acuerdos"
          value={formData.acuerdos}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="input-group">
        <label>Firma de Asesor Técnico</label>
        <input
          type="text"
          name="firmaAsesor"
          value={formData.firmaAsesor}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Firma de Empresario</label>
        <input
          type="text"
          name="firmaEmpresario"
          value={formData.firmaEmpresario}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AttentionDetails;
