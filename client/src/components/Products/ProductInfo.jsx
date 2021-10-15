import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta/";

const ProductInfo = ({ product, selectedStyle }) => {
  const auth = {
    headers: {
      Authorization: process.env.API_KEY,
    },
    params: {
      product_id: `${product.id}`,
    },
  };

  const [avgRating, setRating] = useState(3.12);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    axios.get(url, auth).then(({ data }) => {
      let total = 0;
      let votes = 0;
      if (Object.keys(data.ratings).length === 0) {
        setRating(0);
      } else {
        let totalVotes = Object.values(data.ratings).map((ea) => Number(ea));
        let rangeRatings = Object.keys(data.ratings).map((ea) => Number(ea));
        totalVotes.forEach((eaVote, ind) => {
          total += eaVote * rangeRatings[ind];
          votes += eaVote;
        });
        setReviews(votes);
        setRating(total / votes);
      }
    });
  }, [product]);

  const sale = selectedStyle.sale_price;

  const checkSale = function (input) {
    if (input) {
      return { textDecoration: "line-through" };
    }
  };

  return (
    <div id="productInfo">
      <div className="product-description">
        <div>
          <StarRatings
            className="starRating"
            numberOfStars={5}
            rating={avgRating}
            starDimension="18px"
            starSpacing="1px"
            starRatedColor="black"
            starEmptyColor="gainsboro"
          />
          <span style={{ fontSize: 13, marginLeft: 20 }}>
            <a href="#ratingsReviews">Read all reviews</a>
          </span>
        </div>
        <div className="category">Category: {product.category}</div>
        <div className="title">{product.name}</div>
        <div className="price">
          {sale ? (
            <span className="salePrice" style={{ color: "maroon" }}>
              ${sale}
            </span>
          ) : null}
          <span className="originalPrice" style={checkSale(sale)}>
            ${selectedStyle.original_price}
          </span>
        </div>
        <div className="overview">{product.description}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
