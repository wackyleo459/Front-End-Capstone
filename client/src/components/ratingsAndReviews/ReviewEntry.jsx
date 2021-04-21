import React from 'react';
import Rating from 'react-rating'

const ReviewEntry = ({ review, handleToggle }) => (
  <div>
    <div className="starUserDateNd">
      <span>
        <Rating emptySymbol="fa fa-star-o fa-1x" fullSymbol="fa fa-star fa-1x"/>
      </span>
      <span>{new Date(review.date).toString().slice(0, 21)}</span>
    </div>
    <div>
      <h3 className="reviewTitleNd">{review.summary}...</h3>
      <p className="reviewFeedBodyNd">{review.body}</p>
      <p>{review.response}</p>
      <a>Helpful? Yes({review.helpfulness}) | Report</a>
    </div>
    <hr/>
  </div>
)

export default ReviewEntry;