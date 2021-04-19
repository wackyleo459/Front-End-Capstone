import React from 'react';
import ImageGallery from './Products/ImageGallery.jsx';
import ProductInfo from './Products/ProductInfo.jsx';
import StyleSelector from './Products/StyleSelector.jsx';
import AddCart from './Products/AddCart.jsx';
import shoes from '../../data/shoeStyles.js';
import shoeDetails from '../../data/shoeDetails.js';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'collapsed'
    }
    this.expandView = this.expandView.bind(this);
  }

  expandView (e) {
    e.preventDefault();
    if (this.state.view === 'collapsed') {
      this.setState({view: 'expanded'});
    } else {
      this.setState({view: 'collapsed'});
    }
  }

  render () {
    return (
      <div className="productDetail">
        <div className={this.state.view}>
          <ImageGallery detail={shoeDetails} clickExpand={this.expandView} view={this.state.view}/>

        {this.state.view === 'collapsed' ?
          <React.Fragment>
            <ProductInfo />
            <StyleSelector styles={shoes}/>
            <AddCart />
           </React.Fragment>
            : null }
        </div>
      </div>
    )
  }
}