// src/components/Dashboards/FAT/Fat001/AdditionalInfo.js
import React from 'react';

const AdditionalInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Parte III: Información Adicional</h3>
      <div className="input-group">
        <label>Cadena de Valor Principal</label>
        <input
          type="text"
          name="cadenaValor"
          value={formData.cadenaValor}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Participa en Comités/Organizaciones</label>
        <input
          type="text"
          name="comiteOrganizacion"
          value={formData.comiteOrganizacion}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Región de Ubicación</label>
        <input
          type="text"
          name="regionUbicacion"
          value={formData.regionUbicacion}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Proyecto al que Pertenece</label>
        <input
          type="text"
          name="proyectoEmpresa"
          value={formData.proyectoEmpresa}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Recibe Asistencia Técnica</label>
        <input
          type="text"
          name="asistenciaTecnica"
          value={formData.asistenciaTecnica}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Instituciones que Brindan Asistencia Técnica</label>
        <input
          type="text"
          name="institucionesAsistencia"
          value={formData.institucionesAsistencia}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Firma del Solicitante</label>
        <input
          type="text"
          name="firmaSolicitante"
          value={formData.firmaSolicitante}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Tipo de Asistencia Técnica</label>
        <input
          type="text"
          name="tipoAsistenciaTecnica"
          value={formData.tipoAsistenciaTecnica}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Referido por CDE</label>
        <input
          type="text"
          name="referidoCDE"
          value={formData.referidoCDE}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Competidores Principales</label>
        <input
          type="text"
          name="competidoresPrincipales"
          value={formData.competidoresPrincipales}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Redes Sociales</label>
        <input
          type="text"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
          placeholder="Facebook"
        />
        <input
          type="text"
          name="x"
          value={formData.x}
          onChange={handleChange}
          placeholder="X"
        />
        <input
          type="text"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
          placeholder="Instagram"
        />
      </div>
    </div>
  );
};

export default AdditionalInfo;
