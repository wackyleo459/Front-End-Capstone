import React from 'react';
import ReviewStars from '../styles/ReviewStars.js';
import Modal from 'react-awesome-modal';


const ReviewEntry = ({ review, stars, helpfulChange, openImageModal, closeImageModal, visible }) => {
  return (
    <div>
        {review.summary.length > 50 ?
        <h2 className="reviewTitleNd">{review.summary.slice(0, 57)}...</h2> :
        <h2 className="reviewTitleNd">{review.summary}</h2>}
      <div className="starUserDateNd">
        <div><ReviewStars>{stars}</ReviewStars></div>
        <span>{review.reviewer_name}, {new Date(review.date).toString().slice(0, 16)}</span>
      </div>
      <div>
        <p className="reviewFeedBodyNd">{review.body}</p>
        <p className="reviewRecommendNd">{review.recommend}</p>
          {/* {!review.photos ? null :
          <img src={review.photos}/>} */}
        {!review.response ? null :
        <div className="reviewResponseNd">
          <b>Response:{review.response}</b>
          </div>}
          <div className="helpfulNd">
            <a onClick={() => helpfulChange()}>Helpful? 👍🏼 {review.helpfulness}  👎🏼</a>
          </div>
      </div>
      <hr/>
    </div>
  )
}

export default ReviewEntry;