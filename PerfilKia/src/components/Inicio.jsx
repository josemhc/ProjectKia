// Inicio.jsx

import React, { useState } from 'react';
import './Inicio.css';

export const Inicio = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    identificacion: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario({
      ...usuario,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del usuario:', usuario);
    // Aquí puedes hacer algo con los datos, como enviarlos a una API
  };

  return (
    <div className="inicio-container">
      <div className="inicio-content">
        <h1>Bienvenido</h1>
        <p>Cuentanos tu problema y te ayudaremos</p>

        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Nombre</label>
              <input type="text" name="nombre" value={usuario.nombre} onChange={handleChange} />
            </li>
            <li>
              <label>Correo</label>
              <input type="email" name="correo" value={usuario.correo} onChange={handleChange} />
            </li>
            <li>
              <label>Telefono</label>
              <input type="tel" name="telefono" value={usuario.telefono} onChange={handleChange} />
            </li>
            <li>
              <label>Num. Identificacion (Opcional)</label>
              <input type="text" name="identificacion" value={usuario.identificacion} onChange={handleChange} />
            </li>
          </ul>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
