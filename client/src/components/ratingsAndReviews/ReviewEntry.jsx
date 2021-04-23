import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FaStar } from 'react-icons/fa'

const ReviewEntry = ({ review, helpfulChange }) => (
  <div>
    <div className="starUserDateNd">
      <span>
        <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => <span><FaStar/></span>}
            starCount={5}
            value={review.rating}
        />
      </span>
      <span>{new Date(review.date).toString().slice(0, 16)}</span>
    </div>
    <div>
      {review.summary.length > 50 ?
      <h2 className="reviewTitleNd">{review.summary.slice(0, 57)}...</h2>
      :
      <h2 className="reviewTitleNd">{review.summary}</h2>
      }
      <p className="reviewFeedBodyNd">{review.body}</p>
      {!review.response ? null :
      <div className="reviewResponseNd">
        <b>Response:</b>
        <p>{review.response}</p>
        </div>}

      <a onClick={(event) => helpfulChange(event)}>Helpful? <u>Yes</u>({review.helpfulness}) | <u>Report</u></a>
    </div>
    <hr/>
  </div>
)
export default ReviewEntry;