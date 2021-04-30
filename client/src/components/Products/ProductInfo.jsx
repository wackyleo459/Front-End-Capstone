import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const ProductInfo = ({ product, selectedStyle }) => {
  const sale = selectedStyle.sale_price;
  const checkSale = function (input) {
    if (input) {
      return { textDecoration: 'line-through' };
    }
  }

  return (
    <div className="productInfo">
      <div className="product-description">
        <div>
          <StarRatings
            className='starRating'
            numberOfStars={5}
            rating={3.12}
            starDimension="18px"
            starSpacing="1px"
            starRatedColor='black'
            starEmptyColor='gainsboro' />
          <span style={{ fontSize: 12, marginLeft: 10 }}>
            <a href='https://www.w3schools.com/cssref/pr_dim_min-width.asp'>Read all reviews</a>
          </span>
        </div>
        <div className="category">Category: {product.category}</div>
        <div className="title">{product.name}</div>
        <div className="price">
          {sale ? <span className="salePrice" style={{ color: 'maroon' }}>${sale}</span> : null}
          <span className="originalPrice" style={checkSale(sale)}>
            ${selectedStyle.original_price}
          </span>
        </div>
        <div className="overview">{product.description}</div>
      </div>
    </div >
  )
}

export default ProductInfo;