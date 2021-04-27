import React, { useState, useRef } from 'react';

const ImageGallery = function (props) {
  const [currentIndex, setIndex] = useState(0);

  const thumbnailClick = (e, link, index) => {
    e.preventDefault();
    setIndex(index);
  }

  const arrowsClick = (e, direction) => {
    e.preventDefault();
    if (direction === 'left' && currentIndex > 0) {
      setIndex((prevInd) => {
        return prevInd - 1;
      })
    } else if (direction === 'right' && currentIndex < props.detail.length - 1) {
      setIndex((prevInd) => {
        return prevInd + 1;
      })
    }
  }

  const thumbnailStyle = (ind) => {
    if (ind === currentIndex) {
      return { boxShadow: '0 0 1px 1px grey' };
    }
  }

  const slideThumbnails = (direction) => {
    let container = document.querySelector('.thumbnailContainer');
    if (direction === 'left') {
      container.scrollLeft -= 185;
    }
    if (direction === 'right') {
      container.scrollLeft += 185;
    }
  }
  //expanded: overlay becomes icons
  //collapsed: overlay stays as image

  //onHover w/ magnifying '+' symbol
  //zoom 2.5*
  //style={{backgroundImage:`url(${props.detail[currentIndex].url})`}}
  return (
    <div className="imageGallery">
      <div className="overlay">
        <button id="slideLeft" style={{fontSize: '10px'}}
          onClick={() => slideThumbnails('left')}>{`<<`}</button>
        <div className="thumbnailContainer" >
          {props.detail.map((item, ind) => (
            <img className="thumbnail" key={ind} src={item.thumbnail_url}
              onClick={(e) => thumbnailClick(e, item, ind)}
              style={thumbnailStyle(ind)} />
          ))}
        </div>
        <button id="slideRight"  style={{fontSize: '10px'}}
          onClick={() => slideThumbnails('right')}>{`>>`}</button>
      </div>
      <button id="expand" type="button" onClick={props.clickExpand}>
        <i id="expandFas" className="fas fa-expand-alt fa-lg" ></i>
      </button>
      <div className="left" onClick={(e) => arrowsClick(e, 'left')}>{`<`}</div>
      <div className="right" onClick={(e) => arrowsClick(e, 'right')}>{`>`}</div>
      <div className="mainView">
        <img className="mainImg" src={props.detail[currentIndex].url} />
      </div>

      {/* <span className="material-icons">
        add_circle_outline
      </span> */}
    </div>
  )
}
export default ImageGallery;

{/* <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="mainImg" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2af1560aab574695a3b4ac7200d483c9_9366/4D_Fusio_Shoes_Orange_FY5929_01_standard.jpg" alt="first slide" />
          <Carousel.Caption>
            <p>caption as paragraph tag.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="mainImg" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/69d47e8502c2490d94e9ac5c0158e3ff_9366/Multix_Shoes_Red_H01896_41_detail.jpg" alt="second slide" />
          <Carousel.Caption>
            <p>caption as paragraph tag.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel> */}
      // <img className="mainImg" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/69d47e8502c2490d94e9ac5c0158e3ff_9366/Multix_Shoes_Red_H01896_41_detail.jpg" alt="second slide" />
