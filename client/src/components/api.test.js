// const request = require('supertest');
// const app = require('../../../server/index.js');

// describe('POST /reviews', () => {
//   it('responds with data from the server', (done) => {
//     request(app)
//       .get(`/reviews?randomListing=${Math.floor(Math.random() * 100) + 1}`)
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end((err) => {
//         if (err) return done(err);
//         done();
//       });
//   });
// });