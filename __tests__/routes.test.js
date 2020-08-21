'use strict';

const rootDir = process.cwd();
const supergoose = require('./supergoose.js');
const {server} = require(`${rootDir}/lib/server.js`);
const mockRequest = supergoose(server);

it('should be able to post to /api/v1/categories', () => {

  let obj = {name:'test'};

  return mockRequest
    .post('/api/v1/categories')
    .send(obj)
    .then(results => {
      expect(results.status).toBe(200);
      expect(results.body.name).toEqual(obj.name);
    });

});


// it('following a post to categories, should find a single record', () => {

//   let obj = {name:'testing'};

//   return mockRequest
//     .post('/api/v1/categories')
//     .send(obj)
//     .then(results => {
//       return mockRequest.get(`/api/v1/categories/${results.body._id}`)
//         .then(list => {
//           expect(list.status).toBe(200);
//           expect(list.body.name).toEqual(obj.name);
//         });
//     });

// });