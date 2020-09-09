import React from 'react';
import Logo from '../../../src/assets/img/Logo.png';
import "./NavLateral.css"
import ListaDados from '../ListaDados';

const listaDeDados = ["Home", "Lista Completa", "Atualizados", "Mais Assistidos", "Nova Temporada",
  "Categorias", "Filtrar por Ano", "Favoritos"];

function NavLateral() {
  return (
    <nav className="NavLateral">
      <div className="Quadrado">

        <a href="/">
          <img className="Logo" src={Logo} alt="GiganimaLogo" />
        </a>
      </div>

      {listaDeDados.map(dado =>
        <ListaDados className="ListaDados" dado={dado} />
      )}

    </nav>
  );
}

export default NavLateral;