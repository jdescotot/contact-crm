// src/components/Dashboard/ClientForm.js
import React, { useState } from 'react';
import '../../Styles/Dashboards/ClientForm.css';
import { addClientToFirestore } from '../../Services/Crud/firestoreService';

const ClientForm = () => {
  const [dni, setDni] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('');
  const [visitReason, setVisitReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setLoading(true);

    const clientData = {
      dni,
      name,
      address,
      phone,
      email,
      sector,
      visitReason,
    };

    console.log('Llamando a addClientToFirestore con los datos:', clientData);
    
    try {
      const clientId = await addClientToFirestore(clientData);
      alert(`Cliente agregado exitosamente con DNI: ${clientId}`);
      // Limpiar el formulario después de agregar
      setDni('');
      setName('');  
      setAddress('');
      setPhone('');
      setEmail('');
      setSector('');
      setVisitReason('');
    } catch (error) {
      alert(`Error al agregar el cliente: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="client-form-container">
      <h2>Cliente Nuevo</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>DNI</label>
          <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Nombre</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Dirección</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Teléfono</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Sector</label>
          <input type="text" value={sector} onChange={(e) => setSector(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Motivo Visita</label>
          <input type="text" value={visitReason} onChange={(e) => setVisitReason(e.target.value)} required />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Agregando...' : 'Agregar Cliente'}
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
