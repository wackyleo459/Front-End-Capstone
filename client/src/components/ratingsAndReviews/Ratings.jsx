import React from 'react';
import axios from 'axios';
import StarRatingEntry from './StarRatingEntry.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ratingResult: 0,
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
        })
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="column1Nd ratingsComponent">
        <label id="title">Ratings and Reviews</label>
        <div>
          <StarRatingEntry reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}
export default Ratings;