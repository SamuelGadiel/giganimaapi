import React from 'react';
import Anime from './components/Animes';
import PageDefault from './components/PageDefault';


function App() {

  return (
    <div className="App">
      <PageDefault>
        <Anime />
      </PageDefault>
    </div>
  );
}

export default App;
