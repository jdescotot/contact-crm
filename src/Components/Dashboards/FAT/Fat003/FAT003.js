// src/components/Dashboard/FAT003/FAT003.js
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import IntroText from './IntroText';
import PersonalCharacteristics from './PersonalCharacteristics';
import AnalysisResults from './AnalysisResults';
import '../../../../Styles/Dashboards/FAT/Fat003.css';

// Utility function to calculate strengths and weaknesses
const calculateStrengthsAndWeaknesses = (formData) => {
  const characteristics = Object.keys(formData).filter(key => formData[key] instanceof Object);
  let totalFortalezas = 0;
  let totalDebilidades = 0;

  characteristics.forEach(characteristic => {
    if (formData[characteristic].fortaleza) totalFortalezas += 1;
    if (formData[characteristic].debilidad) totalDebilidades += 1;
  });

  return { totalFortalezas, totalDebilidades };
};

// Custom hook to encapsulate the calculation logic
const useStrengthsAndWeaknesses = (formData) => {
  return useMemo(() => calculateStrengthsAndWeaknesses(formData), [formData]);
};

const FAT003 = () => {
  const { clientId } = useParams();
  const [formData, setFormData] = useState({
    nombreEmprendedor: '',
    fecha: '',
    nombreAsesor: '',
    compromiso: { fortaleza: false, debilidad: false, evaluacionOtroFortaleza: false, evaluacionOtroDebilidad: false },
    motivacion: { fortaleza: false, debilidad: false, evaluacionOtroFortaleza: false, evaluacionOtroDebilidad: false },
    asumiendoRiesgos: { fortaleza: false, debilidad: false, evaluacionOtroFortaleza: false, evaluacionOtroDebilidad: false },
    tomandoDecisiones: { fortaleza: false, debilidad: false, evaluacionOtroFortaleza: false, evaluacionOtroDebilidad: false },
    apoyoFamiliar: { fortaleza: false, debilidad: false, evaluacionOtroFortaleza: false, evaluacionOtroDebilidad: false },
    situacionFinanciera: { fortaleza: false, debilidad: false, evaluacionOtroFortaleza: false, evaluacionOtroDebilidad: false },
    habilidadesTecnicas: { fortaleza: false, debilidad: false, evaluacionOtroFortaleza: false, evaluacionOtroDebilidad: false },
    habilidadesAdministrativas: { fortaleza: false, debilidad: false, evaluacionOtroFortaleza: false, evaluacionOtroDebilidad: false },
    conocimientoRubro: { fortaleza: false, debilidad: false, evaluacionOtroFortaleza: false, evaluacionOtroDebilidad: false },
    totalFortalezas: 0,
    totalDebilidades: 0,
    tieneHabilidadesNecesarias: '',
    debilidadesYSoluciones: [{ debilidad: '', solucion: '' }]
  });

  const { totalFortalezas, totalDebilidades } = useStrengthsAndWeaknesses(formData);

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      totalFortalezas,
      totalDebilidades
    }));
  }, [totalFortalezas, totalDebilidades]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (section, field) => {
    setFormData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: !prevState[section][field],
      }
    }));
  };

  const calculateScore = () => {
    return totalFortalezas - totalDebilidades;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = calculateScore();
    alert(`FAT003 guardado exitosamente! Su puntaje es: ${score}`);
    // Lógica para guardar los datos del FAT003
  };

  return (
    <div className="fat003-container">
      <IntroText />
      <h2>FAT003 - Evaluación de Emprendimiento Cliente {clientId}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nombre del Emprendedor</label>
          <input
            type="text"
            name="nombreEmprendedor"
            value={formData.nombreEmprendedor}
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
          <label>Nombre del Asesor Asignado</label>
          <input
            type="text"
            name="nombreAsesor"
            value={formData.nombreAsesor}
            onChange={handleChange}
            required
          />
        </div>
        <PersonalCharacteristics formData={formData} handleCheckboxChange={handleCheckboxChange} />
        <AnalysisResults formData={formData} handleChange={handleChange} />
        <button type="submit" className="submit-button">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FAT003;
