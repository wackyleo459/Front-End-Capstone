import React from 'react';
import ModalChars from './ModalChars.jsx';

const ModalAddReview = ({ handleChange, handleBodyCharChange, handleSummaryCharChange, bodyCharsRequired, summaryCharsRequired, closeModal }) => {
  return (
    <div>
        <h2 id="reviewFormNd">Review Form</h2>

        <div className="overAllRatingNd">
          <label id="labelNd"><b>* Rating:</b></label>
          <select className="selectRatingNd" name="rating" onChange={(event) => handleChange(event)}>
            <option>Choose a Rating</option>
            <option name="rating" value={5}>5stars "Great"</option>
            <option name="rating" value={4}>4stars "Good"</option>
            <option name="rating" value={3}>3stars "Average"</option>
            <option name="rating" value={2}>2stars "Fair"</option>
            <option name="rating" value={1}>1star "Poor"</option>
          </select>
        </div>
        <div className="reviewSummaryNd">
          <label id="labelNd"><b>Sumary</b></label>
          <br/>
          <textarea onChange={(event) => {handleChange(event); handleSummaryCharChange(event)}} maxLength="60" name="summary" rows="2"  width="20" className="modalTextAreaNd"></textarea>
          <p className="requiredCharsNd">{summaryCharsRequired}</p>
        </div>
        <div className="reviewBodyNd">
          <label id="labelNd"><b>* Review</b></label>
          <br/>
          <textarea onChange={(event) => {handleChange(event); handleBodyCharChange(event)}} maxLength="1000" name="body" rows="5" width="25" className="modalTextAreaNd"></textarea>
          <p className="requiredCharsNd">{bodyCharsRequired}</p>
        </div>
        <ModalChars handleChange={handleChange}/>
          <br/>
        <div className="recommendationNd">
          <label id="labelNd"><b>* Do you recommend this product?</b></label>
          <br/>
          <label htmlFor="recommend" className="radio">
          <input onClick={(event) => handleChange(event)} type="radio" value={true} name="recommend"/>
              Yes
          </label>
          <label htmlFor="recommend"className="radio">
          <input onClick={(event) => handleChange(event)} type="radio" value={false} name="recommend"/>
              No
          </label>
        </div>
        <div className="nicknameNd">
          <label id="labelNd"><b>* Name</b></label>
          <br/>
          <input type="text" id="nicknameNd" name="name" onChange={(event) => handleChange(event)} />
          </div>
          <div className="emailNd">
          <label id="labelNd"><b>* email</b></label>
          <br/>
          <input type="text" id="emailNd" name="email" onChange={(event) => handleChange(event)} />
        </div>
        <div className="uploadPhotosNd">
          <label id="labelNd"><b>Upload your photos</b></label>
          <br/>
          <input type="file" id="uploadPhotosNd" accept="image/*" name="photos" onChange={(event) => handleChange(event)}/>
        </div>

    </div>
  )
}

export default ModalAddReview;