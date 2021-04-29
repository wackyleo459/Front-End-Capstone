import React from 'react';
import Reviews from './ratingsAndReviews/Reviews.jsx'
import Ratings from './ratingsAndReviews/Ratings.jsx'
import QandA from './Q&A/q&a.jsx'

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
        {/* <div className="qandanf">
        <QandA />
      </div> */}
      <br/>
      <div className="ratingsAndReviews">
        <Reviews />
        <Ratings />
      </div>
    </div>
    )
  }
}

export default App;