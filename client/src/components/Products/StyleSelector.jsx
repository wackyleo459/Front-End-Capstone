import React from 'react';

const StyleSelector = (props) => {
  return (
    <div className="selectStyle">
      {props.styles.map((style, ind) => (
        <img key={ind} src={style.src} alt={style.color} style={{ width: 60 }} />
      ))}
    </div>
  )
};

export default StyleSelector;