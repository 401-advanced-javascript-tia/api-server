'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Timestamp Middleware', () => {

  it('should log valid timestamp', () => {

    return mockRequest
      // .get('/invalid')
      // .then( results=> {
      //   expect(results.status).toBe(404);
      // }).catch(console.error);

  });
  
  
});