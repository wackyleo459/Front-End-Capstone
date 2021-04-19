import React from 'react';
import StarRatings from 'react-star-ratings';
import $ from 'jquery';

const appendFB = $('.fa-facebook-square').append(facebookShare);

const facebookShare = <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
// http://www.facebook.com/share.php?u=hubspot.com
//https://www.pinterest.com/pin/99360735500167749/

const ProductInfo = () => (
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
        <span style={{fontSize: 12, marginLeft: 10}}>
          <a href='https://www.w3schools.com/cssref/pr_dim_min-width.asp'>Read all reviews</a>
        </span>
      </div>
      <div className="category"> Running Shoes</div>
      <div className="title">4D Fusio Shoes</div>
      <div className="price">$200</div>
      <div className="overview">This product is excluded from all promotional discounts and offers.</div>
      <div className="share">Share
          <i className="fab fa-facebook-square"></i>
          <a className="twitter-share-button" href="https://twitter.com/intent/tweet">
            <i className="fab fa-twitter"></i>
          </a>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
      </div>
    </div>
  </div>
)

export default ProductInfo;
//BORDER: 2PX SOLID GREEN