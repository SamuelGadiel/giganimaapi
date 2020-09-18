import React, { useState } from 'react';
import { Wrap } from '../../styles';
import Busca from '../BarraBusca';
import NavLateral from '../NavLateral';

function PageDefault(props) {
  /*
  PAGE DEFAULT SÓ PODE RECEBER UM COMPONENTE COMO FILHO SE RECEBER MAIS
  DE UM TEM QUE CHECAR QUAIS SÃO FUNÇÕES (TAGS HTML CHEGAM COMO STRINGS)
  ENTÃO CRIAR UMA LISTA COM TODOS OS COMPONENTES FUNÇÕES E RODAR 
  "React.cloneElement" PARA TODOS ELEMENTOS DA LISTA
  */

  // console.log(props.children[0].type);

  const [menuClick, setMenuClick] = useState(false);

  const children = React.cloneElement(props.children, { clicked: menuClick });

  return (
    <>
      <NavLateral clicked={menuClick} />
      <Busca clicked={menuClick} clickEvent={() => setMenuClick(!menuClick)} />

      {children}

      <Wrap show={menuClick} onClick={() => setMenuClick(!menuClick)} />
    </>
  );

}

export default PageDefault;