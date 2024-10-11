// src/components/Dashboard/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Services/clientService.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>CRM Dashboard</h1>
      <div className="dashboard-summary">
        <div className="summary-card">
          <h2>Clients</h2>
          <p>Number of Clients: 100</p>
        </div>
        <div className="summary-card">
          <h2>Services</h2>
          <p>Services Provided: 250</p>
        </div>
        <div className="summary-card">
          <h2>Documents FAT</h2>
          <p>Documents FAT Completed: 150</p>
        </div>
      </div>
      <div className="dashboard-links">
        <Link to="/add-client" className="dashboard-link">Add New Client</Link>
        <Link to="/clients" className="dashboard-link">View Clients</Link>
      </div>
    </div>
  );
};

export default Dashboard;
