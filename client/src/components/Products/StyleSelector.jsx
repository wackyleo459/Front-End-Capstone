import React, { useState } from 'react';

const StyleSelector = (props) => {
  const [currentStyleInd, setStyle] = useState(0);

  const selectStyle = (event, index) => {
    event.preventDefault();
    setStyle(index);
  };

  const highlightStyle = (index) => {
    if (index === currentStyleInd) { //can change to props.currentStyle
      return { border: '1px solid blue' };
    }
  }

  return (
    <div className="selectStyles">
      {props.styles.map((style, ind) => (
        <img className="selectStyle" key={ind} src={style.src} alt={style.color} onClick={()=> {
          setStyle(ind);
          props.setStyle(ind)}} style={highlightStyle(ind)}/>
      ))}
    </div>
  )
};

export default StyleSelector;