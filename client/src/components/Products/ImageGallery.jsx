import React, { useState, useRef } from 'react';

const ImageGallery = function (props) {
  const [currentIndex, setIndex] = useState(0);

  const thumbnailClick = (e, index) => {
    e.preventDefault();
    setIndex(index);
  }

  const arrowsClick = (e, direction) => {
    e.preventDefault();
    if (direction === 'left' && currentIndex > 0) {
      if (currentIndex === 7 && props.view === 'collapsed') {
        slideThumbnails('left');
      }
      setIndex((prevInd) => {
        return prevInd - 1;
      })
    } else if (direction === 'right' && currentIndex < props.detail.length - 1) {
      if (currentIndex === 6 && props.view === 'collapsed') {
        slideThumbnails('right');
      }
      setIndex((prevInd) => {
        return prevInd + 1;
      })
    }
  }

  const thumbnailStyle = (ind) => {
    if (ind === currentIndex) {
      return { border: '2px solid teal' };
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

  return (
    <div className="imageGallery">

      {props.view === 'collapsed' ?
        (<div className="overlay">
          <button id="slideLeft"
              style={{fontSize: '10px'}}
              onClick={() => slideThumbnails('left')}>{`<<`}
          </button>

          <div className="thumbnailContainer" >
            {props.detail.map((item, ind) => (
              <img className="thumbnail" key={ind}
                src={item.thumbnail_url}
                onClick={(e) => thumbnailClick(e, ind)}
                style={thumbnailStyle(ind)} />
            ))}
          </div>

          <button id="slideRight"
              style={{fontSize: '10px'}}
              onClick={() => slideThumbnails('right')}>{`>>`}
          </button>
        </div>)

      : (<div className="overlay">
         {props.detail.map((item, ind) => (
              <span class="material-icons md-48"
                  onClick={(e) => thumbnailClick(e, ind)}
                  style={thumbnailStyle(ind)}>horizontal_rule</span>
          ))}
        </div>)
      }

      <button id="expand" type="button" onClick={props.clickExpand}>
        <i id="expandFas" className="fas fa-expand-alt fa-lg" ></i>
      </button>
      <div className="left" onClick={(e) => arrowsClick(e, 'left')}>{`<`}</div>
      <div className="right" onClick={(e) => arrowsClick(e, 'right')}>{`>`}</div>
      <div className=
        {props.view === 'collapsed' ? 'mainViewCollapsed' : 'mainViewExpanded'}>
        <img className="mainImg" src={props.detail[currentIndex].url} />
      </div>
    </div>
  )
}
export default ImageGallery;


