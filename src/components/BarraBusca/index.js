import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Menu, BarraBusca, CampoBusca, Formulario, Input, BotaoBusca } from './styles';


function Busca({ clicked, clickEvent }) {
  return (
    <BarraBusca show={clicked}>
      <Menu onClick={clickEvent} />
      <CampoBusca>
        <Formulario action="">
          <Input placeholder="Buscar" type="text" />
          <BotaoBusca>
            <MdSearch />
          </BotaoBusca>
        </Formulario>
      </CampoBusca>
    </BarraBusca>
  );
}

export default Busca;