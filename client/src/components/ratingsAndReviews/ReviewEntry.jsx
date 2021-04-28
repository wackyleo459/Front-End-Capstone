import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Stars from '../styles/Stars.js';
import Modal from 'react-awesome-modal';


const ReviewEntry = ({ reviews, review, stars, helpfulChange, openImageModal, closeImageModal, visible }) => {
  let ratingResult = 0;
  ratingResult += review.rating / reviews.length;
  let ratingRounded = Math.round(ratingResult * 10) / 10;
  return (

  <div>
    <div className="starUserDateNd">
      <span>
        <Stars>{stars}</Stars>
        </span>
      <span>{review.reviewer_name}, {new Date(review.date).toString().slice(0, 16)}</span>
    </div>
    <div>
      {review.summary.length > 50 ?
      <h2 className="reviewTitleNd">{review.summary.slice(0, 57)}...</h2>
      :
      <h2 className="reviewTitleNd">{review.summary}</h2>
      }
      <p className="reviewFeedBodyNd">{review.body}</p>

      <p className="reviewRecommendNd">{review.recommend}</p>
      <input className="openModalPhotoNd" type="button" value="Profile Picture" onClick={() => openImageModal()}/>
      <Modal visible={visible} width="800" height="500" effect="fadeInUp" onClickAway={() => closeImageModal()}>
        {!review.photos ? null :
        <img src={review.photos}/>}
      </Modal>
      {!review.response ? null :
      <div className="reviewResponseNd">
        <b>Response:{review.response}</b>
        </div>}
      <a onClick={helpfulChange}>Helpful? <u>Yes</u>({review.helpfulness}) | <u>Report</u></a>
    </div>
    <hr/>
  </div>
  )
}

export default ReviewEntry;