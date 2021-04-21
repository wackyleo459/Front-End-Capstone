const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/reviews')
  .get(controllers.getReviews)
  .post(controllers.postReviews)

module.exports = router