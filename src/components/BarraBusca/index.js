import React from 'react';
import { MdSearch } from 'react-icons/md';
import { BarraBusca, CampoBusca, Formulario, Input, IconeBuscar, BotaoBusca } from './styles';

function Busca() {
  return (
    <BarraBusca>
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