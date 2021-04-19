import React from 'react';
import ProductDetail from './ProductDetail.jsx';
import Reviews from './ratingsAndReviews/Reviews.jsx'
import Ratings from './ratingsAndReviews/Ratings.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      something: []
    }
  }


  render() {
    return (
    <div className="main">
      <header className="nav">Header for Navigation Bar
      </header>
      <ProductDetail className="productOverview"/>
      <Reviews />
      <Ratings />
    </div>
    )
  }


};

export default App;