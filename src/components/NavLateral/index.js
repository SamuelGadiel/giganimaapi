import React from 'react';
import Logo from '../../../src/assets/img/Logo.png';
import ListaDados from '../ListaDados';
import { NavBarLateral, Quadrado, LogoImg } from './styles';

function NavLateral() {
  return (
    <NavBarLateral>
      <Quadrado>
        <Quadrado.a href="/">
          <LogoImg src={Logo} alt="GiganimaLogo" />
        </Quadrado.a>
      </Quadrado>
      <ListaDados />
    </NavBarLateral>
  );
}

export default NavLateral;