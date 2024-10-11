// src/components/Dashboards/FAT/Fat001/EmployeesInfo.js
import React from 'react';

const EmployeesInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Empleados</h3>
      <h4>Masculinos</h4>
      <div className="input-group">
        <label>Empleados entre 16 y 29 años</label>
        <input
          type="number"
          name="empleadosMasculinos16_29"
          value={formData.empleados.masculinos['16_29']}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Empleados entre 30 y 59 años</label>
        <input
          type="number"
          name="empleadosMasculinos30_59"
          value={formData.empleados.masculinos['30_59']}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Empleados mayores de 60 años</label>
        <input
          type="number"
          name="empleadosMasculinos60"
          value={formData.empleados.masculinos['60']}
          onChange={handleChange}
        />
      </div>

      <h4>Femeninos</h4>
      <div className="input-group">
        <label>Empleados entre 16 y 29 años</label>
        <input
          type="number"
          name="empleadosFemeninos16_29"
          value={formData.empleados.femeninos['16_29']}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Empleados entre 30 y 59 años</label>
        <input
          type="number"
          name="empleadosFemeninos30_59"
          value={formData.empleados.femeninos['30_59']}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Empleados mayores de 60 años</label>
        <input
          type="number"
          name="empleadosFemeninos60"
          value={formData.empleados.femeninos['60']}
          onChange={handleChange}
        />
      </div>

      <h4>Personas con Capacidades Especiales - Masculinos</h4>
      <div className="input-group">
        <label>Empleados entre 16 y 29 años</label>
        <input
          type="number"
          name="empleadosCapacidadesEspecialesMasculinos16_29"
          value={formData.empleados.capacidadesEspecialesMasculinos['16_29']}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Empleados entre 30 y 59 años</label>
        <input
          type="number"
          name="empleadosCapacidadesEspecialesMasculinos30_59"
          value={formData.empleados.capacidadesEspecialesMasculinos['30_59']}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Empleados mayores de 60 años</label>
        <input
          type="number"
          name="empleadosCapacidadesEspecialesMasculinos60"
          value={formData.empleados.capacidadesEspecialesMasculinos['60']}
          onChange={handleChange}
        />
      </div>

      <h4>Personas con Capacidades Especiales - Femeninos</h4>
      <div className="input-group">
        <label>Empleados entre 16 y 29 años</label>
        <input
          type="number"
          name="empleadosCapacidadesEspecialesFemeninos16_29"
          value={formData.empleados.capacidadesEspecialesFemeninos['16_29']}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Empleados entre 30 y 59 años</label>
        <input
          type="number"
          name="empleadosCapacidadesEspecialesFemeninos30_59"
          value={formData.empleados.capacidadesEspecialesFemeninos['30_59']}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Empleados mayores de 60 años</label>
        <input
          type="number"
          name="empleadosCapacidadesEspecialesFemeninos60"
          value={formData.empleados.capacidadesEspecialesFemeninos['60']}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default EmployeesInfo;
