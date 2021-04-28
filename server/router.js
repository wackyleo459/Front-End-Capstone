const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/reviews')
  .get(controllers.getReviews)
  .post(controllers.postReviews)


router.get('/qa/questions', controllers.getQuestions)
  // .post(controllers.postQuestions)
module.exports = router