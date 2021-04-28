import React from 'react';
import ImageGallery from './Products/ImageGallery.jsx';
import ProductInfo from './Products/ProductInfo.jsx';
import StyleSelector from './Products/StyleSelector.jsx';
import AddCart from './Products/AddCart.jsx';

import styles from '../../data/styles.js';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'collapsed',
      stylePhotos: '',
      styleInfo: ''
    };
    this.expandView = this.expandView.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }
  componentDidMount() {
    this.setStyle(0);
  }

  expandView(e) {
    e.preventDefault();
    this.state.view === 'collapsed' ?
      this.setState({ view: 'expanded' }) : this.setState({ view: 'collapsed' });
  }


  setStyle(index) {
    const currentStyle = this.props.productStyles[index];
    const { name, original_price, sale_price, skus } = currentStyle;

    this.setState({
      stylePhotos: currentStyle.photos,
      styleInfo: {
        name: name,
        original_price: original_price,
        sale_price: sale_price,
        skus: Object.values(skus)
      }
    });
  }

  render() {

    if (this.state.styleInfo && this.state.stylePhotos) {
      return (
        <div className={this.state.view}>
          <ImageGallery detail={this.state.stylePhotos} clickExpand={this.expandView} view={this.state.view} />

          {this.state.view === 'collapsed' ?
            <React.Fragment>
              <ProductInfo product={this.props.product} selectedStyle={this.state.styleInfo} />
              <StyleSelector styles={this.props.productStyles} setStyle={this.setStyle} />
              <AddCart skus={this.state.styleInfo.skus} />
            </React.Fragment>
            : null}
        </div>
      )
    } else {
      return (
        <div>Product Detail State not updated</div>
      )
    }

  }
}