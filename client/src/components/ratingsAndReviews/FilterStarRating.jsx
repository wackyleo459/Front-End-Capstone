import React from 'react';


const FilterStarRating = ({ stars }) => {

  return (
    <div className="ratingFilterNd">
      <h3 className="filterRatingTitleNd"><b>Filter by star rating</b></h3>
      <div className="filterRatingStarsNd">
        {stars}
      </div>
     </div>
  )
}
export default FilterStarRating;