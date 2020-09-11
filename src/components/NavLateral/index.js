import React from 'react';
import Logo from '../../../src/assets/img/Logo.png';
import "./NavLateral.css"
import ListaDados from '../ListaDados';

function NavLateral() {
  return (
    <nav className="NavLateral">
      <div className="Quadrado">
        <a href="/">
          <img className="Logo" src={Logo} alt="GiganimaLogo" />
        </a>
      </div>

      <ListaDados className="ListaDados" />

    </nav>
  );
}

export default NavLateral;