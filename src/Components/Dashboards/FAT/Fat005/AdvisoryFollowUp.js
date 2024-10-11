// src/components/Dashboard/AdvisoryFollowUp.js
import React from 'react';

const AdvisoryFollowUp = ({ formData, handleChange }) => {
  return (
    <div className="advisory-follow-up">
      <h3>Seguimiento del Plan de Asesoría</h3>
      <div className="input-group">
        <label>Legalización</label>
        <div className="checkbox-group">
          {['Contrato societario', 'RTN jurídico', 'Registro / Permiso sanitario', 'Código de barra', 'Registro de marca', 'Permiso de operación', 'Otro'].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name={`legalizacion.${item}`}
                checked={formData.seguimiento.legalizacion.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="input-group">
        <label>Organización y Administración</label>
        <div className="checkbox-group">
          {['Manuales administrativos', 'Libros contables', 'Declaraciones de impuestos', 'Estados financieros y balance general', 'Otro'].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name={`organizacion.${item}`}
                checked={formData.seguimiento.organizacion.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="input-group">
        <label>Producción y Alimentos</label>
        <div className="checkbox-group">
          {['Costos de producción', 'Fichas técnicas', 'Diagramas de flujo', 'Manual de calidad', 'Plan de contingencia', 'Determinación de precios', 'Otro'].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name={`produccion.${item}`}
                checked={formData.seguimiento.produccion.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="input-group">
        <label>TIC's</label>
        <div className="checkbox-group">
          {['Hardware y software', 'Elementos promocionales', 'Creación páginas web', 'Creación de logos', 'Elaboración de etiquetas', 'Otro'].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name={`tics.${item}`}
                checked={formData.seguimiento.tics.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="input-group">
        <label>Análisis Financiero</label>
        <div className="checkbox-group">
          {['Análisis de costos y punto de equilibrio de la empresa', 'Registro de inventarios', 'Registro al mono tributo', 'Vinculación financiera', 'Modelo de negocio', 'Otro'].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name={`analisisFinanciero.${item}`}
                checked={formData.seguimiento.analisisFinanciero.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="input-group">
        <label>Inteligencia de Mercados</label>
        <div className="checkbox-group">
          {['Investigación de mercado', 'Plan de mercadeo', 'Base de datos de clientes', 'Encuestas de satisfacción del consumidor', 'Vinculación comercial (clientes/proveedores)', 'Expo ferias comerciales', 'Otro'].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name={`inteligenciaMercados.${item}`}
                checked={formData.seguimiento.inteligenciaMercados.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="input-group">
        <label>Recursos Humanos</label>
        <div className="checkbox-group">
          {['Perfil de puestos', 'Manuel de reclutamiento y selección del personal', 'Plan de capacitación para propietario y empleados', 'Evaluación del desempeño del personal', 'Reglamento interno', 'Contratos de trabajos', 'Otro'].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name={`recursosHumanos.${item}`}
                checked={formData.seguimiento.recursosHumanos.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryFollowUp;
