import React from 'react';
import axios from 'axios';
import ReviewEntry from './ReviewEntry.jsx';
import Modals from './Modals.jsx'
import Sort from './Sort.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      moreReviews: [],
      category: 'relevance'
    };

    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
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
    axios.get(`http://localhost:3000/reviews/?sort=${category}`)
    .then((res) => {
      let copyData = res.data.results;
      let sliced = copyData.slice(0, 2)
      this.setState({
          reviews: sliced,
          moreReviews: copyData.slice(2)
      }, () => console.log(res.data.results))
    })
    .catch(err => console.error(err));
  }

  handleMoreReviews(event) {
    this.setState({
      reviews: this.state.reviews.concat(this.state.moreReviews.slice(0, 2)),
      moreReviews: this.state.moreReviews.slice(2)
    })
  }

  render() {
    return (
      <div>
        <div className="columnNd">
          <Sort category={this.state.category} getProductInfo={this.getProductInfo}/>

          {this.state.reviews.map((review, index) => (
            <ReviewEntry review={review} key={index}/>))}

            <Modals />
            {(this.state.moreReviews.length === 0) ? null : (
              <input className="buttonNd" type="button" value="MORE REVIEWS" onClick={this.handleMoreReviews}/>)}
        </div>
      </div>
    )
  }   
}

export default Reviews;