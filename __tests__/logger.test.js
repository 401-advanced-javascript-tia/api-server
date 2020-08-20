'use strict';

const {server} = require('../lib/server.js');
const supertest = require('supertest');

const mockRequest = supertest(server);

let consoleSpy = jest.spyOn(console, 'log');

describe('Logger Middleware', () => {

  it('should call console.log', () => {

    return mockRequest
      .get('/products')
      .then( results => {
        expect(consoleSpy).toHaveBeenCalled();
      }).catch(console.error);

  });

});