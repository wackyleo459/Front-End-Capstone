import React from 'react';
import Reviews from './ratingsAndReviews/Reviews.jsx'
import Ratings from './ratingsAndReviews/Ratings.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedReview: {}
    }

  }

  render() {
    return (
    <div>
      <Reviews />
      <Ratings />
    </div>
    )
  }
}

export default App;