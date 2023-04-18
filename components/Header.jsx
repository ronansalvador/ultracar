import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../public/images/logo.png';

function Header() {
  return (
    <header className="menu">
      <Link to="/">
        <img src="./images/logo.png" alt="logo ultracar" />
      </Link>
      <ul>
        <li><Link to="/">Nova Senha</Link></li>
        <li><Link to="/startservice">Iniciar Serviço</Link></li>
        <li><Link to="/services">Serviços</Link></li>
        <li><Link to="/employeeservices">Serviços / Colaborador</Link></li>
      </ul>
    </header>
  );
}

export default Header;
