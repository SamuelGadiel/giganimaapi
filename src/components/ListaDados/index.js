import React from 'react';
import { MdHome, MdUpdate, MdStar, MdLibraryBooks } from 'react-icons/md';
import { FaListOl } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { IoMdCalendar, IoMdHeart } from 'react-icons/io';

const listaDeDados = ["Home", "Lista Completa", "Atualizados", "Mais Assistidos", "Nova Temporada",
  "Categorias", "Filtrar por Ano", "Favoritos"];

const icons = [<MdHome />, <FaListOl />, <MdUpdate />, <MdStar />, <GoPlus />, <MdLibraryBooks />, <IoMdCalendar />, <IoMdHeart />]

function ListaDados() {
  return (
    <a href="/">
      {listaDeDados.map((texto, idTexto) => {
        return (
          <span key={`texto_${idTexto}`} className="ListaDados">
            <span key={`icon_${idTexto}`} className="icon">{icons[idTexto]}</span>
            {texto}
          </span>)
      })}
    </a>
  );
}

export default ListaDados;