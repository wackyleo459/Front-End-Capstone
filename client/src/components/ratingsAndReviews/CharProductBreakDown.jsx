import React from "react";
import styled from 'styled-components'
import CharBarDiv from '../styles/CharBarDiv.js';
import CharLink from '../styles/CharLink.js';
import CharProgress from '../styles/CharProgress.js';

const CharProductBreakDown = ({ reviewsMeta }) => {
  let sizeResult = 0;
  let widthResult = 0;
  let qualityResult = 0;
  let comfortResult = 0;

  Object.keys(reviewsMeta).map((key) => {
    sizeResult = Math.round(reviewsMeta.characteristics.Size.value * 10) / 10;
    widthResult = Math.round(reviewsMeta.characteristics.Width.value * 10) / 10;
    qualityResult = Math.round(reviewsMeta.characteristics.Quality.value * 10) / 10;
    comfortResult = Math.round(reviewsMeta.characteristics.Comfort.value * 10) / 10;
  });

  return (
    <div className="charBarsNd">
      <CharLink>Comfort<CharBarDiv className="fas fa-star"><CharProgress>{sizeResult}</CharProgress></CharBarDiv></CharLink>
      <CharLink>Width<CharBarDiv className="fas fa-star"><CharProgress>{widthResult}</CharProgress></CharBarDiv></CharLink>
      <CharLink>Quality<CharBarDiv className="fas fa-star"><CharProgress>{comfortResult}</CharProgress></CharBarDiv></CharLink>
      <CharLink>Size<CharBarDiv className="fas fa-star"><CharProgress>{qualityResult}</CharProgress></CharBarDiv></CharLink>
      <hr/>
   </div>
  )
}

export default CharProductBreakDown;