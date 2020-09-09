import React from 'react';

function ListaDados(props) {
  return (
    <a href="/">
      <h3>{props.dado}</h3>
    </a>
  );
}

export default ListaDados;