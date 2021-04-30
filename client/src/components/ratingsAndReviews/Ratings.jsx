import React, { Component } from 'react';
import axios from 'axios';
import StarRatingEntry from './StarRatingEntry.jsx';
import CharProductBreakDown from './CharProductBreakDown.jsx';


class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 16060,
      reviews: [],
      reviewsMeta: []
    }

    this.getRating = this.getRating.bind(this);
    this.getRatingMeta = this.getRatingMeta.bind(this);
    this.fillRatingStars = this.fillRatingStars.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getPercentage = this.getPercentage.bind(this);
    this.countNumOfEachRating = this.countNumOfEachRating.bind(this);
    this.handleRatingCaret = this.handleRatingCaret.bind(this);
  }

  componentDidMount() {
    this.getRating()
    this.getRatingMeta()
  }


  getRating(event) {
    axios.get(`http://localhost:3000/reviews/?product_id=${this.state.id}`)
    .then((res) => {
      this.setState({
        reviews: res.data.reviews.results
      })
    })
    .catch((err) => console.error(err));
  }

  getRatingMeta(event) {
    axios.get(`http://localhost:3000/reviews/meta/?product_id=${this.state.id}`)
    .then((res) => {
      this.setState({
        reviewsMeta: res.data
      })
    })
    .catch((err) => console.error(err));
  }

  getPercentage(rating) {
   return Math.round(rating / this.state.reviews.length * 100);
  }

  getMetaPercentage(rating) {
    return Math.round(rating / this.state.reviewsMeta.length * 100)
  }

  handleRatingCaret(num) {
    return <i className="fas fa-star"></i>
  }

  fillRatingStars(num) {
    const rating = Array(5).fill(<i className="far fa-star"></i>);
    for (let i = 0; i < num; i++) {
      rating[i] = <i key={i * 10} className="fas fa-star"></i>
      if (num % 1 !== 0) {
        rating[Math.floor(Math.abs(num))] = <i key={i * 10} className="fas fa-star-half-alt"></i>
      }
    }
    return rating;
  }

  getAverageRating(list) {
    const avg = list.reduce((avg, review) => avg += review.rating, 0) / this.state.reviews.length;
    return Math.max(Math.round(avg * 10) / 10)
  };

  countNumOfEachRating(list) {
    return list.reduce((count, review) => {
      const rating = review.rating;
      count[rating] += 1;
      return (count <= 9) ? '0 ' + count : count;
    }, {1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
  };

  render() {
    return (
      <div className="column1Nd">
        <div className="ratingsNd">
        <h1>Ratings and Reviews</h1>
        <div>
            <StarRatingEntry
              reviews={this.state.reviews}
              key={this.state.reviews.id}
              stars={this.fillRatingStars(this.getAverageRating(this.state.reviews))}
              averageStars={this.getAverageRating(this.state.reviews)}
              numOfEachcRating={this.countNumOfEachRating(this.state.reviews)}
              getPercentage={this.getPercentage}
            />
            <CharProductBreakDown
              reviewsMeta={this.state.reviewsMeta}
              getAverageRating={this.getAverageRating}
              getMetaPercentage={this.getMetaPercentage}
              carets={this.handleRatingCaret}
            />

        </div>
        </div>
      </div>
    )
  }
}
export default Ratings;