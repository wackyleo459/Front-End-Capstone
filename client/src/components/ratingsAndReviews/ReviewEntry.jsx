import React from 'react';
import ReviewStars from '../styles/ReviewStars.js';
import Modal from 'react-awesome-modal';


const ReviewEntry = ({ review, helpful, stars, helpfulChange, openImageModal, closeImageModal, visible }) => {
  let photos = ''
  for (var i = 0; i < review.photos.length; i++) {
    photos += review.photos[i].url
  }
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
          {!photos ? null :
          <img width="200" height="300" src={photos}/>}
          <br/>
        {!review.response ? <b>This review has no response</b> :
        <div className="reviewResponseNd">
          <b>Response:{review.response}</b>
          </div>}
          <div className="helpfulNd">
            <button name="review_id" onClick={(event) => helpfulChange(event)}>Helpful? 👍🏼 {review.helpfulness}</button>
            <button name="review_id" onClick={(event) => helpfulChange(event)}>report</button>
          </div>
      </div>
      <hr/>
    </div>
  )
}

export default ReviewEntry;