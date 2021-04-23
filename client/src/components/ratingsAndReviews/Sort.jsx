import React from 'react';

const Sort = ({ getProductInfo, category, reviews }) => (
  <div className="sortNd">
    <label id="labelNd"><b>{reviews} Reviews sorted by</b></label>
    <select className="selectButtonNd" id="dropDownNd" onChange={(event) => getProductInfo(event)}>
      <option id="text-decoration-style: underline" value="helpfulness" >Helpfulness</option>
      <option value="helpfulness">Relevance</option>
      <option value="newest">Newest</option>
    </select>
  </div>
)

export default Sort;