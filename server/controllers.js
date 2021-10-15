const axios = require("axios");
const URL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax";
const API_KEY = require("../config.js");

const token = API_KEY || process.env.API_KEY;

const controllers = {
  getReviews: (req, res) => {
    console.log("ReqBody", req.query);
    axios
      .get(
        `${URL}/reviews/?page=1&count=30&sort=${req.query.sort}&product_id=42366`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        res.status(200).send({ reviews: response.data });
        console.log(res.data);
      })
      .catch((err) => console.log("getReviews error", err));
  },

  getReviewsMeta: (req, res) => {
    axios
      .get(`${URL}/reviews/meta/?product_id=42366`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => console.error(err));
  },

  postReviews: (req, res) => {
    axios
      .post(`${URL}/reviews/?product_id=42366`, req.body, {
        headers: { Authorization: token },
      })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => console.error(err));
  },

  updateReviews: (req, res) => {
    axios
      .put(`${URL}/reviews/:review_id/helpful`, req.params.id, {
        headers: { Authorization: token },
      })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => console.error(err));
  },

  getQuestions: (req, res) => {
    console.log("getQ req.query", req.query);
    axios
      .get(
        `${URL}/qa/questions?page=1&count=10&sort=${req.query.sort}&product_id=${req.query.product_id}`,
        { headers: { Authorization: token } }
      )
      .then((response) => {
        res.status(200).send("this is req.query", req); //response.data
      })
      .catch((err) => console.error("get Q", err));
  },
};

module.exports = controllers;
