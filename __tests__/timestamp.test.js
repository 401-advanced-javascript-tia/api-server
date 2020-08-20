'use strict';

const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

let consoleSpy = jest.spyOn(console, 'log');

describe('Timestamp Middleware', () => {

  it('should call create instance of Date object', () => {

    return mockRequest
      .get('/products')
      .then( results => {
        // expect(consoleSpy).toInclude();
        
        // CANT QUITE FIGURE OUT WHAT TO TEST HERE! ILL COME BACK TO IT. 

        // console.log('RESULTS IN TIMESTAMP TEST: ', results);
      }).catch(console.error);

  });

});
