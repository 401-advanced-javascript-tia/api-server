'use strict';

const {server} = require('../lib/server.js');
const timeMiddleware = require('../lib/middleware/timestamp.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

let req = {};
let res = {};
let next = jest.fn(); //to spy on the next method

describe('Timestamp Middleware', () => {

  it('should log output to console.log', () => {

    return mockRequest
      .get('/api/vi/products')
      .then( results => {
        let dateinHeader = results.req.res.headers.date;
        expect(dateinHeader).toBeDefined();
      });
    // .catch(console.error);

  });

  
  it('should move to next middleware when done', () => {
  
    timeMiddleware(req,res,next);
    expect(next).toHaveBeenCalled();
  });

});


