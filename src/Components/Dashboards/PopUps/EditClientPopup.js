// src/components/Dashboard/EditClientPopup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Styles/Dashboards/PopUps/EditClientPopup.css';

const EditClientPopup = ({ client, onSave, onClose }) => {
    const [editedClient, setEditedClient] = useState(client);
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedClient({ ...editedClient, [name]: value });
    };
  
    const handleSave = () => {
      onSave(editedClient);
    };
  
    return (
      <div className="edit-client-popup-overlay" onClick={onClose}>
        <div className="edit-client-popup" onClick={(e) => e.stopPropagation()}>
          <h2>Editar Cliente</h2>
          <form>
            <div className="input-group">
              <label>Nombre</label>
              <input type="text" name="name" value={editedClient.name} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Dirección</label>
              <input type="text" name="address" value={editedClient.address} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Teléfono</label>
              <input type="tel" name="phone" value={editedClient.phone} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" value={editedClient.email} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Sector</label>
              <input type="text" name="sector" value={editedClient.sector} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Motivo</label>
              <input type="text" name="motivo" value={editedClient.motivo} onChange={handleChange} />
            </div>
            <button type="button" onClick={handleSave}>Guardar Cambios</button>
          </form>
          <form>
            <button
            className="manage-fat-button"
            onClick={() => navigate(`/clients/${client.id}/fats`)}
            >
            Gestionar FAT
            </button>
          </form>
          <form>
            <button className="close-button" onClick={onClose}>Cerrar</button>
          </form>
      </div>
    </div>
  );
};

export default EditClientPopup;
