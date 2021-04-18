import React from 'react';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '' //index
    }
  }
 //expanded: overlay becomes icons
 //collapsed: overlay stays as image
 //left & right arrows
 //onHover w/ magnifying '+' symbol
  //zoom 2.5*
  render() {
    return (
      <div className="imageGallery">

        <img className="mainImg" src ="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2af1560aab574695a3b4ac7200d483c9_9366/4D_Fusio_Shoes_Orange_FY5929_01_standard.jpg"></img>
        <div className="overlay">
          {this.props.shoes.map((shoe, ind) => (
            <img className="thumbnail" key={ind} id={shoe.color} src={shoe.src} />
          ))}
        </div>
        <button id="expand" type="button" onClick={this.props.clickExpand}>
          <i id="expandFas" className="fas fa-expand-alt fa-lg" ></i>
        </button>
      </div>

    )
  }
}

