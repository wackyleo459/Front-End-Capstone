import React from 'react';
import axios from 'axios';
import ReviewEntry from './ReviewEntry.jsx';
import Ratings from './Ratings.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.productId,
      review_id: 0,
      helpfulness: 0,
      visible: false,
      reviews: [],
      moreReviews: [],
      category: 'helpfulness',
      product_id: 0
    };

    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.handleHelpfulChange = this.handleHelpfulChange.bind(this);
    this.openImageModal = this.openImageModal.bind(this);
    this.closeImageModal = this.closeImageModal.bind(this);
    this.fillRatingStars = this.fillRatingStars.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.updateProductHelpfulness = this.updateProductHelpfulness.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {

    this.getProductInfo()
  }

  handleHelpfulChange(index) {
    this.setState({
      helpfulness: this.state.helpfulness + 1
    }, console.log(() => this.state));
  }

  getProductInfo(event) {
    let category = this.state.category;
    if (event) {
      this.setState({
        category: event.target.value
      })
      category = event.target.value
    }

    axios.get(`http://localhost:3000/reviews/?&sort=${category}`)
      .then((res) => {
        let copyData = res.data.reviews.results;
        let sliced = copyData.slice(0, 2);
        this.setState({
          reviews: sliced,
          moreReviews: copyData.slice(2)
        })
      })
      .catch(err => console.error(err));
  }

  getProduct() {
    console.log(this.props.productId)
    axios.get(`http://localhost:3000/reviews/?product_id=${this.state.productId}`)
      .then((res) => {
        this.setState({
          reviews: res.data
        })
      })
      .catch((err) => console.error(err));
  }

  updateProductHelpfulness(event) {
    event.preventDefault();
    let reviewId = event.target.value
    axios.put(`http://localhost:3000/reviews/:${reviewId}/helpful`, { data: this.state.helpfulness })
      .then(() => {
        this.setState({
          reviews: res.data.reviews
        })
      })
      .catch((err) => console.error(err))
  }

  fillRatingStars(num) {
    const rating = Array(5).fill(<i className="far fa-star"></i>);
    for (let i = 0; i < num; i++) {
      rating[i] = <i key={i} className="fas fa-star"></i>
      if (num % 1 !== 0) {
        rating[Math.floor(Math.abs(num))] = <i key={i} className="fas fa-star-half-alt"></i>
      }
    }
    return rating;
  }

  getAverageRating(ratings) {
    const avg = ratings.reduce((avg, review) => avg += review.rating, 0) / this.state.reviews.length;
    return Math.max(Math.round(avg * 10) / 10)
  };


  handleMoreReviews(event) {
    this.setState({
      reviews: this.state.reviews.concat(this.state.moreReviews),
      moreReviews: this.state.moreReviews.slice(2)
    })
  }

  openImageModal() {
    this.setState({
      visible: true
    });
  }

  closeImageModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div className="columnNd">
        <div className="sortNd">
          <label id="labelNd"><b>{this.state.reviews.length} Reviews sorted by</b></label>
          <select className="selectButtonNd" onChange={(event) => this.getProductInfo(event)}>
            <option id="text-decoration-style: underline" value="helpfulness" >Helpfulness</option>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="reviewsNd">
          {this.state.reviews.map((review, index) => (
            <ReviewEntry
              review={review}
              key={review.review_id}
              helpfulChange={this.updateProductHelpfulness}
              openImageModal={this.openImageModal}
              closeImageModal={this.closeImageModal}
              visible={this.state.visible}
              stars={this.fillRatingStars(review.rating)}
              helpful={this.state.helpfulness}
            />
          ))}
        </div>
        <div className="moreReviewsButtonNd">
          {(this.state.moreReviews.length === 0) ? <b>No more reviews</b> : (
            <input type="button" value="MORE REVIEWS" onClick={this.handleMoreReviews} />)}
        </div>
      </div>
    )
  }
}

export default Reviews;