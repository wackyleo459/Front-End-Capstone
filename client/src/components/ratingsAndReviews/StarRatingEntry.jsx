import React from "react";
import Styled from 'styled-components';
import BarDiv from '../styles/BarDiv.js';
import Link from '../styles/Link.js';
import Stars from '../styles/Stars.js';
import Progress from '../styles/Progress.js';
import Bar from '../styles/Bar.js';
import Modals from './Modals.jsx';

const StarRatingEntry = ({ reviews, stars, averageStars, numOfEachcRating, getPercentage, carets }) => {
  let rating = 0;
  let recommended = 0;
  let totalRatings = 0;

  for (let i = 0; i < reviews.length; i++) {
    recommended += (reviews[i].recommend) / reviews.length;
    rating += (reviews[i].rating) / reviews.length;
    totalRatings += reviews[i].rating;
  }

  let recommendRounded = Math.round(recommended * 10) / 10;
  let ratingRounded = Math.round(rating * 10) / 10;

  return (
    <div className="numberStarRatingNd">
          <Link>{totalRatings} Reviews</Link>
          <Modals/>
      <div className="starsAndAverageNd">
        <Stars>{stars}</Stars>
        <h4 className="ratingNumberNd">{ratingRounded}</h4>
      </div>
          <br/>
        <div className="progressBarNd">
          <Link><BarDiv>5Stars<Progress><Bar percent={getPercentage(numOfEachcRating[5])}></Bar></Progress>{getPercentage(numOfEachcRating[5])}%</BarDiv></Link>
          <Link><BarDiv>4Stars<Progress><Bar percent={getPercentage(numOfEachcRating[4])}></Bar></Progress>{getPercentage(numOfEachcRating[4])}%</BarDiv></Link>
          <Link><BarDiv>3Stars<Progress><Bar percent={getPercentage(numOfEachcRating[3])}></Bar></Progress>{getPercentage(numOfEachcRating[3])}%</BarDiv></Link>
          <Link><BarDiv>2Stars<Progress><Bar percent={getPercentage(numOfEachcRating[2])}></Bar></Progress>{getPercentage(numOfEachcRating[2])}%</BarDiv></Link>
          <Link><BarDiv>1Stars<Progress><Bar percent={getPercentage(numOfEachcRating[1])}></Bar></Progress>{getPercentage(numOfEachcRating[1])}%</BarDiv></Link>
       </div>
    </div>
  )
}

export default StarRatingEntry;