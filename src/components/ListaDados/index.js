import React from 'react';
import { ItemsLista, Icon } from './styles';
import { MdHome, MdUpdate, MdStar, MdLibraryBooks } from 'react-icons/md';
import { FaListOl } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { IoMdCalendar, IoMdHeart } from 'react-icons/io';
import { Link } from 'react-router-dom';

const listaDeDados = ["Home", "Lista Completa", "Atualizados", "Mais Assistidos", "Nova Temporada",
  "Categorias", "Filtrar por Ano", "Favoritos"];

const icons = [<MdHome />, <FaListOl />, <MdUpdate />, <MdStar />, <GoPlus />, <MdLibraryBooks />, <IoMdCalendar />, <IoMdHeart />]

function ListaDados() {
  return (
    <>
      {
        listaDeDados.map((texto, idTexto) => {
          return (
            <Link to="/" key={`link_${idTexto}`}>
              <ItemsLista key={`texto_${idTexto}`}>
                <Icon key={`icon_${idTexto}`}> {icons[idTexto]} </Icon>
                {texto}
              </ ItemsLista>
            </Link>
          )
        })
      }
    </>
  );
}

export default ListaDados;