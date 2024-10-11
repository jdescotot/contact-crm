// src/components/Dashboard/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Dashboards/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>CRM Dashboard</h1>
      <div className="dashboard-summary">
        <div className="summary-card">
          <h2>Clientes</h2>
          <p>Numero de Clientes: 100</p>
        </div>
        <div className="summary-card">
          <h2>Services</h2>
          <p>Asistencias dadas: 250</p>
        </div>
        <div className="summary-card">
          <h2>Documentos Fats</h2>
          <p>Fat llenos: 150</p>
        </div>
      </div>
      <div className="dashboard-links">
        <Link to="/add-client" className="dashboard-link">Agregar Cliente Nuevo</Link>
        <Link to="/clients" className="dashboard-link">Ver Clientes existentes</Link>
      </div>
    </div>
  );
};

export default Dashboard;
