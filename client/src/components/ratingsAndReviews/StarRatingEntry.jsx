import React from "react";
import Chart from "react-apexcharts";
import StarRatingComponent from 'react-star-rating-component';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im'

const StarRatingEntry = ({ reviews }) => {
  let ratingResult = 0;
  let recommendResult = 0;
  let oneStar = 0;
  let twoStars = 0;
  let threeStars = 0;
  let fourStars = 0;
  let fiveStars = 0;
  for (var i = 0; i < reviews.length; i++) {
    ratingResult += reviews[i].rating / reviews.length;
    recommendResult += (reviews[i].recommend) / reviews.length;
    if (reviews[i].rating === 1) {
      oneStar += reviews[i].rating;
    } else if (reviews[i].rating === 2) {
      twoStars += reviews[i].rating;
    } else if (reviews[i].rating === 3) {
      threeStars += reviews[i].rating;
    } else if (reviews[i].rating === 4) {
      fourStars += reviews[i].rating;
    } else {
      fiveStars += reviews[i].rating;
    }
  }


  const ratingRounded = Math.round(ratingResult * 10) / 10;
  const recommendRounded = Math.round(recommendResult * 10) / 10;

  return (
    <div className="numberStarRatingNd">
      {ratingRounded}
      <span className="starsOverallNd">
        <StarRatingComponent
          name="rate2"
          editing={false}
          starCount={5}
          value={ratingRounded}
          renderStarIcon={reviews.forEach((review) => review.rating <= 5 && reviews.rating >= 1 ? () => <span><ImStarFull/></span> : () => <span><ImStarEmpty/></span>)}
          renderStarIconHalf={() => <span><ImStarHalf/></span>}
          />
      </span>
          {/* {console.log(review.rating)} */}
      <div id="ratingsSummaryNd">
          <p>{recommendRounded * 100}% of reviews recommend this product</p>
      </div>
      <div className="bar1TitleNd">
        <u>1 Stars</u>
        <div className="bar1Nd">
          <progress className="progressBarNd" value={oneStar} max="100"></progress>
        </div>
          <p className="totalRating1Nd">{oneStar} Stars</p>
       </div>
      <div className="bar2TitleNd">
        <u>2 Stars</u>
        <div className="bar2Nd">
        <progress className="progressBarNd" value={twoStars} max="100"></progress>
        </div>
        <p className="totalRating2Nd">{twoStars} Stars</p>
       </div>
      <div className="bar3TitleNd">
        <u>3 Stars</u>
        <div className="bar3Nd">
        <progress className="progressBarNd" value={threeStars} max="100"></progress>
        </div>
        <p className="totalRating3Nd">{threeStars} Stars</p>
       </div>
      <div className="bar4TitleNd">
        <u>4 Stars</u>
        <div className="bar4Nd">
          <progress className="progressBarNd" value={fourStars} max="100"></progress>
        </div>
        <p className="totalRating4Nd">{fourStars} Stars</p>
       </div>
      <div className="bar5TitleNd">
        <u>5 Stars</u>
        <div className="bar5Nd">
          <progress className="progressBarNd" value={fiveStars} max="100"></progress>
        </div>
        <p className="totalRating5Nd">{fiveStars} Stars</p>
       </div>

       <div className="ratingCharacteristicsNd">
          <label className="scaleSizeNd">Size</label>
          <div className="range">
            <input type="range" min="0" />
          </div>
          <div className="sizeCharacteristicsNd">
            <label className="firstCharOptionNd">Too small</label>
            <label className="secondCharOptionNd">Perfect</label>
            <label className='thirdCharOptionNd'>Too Big</label>
          </div>

        <label className="scaleSizeNd">Width</label>
        <div className="range">
              <input type="range" min="0"/>
          </div>
          <div className="widthCharacteristicsNd">
            <label className="firstCharOptionNd">Too Narrow</label>
            <label className="secondCharOptionNd">Perfect</label>
            <label className='thirdCharOptionNd'>Too Wide</label>
          </div>

          <label className="scaleSizeNd">Comfort</label>
           <div className="range">
              <input type="range" min="0"/>
          </div>
          <div className="comfortCharacteristicsNd">
            <label className="firstCharOptionNd">Poor</label>
            <label className="secondCharOptionOkNd">Ok</label>
            <label className='thirdCharOptionNd'>Perfect</label>
          </div>

        <label className="scaleSizeNd">Quality</label>
           <div className="range">
              <input type="range" min="0"/>
          </div>
          <div className="qualityCharacteristicsNd">
            <label className="firstCharOptionNd">Poor</label>
            <label className="secondCharOptionNd">What I Expected</label>
            <label className='thirdCharOptionNd'>Perfect</label>
          </div>

        <label className="scaleSizeNd">Length</label>
           <div className="range">
              <input type="range" min="0"/>
          </div>
          <div className="lengthCharacteristicsNd">
            <label className="firstCharOptionNd">Runs Short</label>
            <label className="secondCharOptionNd">Perfect</label>
            <label className='thirdCharOptionNd'>Runs Long</label>
          </div>

        <label className="scaleSizeNd">Fit</label>
           <div className="range">
              <input type="range" min="0"/>
          </div>
          <div className="fitCharacteristicsNd">
            <label className="firstCharOptionNd">Runs Tight</label>
            <label className="secondCharOptionNd">Perfect</label>
            <label className='thirdCharOptionNd'>Runs Loose</label>
          </div>
          </div>
      </div>
  )

}

export default StarRatingEntry;