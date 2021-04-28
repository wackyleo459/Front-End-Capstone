import React from 'react';
import axios from 'axios';
import ReviewEntry from './ReviewEntry.jsx';
import Ratings from './Ratings.jsx';
import Modals from './Modals.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpfulness: 0,
      visible: false,
      reviews: [],
      moreReviews: [],
      category: 'helpfulness',
      product_id: 0
    };

    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.handleHelpulChange = this.handleHelpfulChange.bind(this);
    this.openImageModal = this.openImageModal.bind(this);
    this.closeImageModal = this.closeImageModal.bind(this);
    this.fillRatingStars = this.fillRatingStars.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
  }

  componentDidMount() {
    this.getProductInfo();
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
        moreReviews: copyData.slice(2),
        product_id: res.data.product_id
      })
    })
    .catch(err => console.error(err));
  }

  handleHelpfulChange() {
    this.setState({
      helpfulness: this.state.helpfulness + 1
    })
  }

  fillRatingStars(num) {
    const rating = Array(5).fill(<i className="far fa-star"></i>);
    for (let i = 0; i < num; i++) {
      rating[i] = <i className="fas fa-star"></i>
    }
    return rating;
  }

  getAverageRating(list) {
    const avg = list.reduce((avg, review) => avg += review.rating, 0) / this.state.reviews.length;
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
      <div>
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
              reviews={this.state.reviews}
              review={review} key={index}
              helpfulChange={this.handleHelpfulChange}
              openImageModal={this.openImageModal}
              closeImageModal={this.closeImageModal}
              visible={this.state.visible}
              stars={this.fillRatingStars(this.getAverageRating(this.state.reviews))}
            />
          ))}
            <Modals productId={this.state.product_id}/>
            <div className="reviewsbuttonsNd">
              {(this.state.moreReviews.length === 0) ? null : (
                <input className="moreReviewsButtonNd" type="button" value="MORE REVIEWS" onClick={this.handleMoreReviews}/>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Reviews;