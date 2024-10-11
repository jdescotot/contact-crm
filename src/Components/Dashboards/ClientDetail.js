// src/components/Dashboard/ClientDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../Styles/Dashboards/ClientDetail.css';
import EditClientPopup from './PopUps/EditClientPopup';
import { getClientById, updateClientInFirestore } from '../../Services/Crud/firestoreService';

const ClientDetail = () => {
  const { id: dni } = useParams();
  const [client, setClient] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClient = async () => {
      try {
        setLoading(true);
        const clientData = await getClientById(dni);
        if (clientData) {
          setClient(clientData);
        } else {
          setError('Cliente no encontrado');
        }
      } catch (error) {
        setError('Error al obtener los detalles del cliente');
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [dni]);

  const handleSave = async (updatedClient) => {
    try{
      await updateClientInFirestore(dni, updatedClient);
      setClient(updatedClient);
      setIsEditing(false);
    }catch (error) {
      setError('Error al actualizar los datos del cliente');
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="client-detail-container">
      <h2>Detalles del Cliente</h2>
      {client ? (
        <>
          <p><strong>Nombre:</strong> {client.name}</p>
          <p><strong>Dirección:</strong> {client.address}</p>
          <p><strong>Teléfono:</strong> {client.phone}</p>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Sector:</strong> {client.sector}</p>
          <p><strong>Motivo:</strong> {client.visitReason}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Editar Cliente</button>
          <button className="delete-button">Borrar Cliente</button>
          {isEditing && <EditClientPopup client={client} onSave={handleSave} onClose={() => setIsEditing(false)} />}
        </>
      ) : (
        <div>No se encontró información del cliente.</div>
      )}
    </div>
  );
};

export default ClientDetail;
