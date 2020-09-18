import React from 'react';
import { Link } from 'react-router-dom';
import { AreaAnime, MainPart, Margin } from './styles';

function Anime({ clicked }) {

  let arr = [];
  for (let i = 0; i < 60; i++) {
    arr.push(i);
  }

  return (
    <MainPart show={clicked}>
      {arr.map((item) => {
        return (
          <Margin show={clicked} key={`margin_${arr[item]}`}>
            <Link to="/" key={`link_${arr[item]}`}>
              <AreaAnime key={`anime_${arr[item]}`} />
            </Link>
          </Margin>
        )
      })}
    </MainPart>
  );
}

export default Anime;