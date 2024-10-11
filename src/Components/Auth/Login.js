// src/components/Auth/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Services/authService';
import '../../Styles/Auth/Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Credenciales Correctas!");
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su Correo Electrónico"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su Contraseña"
            />
          </div>
          <button type="submit" className="login-button">Ingresar</button>
        </form>
        <div className="social-login">
          <p>O ingrese con</p>
          <div className="social-icons">
            <a href="www.facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="www.google.com"><i className="fab fa-google"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
