import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import Rating from 'react-rating';
import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="column1Nd">
        <label id="title">Ratings and Reviews</label>
        <h1>3.5</h1>
        <div className="starNumberRatingNd">
           <span>
              <Rating emptySymbol="fa fa-star-o fa-1x" fullSymbol="fa fa-star fa-1x"/>
           </span>
        </div>
        <p>100% of reviews recommend this product</p>
      </div>
    )
  }
}

export default Ratings;