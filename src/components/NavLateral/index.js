import React from 'react';
import Logo from '../../../src/assets/img/Logo.png';
import "./NavLateral.css"

function NavLateral() {
  return (
    <nav className="NavLateral">
      <a href="/">
        <img className="Logo" src={Logo} alt="GiganimaLogo" />
      </a>
      <a className="ButtonLink" href="/"></a>
    </nav>
  );
}

export default NavLateral;