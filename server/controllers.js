const axios = require('axios');
const token = require('../config.js');

controllers = {
  getReviews: (req, res) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?page=1&count=100&sort=relevant&product_id=16057', { headers: {Authorization: `${token}`}})
      .then((response) => {
        res.status(200).send(response.data)
      })
      .catch((err) => console.error(err))
  },

  postReviews: (req, res) => {
    console.log('from controllers!!')
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/', { headers: {Authorization: `${token}`}})
      .then((response) => {
        res.status(200).send(response.data)
      })
      .catch((err) => console.error(err))
  }
}

module.exports = controllers;


