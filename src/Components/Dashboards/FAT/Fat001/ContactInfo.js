// src/components/Dashboards/FAT/Fat001/ContactInfo.js
import React from 'react';

const ContactInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Parte I: Información de Contacto</h3>
      <div className="input-group">
        <label>Primer Nombre</label>
        <input
          type="text"
          name="primerNombre"
          value={formData.primerNombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Segundo Nombre</label>
        <input
          type="text"
          name="segundoNombre"
          value={formData.segundoNombre}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Primer Apellido</label>
        <input
          type="text"
          name="primerApellido"
          value={formData.primerApellido}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Segundo Apellido</label>
        <input
          type="text"
          name="segundoApellido"
          value={formData.segundoApellido}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>No. de Identidad</label>
        <input
          type="text"
          name="noIdentidad"
          value={formData.noIdentidad}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Fecha de Nacimiento</label>
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Correo Electrónico</label>
        <input
          type="email"
          name="correoElectronico"
          value={formData.correoElectronico}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Código de Empresa</label>
        <input
          type="text"
          name="codigoEmpresa"
          value={formData.codigoEmpresa}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Posición dentro de la Empresa</label>
        <select
          name="posicionEmpresa"
          value={formData.posicionEmpresa}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Empleado">Empleado</option>
          <option value="Socio">Socio</option>
          <option value="Director">Director</option>
          <option value="Dueño">Dueño</option>
          <option value="Gerente">Gerente</option>
          <option value="Vicepresidente">Vicepresidente</option>
          <option value="Ejecutivo de ventas">Ejecutivo de ventas</option>
          <option value="Ejecutivo mercadeo">Ejecutivo mercadeo</option>
          <option value="Representante legal">Representante legal</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div className="input-group">
        <label>Teléfono</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Teléfono Alternativo</label>
        <input
          type="tel"
          name="telefonoAlternativo"
          value={formData.telefonoAlternativo}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Ciudad</label>
        <input
          type="text"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Departamento</label>
        <input
          type="text"
          name="departamento"
          value={formData.departamento}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Dirección Exacta</label>
        <input
          type="text"
          name="direccionExacta"
          value={formData.direccionExacta}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Estado Civil</label>
        <select
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Casado">Casado</option>
          <option value="Soltero">Soltero</option>
          <option value="Unión libre">Unión libre</option>
        </select>
      </div>
      <div className="input-group">
        <label>Sexo</label>
        <select
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
      </div>
      <div className="input-group">
        <label>Genero</label>
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Hombre">Masculino</option>
          <option value="Mujer">Femenino</option>
          <option value="lgtv">No Binario</option> {/* Si eso fue a drede */}
          <option value="pelorosa">Otro</option> {/* Si eso tambien fue a drede */}
        </select>
      </div>
      <div className="input-group">
        <label>Nivel Educativo</label>
        <select
          name="nivelEducativo"
          value={formData.nivelEducativo}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Programa de alfabetización">
            Programa de alfabetización
          </option>
          <option value="Diversificado">Diversificado</option>
          <option value="Técnico Vocacional">Técnico Vocacional</option>
          <option value="Pre-Básica">Pre-Básica</option>
          <option value="Técnico Superior">Técnico Superior</option>
          <option value="Doctorado">Doctorado</option>
          <option value="Básica">Básica</option>
          <option value="Superior Incompleta">Superior Incompleta</option>
          <option value="Ninguna">Ninguna</option>
          <option value="Básica Incompleta">Básica Incompleta</option>
          <option value="Superior Completa">Superior Completa</option>
          <option value="Ciclo Común">Ciclo Común</option>
          <option value="Post-grado">Post-grado</option>
        </select>
      </div>
      <div className="input-group">
        <label>Sector Vulnerable</label>
        <select
          name="sectorVulnerable"
          value={formData.sectorVulnerable}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="No Aplica">No Aplica</option>
          <option value="desplazado">Desplazado</option>
          <option value="discapacitado">Discapacitado</option>
          <option value="retornado">Retornado</option>
          <option value="lgbtq+">LGBTQ+</option>
          <option value="joven">Joven</option>
          <option value="mujer">Mujer</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div className="input-group">
        <label>Grupo Étnico</label>
        <select
          name="grupoEtnico"
          value={formData.grupoEtnico}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Mestizo">Mestizo</option>
          <option value="Garífuna">Garífuna</option>
          <option value="Miskito">Miskito</option>
          <option value="Lenca">Lenca</option>
          <option value="Chortí">Chortí</option>
          <option value="Pech">Pech</option>
          <option value="Tawahka">Tawahka</option>
          <option value="Isleño">Isleño</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>
  );
};

export default ContactInfo;
