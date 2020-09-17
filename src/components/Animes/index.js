import React from 'react';
import { AreaAnime, MainPart } from './styles';

function Anime({ clicked }) {

  let arr = [];
  for (let i = 0; i < 60; i++) {
    arr.push(i);
  }

  return (
    <MainPart show={clicked}>
      {arr.map((item) => <AreaAnime key={arr[item]} show={clicked} />)}
    </MainPart>
  );
}

export default Anime;