import React from 'react';
import './BarraBusca.css'
import { MdSearch } from 'react-icons/md';

function BarraBusca() {
  return (
    <div className="BarraBusca">
      <div className="campoBusca">
        <form action="">
          <input placeholder="Buscar" className="campoBusca" type="text" />
          <MdSearch className="iconeBusca" />
        </form>
      </div>
    </div>
  );
}

export default BarraBusca;