import React from 'react';
import './BarraBusca.css'
import { MdSearch } from 'react-icons/md';

function BarraBusca() {
  return (
    <div className="BarraBusca">
      <div className="campoBusca">
        <MdSearch className="iconeBusca" />
        <span className="textoBusca">Buscar</span>
      </div>
    </div>
  );
}

export default BarraBusca;