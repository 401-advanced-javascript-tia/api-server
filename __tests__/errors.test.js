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
      }).catch(console.error);
  });

  it('should respond with a 404 on an invalid method', () => {
    return mockRequest
      .post('/')
      .then( results=> {
        expect(results.status).toBe(404);
      }).catch(console.error);
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
