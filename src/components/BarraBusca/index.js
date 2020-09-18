import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { Menu, BarraBusca, CampoBusca, Formulario, Input, BotaoBusca } from './styles';


function Busca({ clicked, clickEvent }) {
  let position = window.scrollY;
  const [showBusca, setshowBusca] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", changeBusca);
    return () => { window.removeEventListener("scroll", changeBusca); }
  })

  function changeBusca() {
    if (window.scrollY === 0 || window.scrollY < position)
      setshowBusca(true);
    else
      setshowBusca(false);

    position = window.scrollY;
  }

  return (
    <BarraBusca showMenu={clicked} showBusca={showBusca}>
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