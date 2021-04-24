import React from 'react';
import axios from 'axios';
import StarRatingEntry from './StarRatingEntry.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: 0,
      reviews: []
    }

    this.getRating = this.getRating.bind(this);

  }

  componentDidMount() {
    this.getRating()
  }

  getRating(event) {
    axios.get(`http://localhost:3000/reviews`)
      .then((res) => {
        this.setState({
          reviews: res.data.results
        }, () => console.log(res.data.results))
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="column1Nd">
        <label id="title">Ratings and Reviews</label>

        <div id="ratingsSummaryNd">
          <p>100% of reviews recommend this product</p>
        </div>
        <div className="starNumberRatingNd">
          {this.state.reviews.map((review, index) => (
            <StarRatingEntry review={review} key={index}/>
          ))}
        </div>
      </div>
    )
  }
}
export default Ratings;