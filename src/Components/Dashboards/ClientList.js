// src/components/Dashboard/ClientList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Dashboards/ClientList.css';
import NotePopup from './PopUps/NotePopup';
import { getAllClients } from '../../Services/Crud/firestoreService';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const clientsData = await getAllClients();
        setClients(clientsData);
      } catch (error) {
        setError('Error al obtener la lista de clientes');
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (client.dni && client.dni.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="client-list-container">
      <h2>Clientes</h2>
      <input
        type="text"
        placeholder="Buscar clientes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="client-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Sector</th>
            <th>Notas</th>
            <th>Última Visita</th>
            <th>Asesor</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map(client => (
            <tr key={client.id}>
              <td><Link to={`/clients/${client.id}`}>{client.name}</Link></td>
              <td>{client.sector}</td>
              <td>
                <button onClick={() => setSelectedNote(client.notas)}>Ver Notas</button>
              </td>
              <td>{client.ultimaVisita}</td>
              <td>{client.asesor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedNote && <NotePopup note={selectedNote} onClose={() => setSelectedNote(null)} />}
    </div>
  );
};

export default ClientList;
