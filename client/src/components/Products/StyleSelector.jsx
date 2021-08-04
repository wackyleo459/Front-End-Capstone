import React, { useState, useEffect } from "react";

const StyleSelector = ({ product, styles, setStyle }) => {
  const [currentIndex, setIndex] = useState(0);

  const select = (event, index) => {
    event.preventDefault();
    setStyle(index); //updates parent's state
    setIndex(index); //updates current component state
  };

  const highlightStyle = (index) => {
    if (index === currentIndex) {
      return { border: "1px solid blue" };
    }
  };
  useEffect(() => {
    setIndex(0);
    setStyle(0);
  }, [styles, product]);

  return (
    <div className="stylesDisplay">
      Style: {styles[currentIndex].name}
      <div className="selectStyles">
        {styles.map(({ style_id, name, photos }, ind) => (
          <img
            className="selectStyle"
            key={ind}
            src={photos[0].thumbnail_url}
            alt={name}
            onClick={(e) => {
              select(e, ind);
            }}
            style={highlightStyle(ind)}
          />
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
