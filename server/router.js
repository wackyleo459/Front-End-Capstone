const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/reviews')
  .get(controllers.getReviews)
  .post(controllers.postReviews)

router
  .route('/reviews/meta')
  .get(controllers.getReviewsMeta)


router.get('/qa/questions', controllers.getQuestions)
  // .post(controllers.postQuestions)
module.exports = router