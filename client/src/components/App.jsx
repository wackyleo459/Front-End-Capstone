import React from 'react';
import Reviews from './ratingsAndReviews/Reviews.jsx'
import Ratings from './ratingsAndReviews/Ratings.jsx'
import QandA from './Q&A/q&a.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      something: []
    }
  }


  render() {
    return (
    <div>
      {/* <Reviews /> */}
      {/* <Ratings /> */}
      <QandA />
    </div>
    )
  }
}

export default App;