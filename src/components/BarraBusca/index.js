import React from 'react';
import { MdSearch } from 'react-icons/md';
import { BarraBusca, CampoBusca } from './styles';

function Busca() {
  return (
    <BarraBusca>
      <CampoBusca>
        <form action="">
          <input placeholder="Buscar" type="text" />
          <MdSearch className="iconeBusca" />
        </form>
      </CampoBusca>
    </BarraBusca>
  );
}

export default Busca;