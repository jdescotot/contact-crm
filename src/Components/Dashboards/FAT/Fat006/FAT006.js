// src/components/Dashboard/FAT006/FAT006.js
import React, { useState } from 'react';
import IntroText from './IntroText';
import Section1Data from './Section1Data';
import Section2Data from './Section2Data';
import '../../../../Styles/Dashboards/FAT/Fat006.css';

const FAT006 = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    noIdentidad: '',
    fechaNacimiento: '',
    correoElectronico: '',
    codigoEmpresa: '',
    posicionEmpresa: '',
    telefono: '',
    telefonoAlternativo: '',
    ciudad: '',
    departamento: '',
    direccionExacta: '',
    estadoCivil: '',
    sexo: '',
    genero: '',
    nivelEducativo: '',
    sectorVulnerable: '',
    grupoEtnico: '',
  });
  const sections = [
    { component: IntroText, title: "Introducción" },
    { component: Section1Data, title: "Sección 1" },
    { component: Section2Data, title: "Sección 2" },
  ];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const previousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Formulario FAT006 enviado con éxito!');
  };

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="fat006-container">
      <h2>FAT006 - Diagnóstico Completo</h2>
      <form onSubmit={handleSubmit}>
        <CurrentComponent formData={formData} setFormData={setFormData} />
        <div className="navigation-buttons">
          {currentSection > 0 && <button type="button" onClick={previousSection}>Anterior</button>}
          {currentSection < sections.length - 1 && <button type="button" onClick={nextSection}>Siguiente</button>}
          {currentSection === sections.length - 1 && <button type="submit">Enviar</button>}
        </div>
      </form>
    </div>
  );
};

export default FAT006;
