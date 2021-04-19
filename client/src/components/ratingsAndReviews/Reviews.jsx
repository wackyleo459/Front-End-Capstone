import React from 'react';
import axios from 'axios';
import ReviewEntry from './ReviewEntry.jsx';
import Modals from './Modals.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      moreReviews: []
    }

    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
  }

  componentDidMount() {
    this.getProductInfo();
  }

  getProductInfo() {
    axios.get('http://localhost:3000/reviews')
    .then((res) => {
      let copyData = res.data.results;
      console.log(res)
      let sliced = copyData.slice(0, 2)
      this.setState({
          reviews: sliced,
          moreReviews: copyData.slice(2)
        })
      })

  }

  handleMoreReviews(event) {
    this.setState({
      reviews: this.state.reviews.concat(this.state.moreReviews.slice(0, 2)),
      moreReviews: this.state.moreReviews.slice(2)
    }, () => console.log('handleFunction', this.state))
  }

  render() {
    return (
      <div>
        <label className="column1" >Ratings and Reviews</label>
        <div className="column">
          <div className="sort">
            <label><b>sorted by Relevance</b></label>
            <select></select>
          </div>
          {this.state.reviews.map((review, index) => (
            <ReviewEntry review={review} key={index}/>
          ))}
            <Modals />
            { (this.state.moreReviews.length === 0) ? null : (
              <input className="button" type="button" value="MORE REVIEWS" onClick={this.handleMoreReviews}/>
            )}
        </div>
      </div>
    )
  }   
}

export default Reviews;