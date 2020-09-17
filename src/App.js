import React, { useState } from 'react';
import NavLateral from './components/NavLateral';
import Busca from './components/BarraBusca';
import { Wrap } from './styles';
import Anime from './components/Animes';


function App() {
  let [menuClick, setMenuClick] = useState(false);

  return (
    <div className="App">
      <NavLateral clicked={menuClick} />
      <Busca clicked={menuClick} clickEvent={() => setMenuClick(!menuClick)} />
      <Anime clicked={menuClick} />
      <Wrap show={menuClick} onClick={() => setMenuClick(!menuClick)} />
    </div>
  );
}

export default App;
