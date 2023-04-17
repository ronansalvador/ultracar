import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/logo.png';

function Header() {
  return (
    <header className="menu">
      <Link to="/">
        <img src={ logo } alt="logo ultracar" />
      </Link>
      <ul>
        <li><Link to="/startservice">Iniciar Serviço</Link></li>
        <li><Link to="/services">Serviços</Link></li>
        <li><Link to="/teste">link3</Link></li>
      </ul>
    </header>
  );
}

export default Header;
