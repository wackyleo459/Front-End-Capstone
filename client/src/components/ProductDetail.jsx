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
      //change to style Index? or keep?
      stylePhotos: '', //.map(each => each.url) //add current product's style as state.
      styleInfo : ''
    };
    this.expandView = this.expandView.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }
  componentDidMount() {
    this.setState({
      styleInfo: this.props.productStyles[0],
      stylePhotos: this.props.productStyles[0].photos
    })
  }

  expandView (e) {
    e.preventDefault();
    this.state.view === 'collapsed' ?
      this.setState({view: 'expanded'}) : this.setState({view: 'collapsed'});
    }


  setStyle(style) {
    const currentStyle = this.props.productStyles.find(eachStyle => style === eachStyle.style_id);
    const {name, original_price, sale_price} = currentStyle;

    this.setState({
      stylePhotos: currentStyle.photos,
      styleInfo: {
        name: name,
        original_price: original_price,
        sale_price: sale_price
      }
    });
  }

  render () {
    console.log('from productDetail productStyles', this.props.productStyles);
    console.log('from productDetail product', this.props.product);

    if (this.state.styleInfo && this.state.stylePhotos) {
      return (
        <div className="productDetail">
          <div className={this.state.view}>
            <ImageGallery detail={this.state.stylePhotos} clickExpand={this.expandView} view={this.state.view}/>

          {this.state.view === 'collapsed' ?
            <React.Fragment>
              <ProductInfo product={this.props.product} selectedStyle={this.state.styleInfo}/>
              <StyleSelector styles={this.props.productStyles} setStyle={this.setStyle} />
              <AddCart />
             </React.Fragment>
              : null }
          </div>
        </div>
      )
    } else {
      return (
        <div>Product Detail State not updated</div>
      )
    }

  }
}