// src/components/Auth/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../Services/authService';
import '../../Styles/Auth/RegisterStyle.css';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      await register(email, password);
      alert("Se Registro de manera Exitosa!");
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Registrarse</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese un correo electrónico"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese una contraseña"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme su contraseña"
            />
          </div>
          <button type="submit" className="register-button">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
