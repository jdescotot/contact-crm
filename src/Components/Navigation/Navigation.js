// src/components/Navigation/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Navigation/NavigationStyle.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/login">Ingresar</Link>
        </li>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
