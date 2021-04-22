import React, { useState } from 'react';

const StyleSelector = ({styles, setStyle, currentStyle}) => {
  // const [currentStyleInd, setStyle] = useState(0);

  // const selectStyle = (event, index) => {
  //   event.preventDefault();
  //   setStyle(index);
  // };

  const highlightStyle = (styleId) => {
    if (styleId === currentStyle) { //can change to props.currentStyle
      return { border: '1px solid blue' };
    }
  }

  return (
    <div className="selectStyles">
      {styles.results.map((style, ind) => (
        <img className="selectStyle" key={ind} src={style.photos[0].thumbnail_url} alt={style.name} onClick={() => { setStyle(style.style_id) }} style={highlightStyle(style.style_id)}/>
      ))}
    </div>
  )
};

export default StyleSelector;