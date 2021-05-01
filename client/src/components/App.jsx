import React from 'react';
import ProductDetail from './ProductDetail.jsx';
import Reviews from './ratingsAndReviews/Reviews.jsx'
import Ratings from './ratingsAndReviews/Ratings.jsx'
import axios from 'axios';
import API_KEY from '../../../config.js';
import QandA from './Q&A/q&a.jsx';
import captureData from './clickData/captureData.jsx';

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
      currentProduct: '',
      productStyles: ''
    }
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }
  componentDidMount() {
    this.getProduct(16060);
  }

  getProduct(id) {
    axios.get(url + `${id}`, auth)
      .then(({ data }) => {
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
        this.getStyles(id);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getStyles(id) {
    axios.get(url + `${id}/styles`, auth)
      .then(({ data }) => {
        this.setState({
          productStyles: data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.currentProduct && this.state.productStyles) {
      return (
        <React.Fragment>
          <nav className="navbar sticky-top navbar-light">
            <span className="navbar-brand mb-0 h1">NNS</span>
            <a className="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a className="nav-link" href="#productInfo">Product Info</a>
            <a className="nav-link" href="#">Sale</a>
            <a className="nav-link" href="#">{`Check Out `}
              <i className="fas fa-shopping-cart"></i>
              <span className="cartItems">{2}</span>
            </a>
          </nav>

          <div className="main"data-spy="scroll" data-target="navbar" data-offset="0" >
            <ProductDetail
              product={this.state.currentProduct}
              productStyles={this.state.productStyles} />
            <div id="ratingsReviews">
              <Ratings />
              <Reviews />
            </div>
            <br />
            <QandA />
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <div>App rendering</div>
      )
    }
  }
};

export default App;