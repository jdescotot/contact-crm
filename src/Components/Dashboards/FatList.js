// src/components/Dashboard/FATList.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../Styles/Dashboards/FatList.css';

const FATList = () => {
    const { clientId } = useParams();
  
    const fats = Array.from({ length: 12 }, (_, index) => `FAT${(index + 1).toString().padStart(3, '0')}`);
  
    return (
      <div className="fat-list-container">
        <h2>Gestionar FATs</h2>
        <ul>
          {fats.map(fat => (
            <li key={fat}>
              <Link to={`/clients/${clientId}/fats/${fat.toLowerCase()}`}>{fat}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FATList;
