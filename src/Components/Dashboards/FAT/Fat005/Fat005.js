// src/components/Dashboard/FAT005.js
import React, { useState } from 'react';
import '../../../../Styles/Dashboards/FAT/Fat005.css';
import CompanyInfo from './CompanyInfo';
import AdvisoryFollowUp from './AdvisoryFollowUp';
import AttentionDetails from './AttentionDetails';

const FAT005 = () => {
  const [formData, setFormData] = useState({
    noRegistroEmpresa: '',
    noAsesorTecnico: '',
    nombreEmpresa: '',
    nombrePropietario: '',
    seguimiento: {
      legalizacion: [],
      organizacion: [],
      produccion: [],
      tics: [],
      analisisFinanciero: [],
      inteligenciaMercados: [],
      recursosHumanos: [],
    },
    tipoServicio: '',
    fechaAtencion: '',
    dia: '',
    tiempoAtencion: '',
    hora: '',
    lugarAtencion: {
      cdeMipyme: false,
      enEmpresa: false,
      virtual: false,
      llamada: false,
    },
    acuerdos: '',
    firmaAsesor: '',
    firmaEmpresario: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const [section, item] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        seguimiento: {
          ...prevData.seguimiento,
          [section]: checked
            ? [...prevData.seguimiento[section], item]
            : prevData.seguimiento[section].filter((i) => i !== item),
        },
      }));
    } else if (type === 'radio') {
      const [section, field] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar los datos del FAT005
    alert('FAT005 guardado exitosamente!');
  };

  return (
    <div className="fat005-container">
      <h2>FAT005 - Bitácora de Atención al Cliente</h2>
      <form onSubmit={handleSubmit}>
        <CompanyInfo formData={formData} handleChange={handleChange} />
        <AdvisoryFollowUp formData={formData} handleChange={handleChange} />
        <AttentionDetails formData={formData} handleChange={handleChange} />
        <button type="submit" className="submit-button">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FAT005;
