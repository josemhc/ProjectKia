// Contacto.jsx

import './Contacto.css';
import Logo from '../GatoPerfil.jpg';

export const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className='info-asesor'>
        <h1>Asesor Julio Dominguez Lopez</h1>
        <p>
          Asesor Profesional desde 2015 en Kia, Estudios de Administración de Empresas en Universidad Icesi, Ingeniero Industrial Graduado en 2004 de la Universidad del Valle, auxiliar de enfermería de pasatiempo y a veces Batman en las noches.
        </p>
        <p>Telefono: 300 127 3612</p>
        <p>Horarios:</p>
        <ul>
          <li>Lunes: 8, 9, 10</li>
          <li>Martes: 9, 12, 4, 5</li>
          <li>Viernes: 9, 12, 4, 5</li>
        </ul>
      </div>
    </div>
  );
};
