import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/img/Logo.png';
import ListaDados from '../ListaDados';
import { NavBarLateral, Quadrado, LogoImg } from './styles';

function NavLateral({ clicked }) {
  return (
    <NavBarLateral show={clicked}>
      <Quadrado>
        <Link to="/">
          <LogoImg src={Logo} alt="GiganimaLogo" />
        </Link>
      </Quadrado>
      <ListaDados />
    </NavBarLateral>
  );
}

export default NavLateral;