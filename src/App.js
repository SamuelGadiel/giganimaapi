import React, { useState } from 'react';
import NavLateral from './components/NavLateral';
import Busca from './components/BarraBusca';



function App() {
  let [menuClick, setMenuClick] = useState(false);

  return (
    <div className="App">
      <NavLateral clicked={menuClick} />
      <Busca clicked={menuClick} clickEvent={() => setMenuClick(!menuClick)} />
      {/* <Busca clickEvent={() => setMenuClick(!menuClick)} /> */}
    </div>
  );
}

export default App;
