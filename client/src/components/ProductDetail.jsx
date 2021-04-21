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
      view: 'collapsed',
      shoeStyle: ''
    };

    this.expandView = this.expandView.bind(this);
    this.setShoeStyle = this.setShoeStyle.bind(this);
  }

  expandView (e) {
    e.preventDefault();
    this.state.view === 'collapsed' ?
      this.setState({view: 'expanded'}) : this.setState({view: 'collapsed'});
    }


  setShoeStyle(style) {
    this.setState({ shoeStyle: style }, () => {console.log(this.state.shoeStyle)});
  }

  render () {
    return (
      <div className="productDetail">
        <div className={this.state.view}>
          <ImageGallery detail={shoeDetails} clickExpand={this.expandView} view={this.state.view}/>

        {this.state.view === 'collapsed' ?
          <React.Fragment>
            <ProductInfo styles={shoes}/>
            {/* pass state's shoeStyle as currentStyle */}
            <StyleSelector styles={shoes} setStyle={this.setShoeStyle} />
            <AddCart />
           </React.Fragment>
            : null }
        </div>
      </div>
    )
  }
}