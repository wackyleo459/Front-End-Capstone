import React from "react";
import styled from 'styled-components'
import CharBar from '../styles/CharBar.js';
import CharBarDiv from '../styles/CharBarDiv.js';
import CharLink from '../styles/CharLink.js';

const CharProductBreakDown = ({ getMetaAverage, getMetaPercentage, reviewsMeta}) => {
  let ratingsResult = 0;
  console.log('Before', reviewsMeta)
  for (let key in reviewsMeta) {
    let ratingsObject = reviewsMeta[key]
    for (let key1 in ratingsObject) {
      console.log('First Iteration', ratingsObject)
      console.log('Ratings', reviewsMeta.ratings)
      console.log('Characteristics', reviewsMeta.characteristics)
      if (ratingsObject[key1] === ratingsObject.ratings) {

      }
    }
  }

  return (
    <div className="charBarsNd">
      <CharLink><CharBarDiv className="fas fa-star">{ratingsResult} Size</CharBarDiv></CharLink>
      <CharLink><CharBarDiv className="fas fa-star">{ratingsResult} Width</CharBarDiv></CharLink>
   </div>
  )
}

export default CharProductBreakDown;