import React from "react";
import ProductDetail from "./ProductDetail.jsx";
import Reviews from "./ratingsAndReviews/Reviews.jsx";
import Ratings from "./ratingsAndReviews/Ratings.jsx";
import axios from "axios";
import QandA from "./Q&A/q&a.jsx";
import captureData from "./clickData/captureData.jsx";
import API_KEY from "../../../config.js";

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/";
const auth = {
  headers: {
    Authorization: API_KEY,
  },
  params: {
    page: 2,
    count: 4,
  },
};
const auth0 = {
  headers: {
    Authorization: API_KEY,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 42366,
      currentProduct: "",
      productStyles: "",
      availProducts: "",
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.selectId = this.selectId.bind(this);
  }
  componentDidMount() {
    this.getProducts();
    this.getProduct();
  }

  selectId(e) {
    this.setState({
      selected: e.target.value,
    });
  }
  getProducts() {
    axios
      .get(url, auth)
      .then(({ data }) => {
        this.setState({
          availProducts: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getProduct() {
    axios
      .get(url + `${this.state.selected}`, auth0)
      .then(({ data }) => {
        this.setState({
          currentProduct: {
            id: data.id,
            name: data.name,
            slogan: data.slogan,
            description: data.description,
            category: data.category,
            default_price: data.default_price,
            features: data.features,
          },
        });
        this.getStyles(this.state.selected);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getStyles(id) {
    axios
      .get(url + `${id}/styles`, auth0)
      .then(({ data }) => {
        this.setState({
          productStyles: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (
      this.state.currentProduct &&
      this.state.productStyles &&
      this.state.availProducts
    ) {
      return (
        <React.Fragment>
          <nav className="navbar sticky-top navbar-light">
            <span className="navbar-brand mb-0 h1">NNS</span>
            <div
              className="nav-item input-group"
              style={{ width: "fit-content" }}
            >
              <select onChange={this.selectId} defaultValue="Select Product">
                {this.state.availProducts.map(({ name, id }, ind) => (
                  <option value={id} key={ind}>
                    {name}
                  </option>
                ))}
              </select>
              <button onClick={this.getProduct}>Get Product</button>
            </div>
            <a className="nav-link" href="#productInfo">
              Product Info
            </a>
            <a className="nav-link" href="#ratingsReviews">
              Reviews
            </a>
            <a className="nav-link" href="#QA">
              Q and A
            </a>
            <a className="nav-link" href="#">
              {`Check Out `}
              <i className="fas fa-shopping-cart"></i>
            </a>
          </nav>

          <div
            className="main"
            data-spy="scroll"
            data-target="navbar"
            data-offset="0"
          >
            <ProductDetail
              product={this.state.currentProduct}
              productStyles={this.state.productStyles}
            />
            <div id="ratingsReviews">
              <h4 id="rrTitle">Ratings and Reviews</h4>
              <Ratings />
              <Reviews />
            </div>
            <br />
            <QandA />
          </div>
        </React.Fragment>
      );
    } else {
      return <div>App rendering</div>;
    }
  }
}

export default App;
