import React from "react";
import styled from 'styled-components'
import BarDiv from '../styles/BarDiv.js';
import Link from '../styles/Link.js';
import Stars from '../styles/Stars.js';
import Progress from '../styles/Progress.js';
import Bar from '../styles/Bar.js';

const StarRatingEntry = ({ reviews, reviewsMeta, stars, averageStars, numOfEachcRating, getPercentage, carets, getMetaAverage, getMetaPercentage }) => {
  let rating = 0;
  let recommended = 0;
  let charOne = 0;
  let charTwo = 0;
  let charThree = 0;
  let charFour = 0;
  let charFive = 0;

  for (let i = 0; i < reviews.length; i++) {
    recommended += (reviews[i].recommend) / reviews.length;
    rating += (reviews[i].rating) / reviews.length;
  }

  let recommendRounded = Math.round(recommended * 10) / 10;
  let ratingRounded = Math.round(rating * 10) / 10;

  return (
    <div className="numberStarRatingNd">
        <h4 className="ratingNumberNd">{ratingRounded}</h4>
        <div className="bigStarsNd"><Stars>{stars}</Stars></div>
          <br/>
        <div className="progressBarNd">
          <Link>{recommendRounded * 100}% of people recommend this product.</Link>
          <Link><BarDiv>5Stars<Progress><Bar percent={getPercentage(numOfEachcRating[5])}></Bar></Progress>{getPercentage(numOfEachcRating[5])}</BarDiv></Link>
          <Link><BarDiv>4Stars<Progress><Bar percent={getPercentage(numOfEachcRating[4])}></Bar></Progress>{getPercentage(numOfEachcRating[4])}</BarDiv></Link>
          <Link><BarDiv>3Stars<Progress><Bar percent={getPercentage(numOfEachcRating[3])}></Bar></Progress>{getPercentage(numOfEachcRating[3])}</BarDiv></Link>
          <Link><BarDiv>2Stars<Progress><Bar percent={getPercentage(numOfEachcRating[2])}></Bar></Progress>{getPercentage(numOfEachcRating[2])}</BarDiv></Link>
          <Link><BarDiv>1Stars<Progress><Bar percent={getPercentage(numOfEachcRating[1])}></Bar></Progress>{getPercentage(numOfEachcRating[1])}</BarDiv></Link>
       </div>
    </div>
  )
}

export default StarRatingEntry;