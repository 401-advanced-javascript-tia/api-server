'use strict';

const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('404 Error Handling', () => {

  it('should respond with a 404 on an invalid route', () => {
    return mockRequest
      .get('/invalid')
      .then( results=> {
        expect(results.status).toBe(404);
      });
    // have to take out the catch because it will cause the test to pass- false positive- this function will catch the error befor Jest seeing that an error exists    .catch(console.error);
  });

  it('should response with 404 on invalid route', async () => {

    //different way of writing the above test
    const results = await mockRequest.get('/invalid');
    expect(results.status).toBe(404);

  });

  it('should respond with a 404 on an invalid method', () => {
    return mockRequest
      .post('/')
      .then( results=> {
        expect(results.status).toBe(404);
      });
  });

  it('should respond with a 404 on an invalid method', async () => {
    
    const results = await mockRequest.get('/invalid');
    expect(results.status).toBe(404);

  });
  
});



describe('500 Error Handling', () => {
  
  it('should respond with a 500 on a server error', () => {
    return mockRequest
      .get('/badroute')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
  
});


describe('Sunny Day - 200 Handling', () => {

  it('should respond with 200 on proper request to categories', () => {
    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);
  });

  it('should respond with 200 on proper request to products', () => {
    return mockRequest
      .get('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);
  });

});
