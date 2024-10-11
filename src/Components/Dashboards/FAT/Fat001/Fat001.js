import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../../Styles/Dashboards/FAT/Fat001.css';
import ContactInfo from './ContactInfo';
import CompanyInfo from './CompanyInfo';
import EmployeesInfo from './EmployeesInfo';
import AdditionalInfo from './AdditionalInfo';

const FAT001 = () => {
  const { clientId } = useParams();
  const [formData, setFormData] = useState({
    tipoCliente: 'Mipyme', 
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    noIdentidad: '',
    fechaNacimiento: '',
    correoElectronico: '',
    codigoEmpresa: '',
    posicionEmpresa: '',
    telefono: '',
    telefonoAlternativo: '',
    ciudad: '',
    departamento: '',
    direccionExacta: '',
    sexo: '',
    nivelEducativo: '',
    sectorVulnerable: '',
    grupoEtnico: '',
    nombreEmpresa: '',
    tipoEmpresa: '',
    ubicacionEmpresa: '',
    propiedadLocal: '',
    fechaEstablecimiento: '',
    correoEmpresa: '',
    sitioWeb: '',
    redesSociales: [],
    tipoOrganizacion: '',
    estadoCompania: '',
    nivelFormalizacion: {
      juridica: false,
      tributaria: false,
      laboral: false,
    },
    tipoNegocio: '',
    origenFondos: '',
    financiamiento: '',
    capitalSemilla: '',
    aportePropio: '',
    otraFuente: '',
    ideaNegocio: '',
    rubroNegocio: '',
    analisisMercado: '',
    estrategiasVentas: '',
    canalesDistribucion: '',
    planMercadotecnia: '',
    productosServicios: [],
    ventasBrutasAnuales: '',
    anoVentas: '',
    empleados: {
      masculinos: {
        '16_29': 0,
        '30_59': 0,
        '60': 0,
      },
      femeninos: {
        '16_29': 0,
        '30_59': 0,
        '60': 0,
      },
      capacidadesEspecialesMasculinos: {
        '16_29': 0,
        '30_59': 0,
        '60': 0,
      },
      capacidadesEspecialesFemeninos: {
        '16_29': 0,
        '30_59': 0,
        '60': 0,
      },
    },
    cadenaValor: '',
    comiteOrganizacion: '',
    regionUbicacion: '',
    proyectoEmpresa: '',
    asistenciaTecnica: '',
    institucionesAsistencia: '',
    firmaSolicitante: '',
    tipoAsistenciaTecnica: '',
    referidoCDE: '',
    competidoresPrincipales: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tipoCliente') {
      setFormData({ ...formData, [name]: value });
    } else if (name.startsWith('empleados')) {
      const [group, ageRange] = name.split(/(?=[A-Z])/);
      setFormData((prevData) => ({
        ...prevData,
        empleados: {
          ...prevData.empleados,
          [group]: {
            ...prevData.empleados[group],
            [ageRange]: parseInt(value, 10),
          },
        },
      }));
    } else if (name.startsWith('nivelFormalizacion')) {
      const field = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        nivelFormalizacion: {
          ...prevData.nivelFormalizacion,
          [field]: !prevData.nivelFormalizacion[field],
        },
      }));
    } else if (name === 'redesSociales') {
      const valueArray = formData.redesSociales.includes(value)
        ? formData.redesSociales.filter((item) => item !== value)
        : [...formData.redesSociales, value];
      setFormData({ ...formData, redesSociales: valueArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar los datos del FAT001
    alert('FAT001 guardado exitosamente!');
  };

  return (
    <div className="fat001-container">
      <h2>FAT001 - Cliente {clientId}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tipoCliente">Tipo de Cliente:</label>
          <select
            id="tipoCliente"
            name="tipoCliente"
            value={formData.tipoCliente}
            onChange={handleChange}
          >
            <option value="Mipyme">Seleccione una opción</option>
            <option value="Mipyme">Mipyme</option>
            <option value="Emprendedor">Emprendedor</option>
          </select>
        </div>
        
        <ContactInfo formData={formData} handleChange={handleChange} />

        {formData.tipoCliente === 'Mipyme' && (
          <>
            <CompanyInfo formData={formData} handleChange={handleChange} />
            <EmployeesInfo formData={formData} handleChange={handleChange} />
            <AdditionalInfo formData={formData} handleChange={handleChange} />
          </>
        )}

        {formData.tipoCliente === 'Emprendedor' && (
          <>
            <CompanyInfo
              formData={formData}
              handleChange={handleChange}
              limited={true} // pasamos una prop para limitar el formulario
            />
          </>
        )}
        
        <button type="submit" className="submit-button">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FAT001;
