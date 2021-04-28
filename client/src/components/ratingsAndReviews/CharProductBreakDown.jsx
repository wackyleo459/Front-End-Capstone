import React from "react";
import styled from 'styled-components'
import CharBar from '../styles/CharBar.js';
import CharBarDiv from '../styles/CharBarDiv.js';
import CharProgress from '../styles/CharProgress.js';
import CharLink from '../styles/CharLink.js';

const CharProductBreakDown = ({ getMetaAverage, getMetaPercentage, carets}) => {


  return (
    <div className="charBarsNd">
      <CharLink><CharBarDiv>Size<CharProgress className="fas fa-caret-down fa-lg"><CharBar></CharBar></CharProgress></CharBarDiv></CharLink>
      <div className="sizeCharacteristicsNd">
        <label className="firstCharRatingNd">1</label>
        <label className="secondCharRatingNd">2</label>
        <label className="thirdCharRatingNd">3</label>
        <label className="fourthCharRatingNd">4</label>
        <label className="fifthCharRatingNd">5</label>
      </div>
      <CharLink><CharBarDiv>Width<CharProgress  className="fas fa-caret-down fa-lg"><CharBar></CharBar></CharProgress></CharBarDiv></CharLink>
        <div className="widthCharacteristicsNd">
        <label className="firstCharRatingNd">1</label>
        <label className="secondCharRatingNd">2</label>
        <label className="thirdCharRatingNd">3</label>
        <label className="fourthCharRatingNd">4</label>
        <label className="fifthCharRatingNd">5</label>
        </div>
      <CharLink><CharBarDiv>Comfort<CharProgress  className="fas fa-caret-down fa-lg"><CharBar></CharBar></CharProgress></CharBarDiv></CharLink>
        <div className="comfortCharacteristicsNd">
        <label className="firstCharRatingNd">1</label>
        <label className="secondCharRatingNd">2</label>
        <label className="thirdCharRatingNd">3</label>
        <label className="fourthCharRatingNd">4</label>
        <label className="fifthCharRatingNd">5</label>
        </div>
      <CharLink><CharBarDiv>Quality<CharProgress  className="fas fa-caret-down fa-lg"><CharBar></CharBar></CharProgress></CharBarDiv></CharLink>
        <div className="qualityCharacteristicsNd">
        <label className="firstCharRatingNd">1</label>
        <label className="secondCharRatingNd">2</label>
        <label className="thirdCharRatingNd">3</label>
        <label className="fourthCharRatingNd">4</label>
        <label className="fifthCharRatingNd">5</label>
        </div>
      <CharLink><CharBarDiv>Length<CharProgress  className="fas fa-caret-down fa-lg"><CharBar></CharBar></CharProgress></CharBarDiv></CharLink>
        <div className="lengthCharacteristicsNd">
        <label className="firstCharRatingNd">1</label>
        <label className="secondCharRatingNd">2</label>
        <label className="thirdCharRatingNd">3</label>
        <label className="fourthCharRatingNd">4</label>
        <label className="fifthCharRatingNd">5</label>
        </div>
      <CharLink><CharBarDiv>Fit<CharProgress  className="fas fa-caret-down fa-lg"><CharBar></CharBar></CharProgress></CharBarDiv></CharLink>
        <div className="fitCharacteristicsNd">
          <label className="firstCharRatingNd">1</label>
          <label className="secondCharRatingNd">2</label>
          <label className="thirdCharRatingNd">3</label>
          <label className="fourthCharRatingNd">4</label>
          <label className="fifthCharRatingNd">5</label>
        </div>
    </div>
  )
}

export default CharProductBreakDown;