// src/components/Dashboard/FAT004/FAT004.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import IntroText from './IntroText';
import ContactInfo from './ContactInfo';
import BusinessIdea from './BusinessIdea';
import MarketAnalysis from './MarketAnalysis';
import SalesStrategy from './SalesStrategy';
import FinancialAnalysis from './FinancialAnalysis';
import NotesComments from './NotesComments';
import '../../../../Styles/Dashboards/FAT/Fat004.css';
const FAT004 = () => {
  const { clientId } = useParams();
  const [formData, setFormData] = useState({
    nombreContacto: '',
    fecha: '',
    nombreAsesor: '',
    nivelEmpresa: '',
    ideaNegocio: '',
    motivoRubro: '',
    productosServicios: '',
    mercadoObjetivo: '',
    competidores: '',
    ubicacion: '',
    influenciaUbicacion: '',
    estrategiaPrecios: '',
    canalesDistribucion: '',
    promocionNegocio: '',
    costoOperacion: '',
    necesitaPrestamo: '',
    detallesFinancieros: '',
    notasComentarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar los datos del FAT004
    alert('FAT004 guardado exitosamente!');
  };

  return (
    <div className="fat004-container">
      <IntroText />
      <h2>FAT004 - Evaluación de Idea de Negocio Cliente {clientId}</h2>
      <form onSubmit={handleSubmit}>
        <ContactInfo formData={formData} handleChange={handleChange} />
        <BusinessIdea formData={formData} handleChange={handleChange} />
        <MarketAnalysis formData={formData} handleChange={handleChange} />
        <SalesStrategy formData={formData} handleChange={handleChange} />
        <FinancialAnalysis formData={formData} handleChange={handleChange} />
        <NotesComments formData={formData} handleChange={handleChange} />
        <button type="submit" className="submit-button">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FAT004;
