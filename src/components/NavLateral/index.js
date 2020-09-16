import React from 'react';
import Logo from '../../../src/assets/img/Logo.png';
import ListaDados from '../ListaDados';
import { NavBarLateral, Quadrado, LogoImg } from './styles';

function NavLateral({ clicked }) {
  return (
    <NavBarLateral show={clicked}>
      <Quadrado>
        <a href="/">
          <LogoImg src={Logo} alt="GiganimaLogo" />
        </a>
      </Quadrado>
      <ListaDados />
    </NavBarLateral>
  );
}

export default NavLateral;