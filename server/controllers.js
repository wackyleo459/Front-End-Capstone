const axios = require('axios');
const token = require('./config.js');
const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const controllers = {
  getReviews: (req, res) => {
    axios.get(`${URL}/reviews/?page=1&count=100&sort=${req.query.sort}&product_id=16060`, { headers: {Authorization: token}})
    .then((response) => {
      res.status(200).send(response.data)
      console.log(response.data)
      })
      .catch((err) => console.error(err))
  },

  postReviews: (req, res) => {
    axios.post(`${URL}/reviews/?rating=1&summary=thisisgood&body=thisisgood&recommend=true&name=kevin&email=me@gmail&photos=[png]&characteristics=&product_id=16057`, { headers: {Authorization: token}})
      .then((response) => {
        res.status(200).send(response.data)
      })
      .catch((err) => console.error(err))
  },

  getQuestions: (req, res) => {
    axios.get(`${URL}/qa/questions?page=1&count=10&sort=${req.query.sort}&product_id=16060`, { headers: {Authorization: token}})
      .then(results => {
        res.status(200).send(results.data)
      })
      .catch((err) => console.error(err))
  }
}

module.exports = controllers;


