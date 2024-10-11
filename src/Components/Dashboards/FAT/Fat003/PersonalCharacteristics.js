// src/components/Dashboard/FAT003/PersonalCharacteristics.js
import React from 'react';

const PersonalCharacteristics = ({ formData, handleCheckboxChange }) => {
  const characteristics = [
    { name: 'compromiso', label: 'Compromiso' },
    { name: 'motivacion', label: 'Motivación' },
    { name: 'asumiendoRiesgos', label: 'Asumiendo Riesgos' },
    { name: 'tomandoDecisiones', label: 'Tomando Decisiones' },
    { name: 'apoyoFamiliar', label: 'Apoyo Familiar' },
    { name: 'situacionFinanciera', label: 'Situación Financiera' },
    { name: 'habilidadesTecnicas', label: 'Habilidades Técnicas' },
    { name: 'habilidadesAdministrativas', label: 'Habilidades en Administración de Negocio' },
    { name: 'conocimientoRubro', label: 'Conocimiento del Rubro de su Empresa' }
  ];

  return (
    <div>
      <h3>Sección II - Características Personales / Situación</h3>
      {characteristics.map((charac, index) => (
        <div className="input-group" key={index}>
          <label>{charac.label}</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name={`${charac.name}Fortaleza`}
                checked={formData[charac.name].fortaleza}
                onChange={() => handleCheckboxChange(charac.name, 'fortaleza')}
              />
              Su Evaluación - Fortaleza
            </label>
            <label>
              <input
                type="checkbox"
                name={`${charac.name}Debilidad`}
                checked={formData[charac.name].debilidad}
                onChange={() => handleCheckboxChange(charac.name, 'debilidad')}
              />
              Su Evaluación - Debilidad
            </label>
            <label>
              <input
                type="checkbox"
                name={`${charac.name}EvaluacionOtroFortaleza`}
                checked={formData[charac.name].evaluacionOtroFortaleza}
                onChange={() => handleCheckboxChange(charac.name, 'evaluacionOtroFortaleza')}
              />
              Evaluación del otro - Fortaleza
            </label>
            <label>
              <input
                type="checkbox"
                name={`${charac.name}EvaluacionOtroDebilidad`}
                checked={formData[charac.name].evaluacionOtroDebilidad}
                onChange={() => handleCheckboxChange(charac.name, 'evaluacionOtroDebilidad')}
              />
              Evaluación del otro - Debilidad
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalCharacteristics;
