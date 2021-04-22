import React from 'react';
import ProductDetail from './ProductDetail.jsx';
import Reviews from './ratingsAndReviews/Reviews.jsx'
import Ratings from './ratingsAndReviews/Ratings.jsx'
import axios from 'axios';
import API_KEY from '../../../config.js';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/';
const auth = {
  headers: {
    Authorization: API_KEY
  }
};

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentProduct: ''
    }
    this.getProduct = this.getProduct.bind(this);
  }
  componentDidMount() {
    this.getProduct(16056);
  }
 //id, name, slogan, description, category, default_price
  getProduct(id) {
    axios.get(url + `${id}`, auth)
      .then(({data}) => {
        this.setState({
          currentProduct: {
            id: data.id,
            name: data.name,
            slogan: data.slogan,
            description: data.description,
            category: data.category,
            default_price: data.default_price,
            features: data.features
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
    <div className="main">
      <header className="nav">Header for Navigation Bar
      </header>
      <ProductDetail className="productOverview" product={this.state.currentProduct}/>
      <Reviews />
      <Ratings />
    </div>
    )
  }
};

export default App;