// src/components/Dashboards/FAT/Fat001/CompanyInfo.js
import React from 'react';

const CompanyInfo = ({ formData, handleChange, limited }) => {
  return (
    <div>
      <h3>Parte II: Información de la Compañía</h3>
      <div className="input-group">
        <label>Nombre de la Empresa</label>
        <input
          type="text"
          name="nombreEmpresa"
          value={formData.nombreEmpresa}
          onChange={handleChange}
          required
        />
      </div>
      
      {!limited && (
        <>
          <div className="input-group">
            <label>Tipo de Empresa</label>
            <select
              name="tipoEmpresa"
              value={formData.tipoEmpresa}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Cliente">Cliente</option>
              <option value="Empresa">Empresa</option>
            </select>
          </div>
          <div className="input-group">
            <label>Ubicación de la Empresa</label>
            <input
              type="text"
              name="ubicacionEmpresa"
              value={formData.ubicacionEmpresa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Propiedad del Local</label>
            <select
              name="propiedadLocal"
              value={formData.propiedadLocal}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Local junto a vivienda">Local junto a vivienda</option>
              <option value="Local Independiente">Local Independiente</option>
              <option value="Local dentro de vivienda">Local dentro de vivienda</option>
              <option value="No tiene Local">No tiene Local</option>
            </select>
          </div>
          <div className="input-group">
            <label>Fecha de Establecimiento</label>
            <input
              type="date"
              name="fechaEstablecimiento"
              value={formData.fechaEstablecimiento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Correo Electrónico de la Empresa</label>
            <input
              type="email"
              name="correoEmpresa"
              value={formData.correoEmpresa}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Sitio Web</label>
            <select
              name="sitioWeb"
              value={formData.sitioWeb}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="input-group">
            <label>Tipo de Organización</label>
            <select
              name="tipoOrganizacion"
              value={formData.tipoOrganizacion}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Individual">Individual</option>
              <option value="Sociedad Mercantil">Sociedad Mercantil</option>
              <option value="Sector Social Economía">
                Sector Social Economía
              </option>
            </select>
          </div>
          <div className="input-group">
            <label>Estado de la Compañía</label>
            <select
              name="estadoCompania"
              value={formData.estadoCompania}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="En operación">En operación</option>
              <option value="Iniciando un nuevo negocio">
                Iniciando un nuevo negocio
              </option>
              <option value="Cerrando operación">Cerrando operación</option>
            </select>
          </div>
          <div className="input-group">
            <label>Nivel de Formalización</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="juridica"
                  checked={formData.nivelFormalizacion.juridica}
                  onChange={handleChange}
                />
                Jurídica
              </label>
              <label>
                <input
                  type="checkbox"
                  name="tributaria"
                  checked={formData.nivelFormalizacion.tributaria}
                  onChange={handleChange}
                />
                Tributaria
              </label>
              <label>
                <input
                  type="checkbox"
                  name="laboral"
                  checked={formData.nivelFormalizacion.laboral}
                  onChange={handleChange}
                />
                Laboral
              </label>
            </div>
          </div>
          <div className="input-group">
            <label>Ventas Brutas Anuales</label>
            <input
              type="text"
              name="ventasBrutasAnuales"
              value={formData.ventasBrutasAnuales}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Año de las Ventas</label>
            <input
              type="text"
              name="anoVentas"
              value={formData.anoVentas}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}
      
      <div className="input-group">
        <label>Redes Sociales</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="redesSociales"
              value="Facebook"
              checked={formData.redesSociales.includes('Facebook')}
              onChange={handleChange}
            />
            Facebook
          </label>
          <label>
            <input
              type="checkbox"
              name="redesSociales"
              value="Twitter"
              checked={formData.redesSociales.includes('Twitter')}
              onChange={handleChange}
            />
            Twitter
          </label>
          <label>
            <input
              type="checkbox"
              name="redesSociales"
              value="YouTube"
              checked={formData.redesSociales.includes('YouTube')}
              onChange={handleChange}
            />
            YouTube
          </label>
          <label>
            <input
              type="checkbox"
              name="redesSociales"
              value="Instagram"
              checked={formData.redesSociales.includes('Instagram')}
              onChange={handleChange}
            />
            Instagram
          </label>
          <label>
            <input
              type="checkbox"
              name="redesSociales"
              value="WhatsApp"
              checked={formData.redesSociales.includes('WhatsApp')}
              onChange={handleChange}
            />
            WhatsApp
          </label>
        </div>
      </div>
      
      <div className="input-group">
        <label>Tipo de Negocio</label>
        <select
          name="tipoNegocio"
          value={formData.tipoNegocio}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Comercio">Comercio</option>
          <option value="Servicios">Servicios</option>
          <option value="Agrícola">Agrícola</option>
          <option value="Industria">Industria</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div className="input-group">
        <label>Origen de los Fondos</label>
        <input
          type="text"
          name="origenFondos"
          value={formData.origenFondos}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Financiamiento</label>
        <input
          type="text"
          name="financiamiento"
          value={formData.financiamiento}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Capital Semilla</label>
        <input
          type="text"
          name="capitalSemilla"
          value={formData.capitalSemilla}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Aporte Propio</label>
        <input
          type="text"
          name="aportePropio"
          value={formData.aportePropio}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Otra Fuente</label>
        <input
          type="text"
          name="otraFuente"
          value={formData.otraFuente}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Idea de Negocio</label>
        <textarea
          name="ideaNegocio"
          value={formData.ideaNegocio}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Rubro del Negocio</label>
        <input
          type="text"
          name="rubroNegocio"
          value={formData.rubroNegocio}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Análisis de Mercado</label>
        <textarea
          name="analisisMercado"
          value={formData.analisisMercado}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Estrategias de Ventas</label>
        <textarea
          name="estrategiasVentas"
          value={formData.estrategiasVentas}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Canales de Distribución</label>
        <textarea
          name="canalesDistribucion"
          value={formData.canalesDistribucion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Plan de Mercadotecnia</label>
        <textarea
          name="planMercadotecnia"
          value={formData.planMercadotecnia}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Productos/Servicios Ofrecidos</label>
        <textarea
          name="productosServicios"
          value={formData.productosServicios}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
