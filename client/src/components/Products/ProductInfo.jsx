import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const ProductInfo = ({ product, selectedStyle }) => {
  const sale = selectedStyle.sale_price;
  const checkSale = function(input) {
    if (input) {
      return {textDecoration: 'line-through'};
    }
  }

  return (
    <div className="productInfo">
      <div className="product-description">
        <div>
          <StarRatings
            className='starRating'
            numberOfStars={5}
            rating={3.5}
            starDimension="18px"
            starSpacing="1px"
            starRatedColor='black'
            starEmptyColor='gainsboro' />
          <span style={{ fontSize: 12, marginLeft: 10 }}>
            <a href='https://www.w3schools.com/cssref/pr_dim_min-width.asp'>Read all reviews</a>
          </span>
        </div>
        <div className="category">{product.category}</div>
        <div className="title">{product.name}</div>
        <div className='style'>{selectedStyle.name}</div>
        <div className="originalPrice" style={checkSale(sale)}>
          {selectedStyle.original_price}
        </div>
        <span className='salePrice'>{selectedStyle.sale_price}</span>
        <div className="overview">{product.description}</div>
        <div className="share">Share
          <span id='SNS'>
            <i className="fab fa-facebook-square"></i>
            <a className="twitter-share-button" href="https://twitter.com/intent/tweet">
              <i className="fab fa-twitter"></i>
            </a>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </span>
        </div>
      </div>
    </div >
  )
}

export default ProductInfo;
//BORDER: 2PX SOLID GREEN